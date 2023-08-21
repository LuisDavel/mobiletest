import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';
import { CardCep } from '.';

type CardCepRootProps = {
  children: ReactNode;
  type: S.TypeStyleProps;
} & TouchableOpacityProps;

export function CardCepRoot({ children, type, ...props }: CardCepRootProps) {
  return (
    <S.Root.Wrapper type={type} {...props}>
      
      {children}
      {/* <CardCep.Icon /> */}
    </S.Root.Wrapper>
  );
}