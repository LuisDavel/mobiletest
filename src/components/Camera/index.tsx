import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { Camera, CameraType, ImageType } from 'expo-camera';
import Button from '../Button';

import * as S from './styles'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { handleFlashMode } from './handle-flash';
import { toggleCameraType } from './handle-flipcam';

type CameraProps = {
  setValue: (key: string, value: any) => void;
  closeModal: () => void;
}

export function CameraComponent({ setValue, closeModal }: CameraProps) {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [images, setImages] = useState<string[]>([]);
  const [type, setType] = useState(CameraType.back);
  const [loading, setLoading] = useState(false);
  const [flashMode, setFlashMode] = useState(0);
  let camera: Camera;
  const takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync({ 
      base64: true,
      quality: 0,
      skipProcessing: true,
      scale: 500,
      imageType: ImageType.jpg,
    });
    setLoading(true)
    if (!photo) return 

    if(images.length === 3) {
      setLoading(false)
      return closeModal()
    }
    setImages((prevImages) => [...prevImages, photo.base64]);
    setLoading(false)
    // if(photo) return setValue('image', photo.base64);  
  };
  
  useEffect(() => {
    setValue('images', images);
  }, [images]);

  if (!permission) {
      return <View />;
  }

  if (!permission.granted) {
    return (
     
      <View  style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        backgroundColor: 'white',
        gap: 10
      }} >
        <Text style={{ textAlign: 'center', width: '80%', fontSize: 20 }}>
          Para continuar utilizando o aplicativo você precisa habilitar a camera.
        </Text>
        <Button
          type="PRIMARY"
          onPress={requestPermission}
          text=" Permito o uso da camera "
          />
        </View>
    );
  }

  const handleCameraClose = async () => {
    return closeModal(); 
  };

  return (
    <View style={{ height: '100%',  backgroundColor: 'black' }}>
        {loading && ( 
          <ActivityIndicator
            style={{ height: '100%', backgroundColor: 'gray', opacity: 0.5 }}
            size="large"
          />
        )}
        <Camera
          ref={(r) => {
            camera = r;
          }}
          style={{ width: '100%', height: '66%' }}
          flashMode={flashMode}
          type={type}
        >
          <S.Root.WrapperOptionsCam>
          {/* //Icon Back */}
          <S.Root.ContainerIcon onPress={() => closeModal()}>
            <Ionicons name="arrow-back" size={25} color="black" />
          </S.Root.ContainerIcon>
          {/* //Icon Flash */}
          <S.Root.ContainerIcon
            onPress={() => handleFlashMode(setFlashMode)}
          >
            <Ionicons
              name={flashMode == 0 ? 'flash-off' : 'flash'}
              size={25}
              color={flashMode == 0 ? 'black' : '#ffd500'}
            />
          </S.Root.ContainerIcon>
        </S.Root.WrapperOptionsCam>
        </Camera>
      
        <S.Root.WrapperMenuOptionsCam onPress={handleCameraClose}>
          {/* //Icon Exit Cam */}
          <TouchableOpacity
            onPress={() => handleCameraClose()}
          >
            <MaterialCommunityIcons name="camera-off" size={40} color="white" />
          </TouchableOpacity>
          {/* //Icon TakePicture Cam */}
          <S.Root.ViewSideCircle
            onPress={() => takePicture()}
          >
            <S.Root.ViewInsideCircle/>
          </S.Root.ViewSideCircle>
          {/* //Icon Reverser Cam */}
          <TouchableOpacity
              onPress={() => toggleCameraType(setType)}
          >
            <Ionicons name="camera-reverse" size={40} color="white" />
          </TouchableOpacity>

          <Text style={{color: 'white'}}>{images.length}</Text>
        </S.Root.WrapperMenuOptionsCam>
    </View>
  );
}