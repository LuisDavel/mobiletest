import { View } from "react-native";
import { ControlledInput } from "../../../components/ControlledInput";
import { TextInput } from "../../../components/TextInput";
import {Picker} from '@react-native-picker/picker';
import { useCallback, useRef, useState } from "react";
import { ControlledSelect } from "../../../components/ControlledSelect";
import { Select } from "../../../components/Select";
import { CameraComponent } from "../../../components/Camera";
import Modal from 'react-native-modal';
import Button from "../../../components/Button";
  
interface StepProps {
    control: any;
    errors: any;
    setValue: any;
  }
  
export const StepCamera = ({ setValue }: StepProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <Button text="TesTe" type="PRIMARY" onPress={openModal} />
      <Modal
        isVisible={modalVisible}
        onSwipeComplete={() => !modalVisible}
        backdropColor="#2E2F42"
        backdropOpacity={0.8}
        testID={'modal'}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={{
          margin: 0,
        }}
      >
        <CameraComponent setValue={setValue} closeModal={closeModal}/>
      </Modal>
    </View>
  );
};