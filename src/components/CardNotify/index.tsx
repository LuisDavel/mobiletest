import { ViewProps } from 'react-native';
import {SvgUri} from 'react-native-svg';
import * as S from './styles';
import SVGImage from '../../assets/images/svg/teste.svg'
type Props = {
 
} 

export default function CardNotify() {
  return (
    <S.Root.Wrapper>
      
      <SVGImage width={180} height={150} />
      {/* <SvgUri uri={'../../assets/images/svg/teste.svg'} /> */}
    </S.Root.Wrapper>
  );
}