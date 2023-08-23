
import * as S from './styles';
type CardModulesProps = {
  image: string
} 

export default function CameraPreviewContent( { image }: CardModulesProps ) {
  return <S.Root.WrapperContent source={{uri: image}}  resizeMode="cover"  />;
} 