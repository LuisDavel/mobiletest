import { TextInputProps, TextInput } from 'react-native';

import * as S from './styles';
import { FontAwesome } from '@expo/vector-icons';
import theme from '../../theme';

type InputProps = {
  icon: any
} 

export default function InputIcon( { icon }: InputProps) {
  
  return (
    <S.Root.Icon>
      <FontAwesome name={icon} size={25} color={theme.colors.white[700]} />
    </S.Root.Icon> 
  )
}