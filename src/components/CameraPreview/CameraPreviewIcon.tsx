
import { FontAwesome } from '@expo/vector-icons';
import * as S from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../theme';

type CardModulesProps = {
  icon: any
} 


export default function CameraPreviewIcon({ icon }: CardModulesProps) {
  return <MaterialCommunityIcons name={icon} size={35} color={theme.colors['purple-800']}  /> ;
}