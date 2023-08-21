import { View } from 'react-native';

import * as S from './styles';

type CardCepRootSpanProps = {
  id: string;
  nameCep: string;
  date: string;
};

export function CardCepRootSpan({ id, nameCep, date }: CardCepRootSpanProps) {
  return (
    <S.Root.WrapperView>
      <S.Root.Text>
        <S.Root.Text>{id}</S.Root.Text>
        <S.Root.Text>{' - ' + nameCep}</S.Root.Text>
      </S.Root.Text>
      <S.Root.TextDate>{date}</S.Root.TextDate>
    </S.Root.WrapperView>
  );
}