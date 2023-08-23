import { View } from 'react-native';

import * as S from './styles';
import { format } from 'date-fns-tz';

type CardCepRootSpanProps = {
  id: string;
  nameCep: string;
  date: string;
};

export function CardCepRootSpan({ id, nameCep, date }: CardCepRootSpanProps) {
  const inputDate = new Date(date);

const formattedDate = format(inputDate, 'dd/MM/yyyy HH:mm', {timeZone: 'America/Sao_Paulo'});

  return (
    <S.Root.WrapperView>
      <S.Root.Text>
        <S.Root.Text>{id}</S.Root.Text>
        <S.Root.Text>{' - Tonalidade: ' + nameCep}</S.Root.Text>
      </S.Root.Text>
      <S.Root.TextDate>{formattedDate}</S.Root.TextDate>
    </S.Root.WrapperView>
  );
}