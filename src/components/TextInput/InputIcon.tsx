import { PressableProps } from 'react-native';

import * as S from './styles';
import { FontAwesome } from '@expo/vector-icons';
import theme from '../../theme';

type InputProps = {
  icon: any
  disableTouch?: boolean
} & PressableProps

export default function InputIcon( { icon, disableTouch = true, ...props }: InputProps) {
  
  return (
    <S.Root.Icon  disabled={disableTouch} {...props}>
      <FontAwesome name={icon} size={25} color={theme.colors.white[700]} />
    </S.Root.Icon> 
  )
}