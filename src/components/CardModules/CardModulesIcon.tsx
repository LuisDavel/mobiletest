
import { FontAwesome } from '@expo/vector-icons';
import * as S from './styles';
import theme from '../../theme';

type CardModulesProps = {
  icon: any
} 

export default function CardModulesIcon({ icon }: CardModulesProps) {
  return <FontAwesome name={icon} size={25} color={theme.colors['purple-800']}  /> ;
}