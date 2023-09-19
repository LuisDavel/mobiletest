import React, {useCallback, useEffect, useState} from 'react';
import * as S from './styles';
import Modal from 'react-native-modal';
import {
  View,
} from 'react-native';
import * as yup from 'yup'; 
import theme from '../../theme';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Select } from '../Select';
import { ControlledSelect } from '../ControlledSelect';
import Button from '../Button';

import { getDataStorage } from '../../utils/storage/handle-get-storage';
import { useModalContext } from '../../hooks/modalOpenContext';
import { storeData } from '../../utils/storage/handle-storage';
import { useMutation, useQuery } from 'react-query';
import { getLineAll, getUnitAll } from './api-urls';
import { api } from '../../utils/axios/axios';
import { addLabelAndValue } from '../../utils';
import { useSync } from '../../hooks/useSync';
import useRealmCrud from '../../hooks/useCrud';
import { Historic_defect } from '../../lib/realm/schema/historic_defect';

type Drawerprops = {
  children: React.ReactNode
  unit?: {
    label: string,
    value: number
  }[]
  line?: {
    label: string,
    value: number
  }[]
}

type OptionUnitProps = {
  descunidade: string, 
  idunidade: number  
}

type OptionLineProps = {
  desclinha: string, 
  idlinha: number  
}

const schema = yup.object().shape({
  unit: yup.number().required('Unidade é um campo obrigatório'),
  line: yup.number().required('Linha é um campo obrigatório'),
});

export default function DrawerLayout({ children }: Drawerprops) {
  const {createRecord, error, queryRealm} = useRealmCrud(Historic_defect.generate,'historic_defect')
  const syncDefects = useSync();
  const { isModalOpen, toggleModal } = useModalContext();
  const [user, setUser ] = useState(null)
  const methods = useForm({
    resolver: yupResolver(schema)
  });
  
  const { control, handleSubmit, formState: { errors } } = methods;
  const data2 = queryRealm()?.toJSON()
  
  const { data } = useQuery('queryUnit', async () => {
    const response =  await api.get<OptionUnitProps[]>(getUnitAll(user!))
    return response.data 
  }, {
    enabled: !!user,
    cacheTime: 0
  })

  // console.log(user)
  
  const { mutate, data: resLine } = useMutation({
    mutationFn: async (unit: number) => {
      const response = await api.get<OptionLineProps[]>(getLineAll(user!, unit))
      return response.data
    },
    mutationKey: ['getLineAll']
  })
  
  useEffect(()=> {
    getDataStorage({key: '@iforth_login'}).then(result => {
      setUser(JSON.parse(result)?.idusu);
    });
   
  }, [])
  
  const optionUnit = data
  ? addLabelAndValue(data, 'descunidade', 'idunidade')
  : []
  
  const optionLine = resLine
  ? addLabelAndValue(resLine, 'desclinha', 'idlinha')
  : []
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    storeData({ data, key:'@iforth_filter'})
    syncDefects.mutate(data.unit)
    toggleModal()
  };
  
  // console.log(data)
  return (
    <View style={{ flex: 1 }}>
       {children} 
      <Modal
        isVisible={isModalOpen}
        onSwipeComplete={toggleModal}
        backdropColor="#2E2F42"
        backdropOpacity={0.8}
        testID={'modal'}
        swipeDirection={['down']}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
      >
        <S.Root.WrapperContent>
          <S.Root.BarContainerTop />
          <View style={{ gap: 10 }}>
            <Select.Root error={errors.unit} label='Unidade *'> 
              <ControlledSelect
                item={optionUnit}
                name='unit'
                control={control}
                placeholder='Escolha uma unidade'
                onValueChanged={(value) => mutate(value)}
              />
            </Select.Root>
            <Select.Root error={errors.line} label='Linha *'> 
              <ControlledSelect
                item={optionLine}
                name='line'
                control={control}
                placeholder='Escolha uma linha'
              />
            </Select.Root>
            <Button text='Filtrar' type='PRIMARY' onPress={handleSubmit(onSubmit)} />
          </View>

        </S.Root.WrapperContent>
    </Modal>
  </View>
  );
}


