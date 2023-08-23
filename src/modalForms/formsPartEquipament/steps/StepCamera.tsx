import { View } from "react-native";
import { useCallback, useRef, useState } from "react";
import { CameraComponent } from "../../../components/Camera";
import Modal from 'react-native-modal';
import { CameraPreview } from "../../../components/CameraPreview";
import { FieldValues, UseFormReturn } from "react-hook-form";
  
interface StepProps {
  methods: UseFormReturn<FieldValues, any, undefined>
}
  
export const StepCamera = ({ methods }: StepProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const imageIsNotNull = methods.getValues().images

  const openModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  return (
    <View style={{ gap: 10 }}>
      <CameraPreview.Root onPress={openModal}> 
        <CameraPreview.Icon icon={'camera-plus-outline'}/>
      </CameraPreview.Root>
      <View style={{flexDirection: "row"}}>
        {imageIsNotNull && imageIsNotNull.map((v: string, index: number) => (<CameraPreview.Content key={index} image={`data:image/png;base64, ${v}`} />))}
      </View>
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
        <CameraComponent setValue={methods.setValue} closeModal={closeModal}/>
      </Modal>
    </View>
  );
};