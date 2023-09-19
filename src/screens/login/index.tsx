import * as S from './styles';
import { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useModalContext } from '../../hooks/modalOpenContext';
import { View, Text } from 'react-native';
import LogoSvg from '../../assets/images/svg/teste.svg'
import Button from '../../components/Button';
import { encode, decode, fromUint8Array } from 'js-base64';

import { EXPO_PUBLIC_API_URL } from "@env"

import { TextInput } from '../../components/TextInput';
import { ControlledInput } from '../../components/ControlledInput';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { api } from '../../utils/axios/axios';
import { storeData } from '../../utils/storage/handle-storage';
import axios from 'axios';

const schema = yup.object({
  user: yup.string().required("Este campo é obrigatório"),
  pass: yup.string().required("Este campo é obrigatório")
})

export default function Login() {

  const navigation = useNavigation()
  const { toggleModal } = useModalContext();
  const [msg, setMsg] = useState('false');
  const [togglePass, setTogglePass] = useState(false);
  const methods = useForm({
    resolver: yupResolver(schema)
  });
  const { control, handleSubmit, formState: { errors } } = methods;
  function handleSeePass(){
    setTogglePass(!togglePass)
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: '',
    });
  }, [navigation]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const dataEncode = encode(`${data.user.toString().toLowerCase()}|${data.pass.toString().toLowerCase()}`)
    const dataEncode2 = encode(dataEncode)
    const dataEncode3 = `iforth ${encode(dataEncode2)}`
    try {
      const crip = await api.get('v1/crip', {
        headers: { iforthsistemas: dataEncode3 }
      })
      const basic = await api.post('v1/basic', crip.data)
      const token = await api.post('v1/token', basic.data)
      
      if(token.status == 200)  {
        toggleModal()
        storeData({ data: token.data, key:'@iforth_login'})
        return navigation.navigate('main')
      }
      
    } catch (error) {
      if(axios.isAxiosError(error)){
        // setMsg(error.toJSON())
        console.log('==========================================================')
        console.log(error.toJSON())
        console.log('==========================================================')
      }
      // setMsg(error)
      console.log('==========================================================')
      console.log(error)
      console.log('==========================================================')
    }
  };

return (
  <S.Root.Wrapper
      entering={FadeInUp}
      exiting={FadeOutUp}
    >
      <LogoSvg style={{alignSelf: 'center'}} width={200} height={200} />
      <View style={{ gap: 10}}>
        <TextInput.Root label='Usuário *' error={errors.user}>
          <TextInput.Icon icon={'user'} />
          <ControlledInput name='user' control={control} placeholder='Insira seu usuário' />
        </TextInput.Root>
        <TextInput.Root label='Senha *' error={errors.pass}>
          <TextInput.Icon disableTouch={false} onPress={handleSeePass} icon={!togglePass ? 'eye-slash' : 'eye' }/>
          <ControlledInput name='pass' secureTextEntry={!togglePass} control={control} placeholder='Insira sua senha' />
        </TextInput.Root>
      </View>
      {/* <Text>{msg}</Text> */}
      {/* <Text>{EXPO_PUBLIC_API_URL}</Text> */}
      <Button text='Entrar' type='PRIMARY' onPress={handleSubmit(onSubmit)}/>
    </S.Root.Wrapper>
  );
}