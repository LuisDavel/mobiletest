import * as S from './styles';
import { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import CardNotify from '../../components/CardNotify';
import React from 'react';
import CardModulesRoot from '../../components/CardModules/CardModulesRoot';
import CardModulesContent from '../../components/CardModules/CardModulesContent';
import CardModulesIcon from '../../components/CardModules/CardModulesIcon';
import theme from '../../theme';
import { FontAwesome } from '@expo/vector-icons';

export default function Home() {
  
  const navigation = useNavigation()
  const dataModules = [
    
    {
      id: 4,
      icon: 'camera',
      text: 'Peça adiantada',
      url: 'appointment' 
    },
  ]

  React.useLayoutEffect(() => {
    
    navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerRight: () => (
        <FontAwesome name='user-circle' size={35} onPress={() => console.log('TESTE')} color={theme.colors['purple-800']}  />
      ),
    });
  }, [navigation]);

  const renderItem = ( { item, index }: any) => (
    <CardModulesRoot onPress={() => navigation.navigate(item.url)} index={index}>
      <CardModulesIcon icon={item.icon} />
      <CardModulesContent text={item.text}/>
    </CardModulesRoot>
  );


  return (
    <S.Root.Wrapper
      entering={FadeInUp}
      exiting={FadeOutUp}
    >

      <S.Root.H1> Seja bem-vindo 🎉</S.Root.H1> 
      <CardNotify />
      <S.Root.H2> Modulos </S.Root.H2> 
      <S.Root.WrapperFlatList
        data={dataModules}
        renderItem={renderItem}
        keyExtractor={(item) => item.id + ''}
        numColumns={3}
      />

    </S.Root.Wrapper>
  );
}