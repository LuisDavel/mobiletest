import {  View , FlatList} from 'react-native';
import StepModal from '../../components/StepModal';
import { SubmitHandler, FieldValues } from 'react-hook-form';
import { StepOne, StepTwo, schema, StepCamera } from '../../modalForms/formsPartEquipament';
import { Historic_partsEquip } from '../../lib/realm/schema/Historic';
import useRealmCrud from '../../hooks/useCrud';

import React, { useState } from 'react';
import Modal from 'react-native-modal';

import * as S from './styles'
import { CardCep } from '../../components/CardCep';
import Button from '../../components/Button';

type ItemProps = {
  item: typeof Historic_partsEquip.schema.properties
}

export default function PartsEquipament() {
  const [modalVisible, setModalVisible] = useState(false);
  const {createRecord, error, queryRealm, deleteRecord} = useRealmCrud(Historic_partsEquip.generate,'historic_appointment_parts_equip5')
  const selectAll = queryRealm()

  const data = selectAll?.toJSON().reverse()
  
  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const submitValues  = {
      defect: Number(data.defect),
      deformated:data.deformity,
      image: data.images,
      diff: data.diff,
      obs: data.observation,
      shine:  data.shine,
      texture: data.texture,
      tom: Number(data.tom),
      tonality: data.tonality,
    }
    createRecord(submitValues);
    return closeModal()
  };

  const renderItem = ({ item }:ItemProps ) =>  {
    const image = (item.image[0] == undefined ? '' : item.image[0]);

    return(
      <CardCep.Root 
        type='NORMAL'
        onPress={() => deleteRecord(item['_id'])}
      >
         <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}> 
          <CardCep.Image url={image} />
          <CardCep.Content id={item.defect}  nameCep={item.tom + ''} date={item.created_date.toString()}/>
      </View> 
      </CardCep.Root>
  )};

  const ListItemSeparator = () => {
    return <View style={{ height: 10 }} />;
  };

  return (
    <S.Root.Wrapper>
      <S.Root.WrapperFlatList>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item['_id'] + ''}
          ItemSeparatorComponent={ListItemSeparator}
          style={{ height: 20 }}
        />
      </S.Root.WrapperFlatList>
      <Modal
        isVisible={modalVisible}
        onSwipeComplete={closeModal}
        backdropColor="#2E2F42"
        backdropOpacity={0.8}
        swipeDirection={['down']}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
      >
        <StepModal onSubmit={onSubmit} schema={schema} steps={[ StepCamera, StepOne, StepTwo ]}/>
      </Modal>
      <Button text='Apontar' type='PRIMARY' onPress={openModal} />
    </S.Root.Wrapper>
  );
}