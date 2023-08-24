import { Text, View } from "react-native";
import { useCallback, useRef, useState } from "react";
import { CameraComponent } from "../../../components/Camera";
import Modal from 'react-native-modal';
import { CameraPreview } from "../../../components/CameraPreview";
import { FieldValues, UseFormReturn } from "react-hook-form";
import theme from "../../../theme";
  
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
 //   const Text = styled.Text`
  //   font-size: ${({ theme }) => theme.font.sizes.small} ;
  //   padding-bottom: 6px;
  //   color: ${({ theme }) => theme.colors['purple-900']};
  // `;
  return (
    <View style={{ gap: 10 }}>
      <Text style={{ fontSize: 16, color: theme.colors['purple-900'] }}> Camera * </Text>
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