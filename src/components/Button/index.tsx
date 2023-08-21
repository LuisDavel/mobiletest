import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type ButtonProps = {
  text: string;
  type: S.ButtonTypeStyleProps;
} & TouchableOpacityProps;

export default function Button({ text, type, ...props }: ButtonProps) {
  return (
    <S.Root.Wrapper type={type} {...props}>
      <S.Root.Text>{text}</S.Root.Text>
    </S.Root.Wrapper>
  );
}