import React, {useRef, useState} from 'react';
import * as S from './styles';
import Modal from 'react-native-modal';
import {
  View,
} from 'react-native';
import Button from '../Button';

type Drawerprops = {
  children: React.ReactNode
}

export default function DrawerLayout({ children }: Drawerprops) {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openModal = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeModal = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  
  return (
    <View style={{ flex: 1 }}>
      {children}
      <S.Root.Wrapper onPress={openModal} />
      <Modal
        isVisible={isDrawerOpen}
        onSwipeComplete={closeModal}
        backdropColor="transparent"
        backdropOpacity={0.8}
        testID={'modal'}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
      >
        <S.Root.WrapperContent>
          <Button
            text="Close drawer"
            type='PRIMARY'
            onPress={closeModal}
          />
        </S.Root.WrapperContent>
    </Modal>
  </View>
  );
}