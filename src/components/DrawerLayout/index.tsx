import React, {useCallback, useState} from 'react';
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
import { storeData } from '../../utils/handle-storage';
import { getData } from '../../utils/handle-get-storage';
import { useModalContext } from '../../hooks/modalOpenContext';

type Drawerprops = {
  children: React.ReactNode
  unit: {
    label: string,
    value: number
  }[]
  line: {
    label: string,
    value: number
  }[]
}

const schema = yup.object().shape({
  unit: yup.number().required('Unidade é um campo obrigatório'),
  line: yup.number().required('Linha é um campo obrigatório'),
});

export default function DrawerLayout({ children, unit, line }: Drawerprops) {
  const { isModalOpen, toggleModal } = useModalContext();
  const methods = useForm({
    resolver: yupResolver(schema)
  });

  const { control, handleSubmit, formState: { errors }, watch } = methods;

  unit = [
    {
      label: 'Teste',
      value: 1
    },
    {
      label: 'Test2e',
      value: 2
    },
  ]

  line = [
    {
      label: 'Teste',
      value: 1
    },
    {
      label: 'Test2e',
      value: 2
    },
  ]

  
  // getData({key: '@iforth_filter'}).then(result => {
  //   console.log(result);
  // });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    toggleModal()
    storeData({ data, key:'@iforth_filter'})
  };

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
                item={unit}
                name='unit'
                control={control}
                placeholder='Escolha uma unidade'
              />
            </Select.Root>
            <Select.Root error={errors.line} label='Linha *'> 
              <ControlledSelect
                item={line}
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