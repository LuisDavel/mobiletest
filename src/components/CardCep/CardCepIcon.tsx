import * as S from './styles';

type CardCepRootSpanProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nameIcon?: any;
  size?: number;
};

export function CardCepIcon({
  nameIcon = 'edit',
  size = 20,
}: CardCepRootSpanProps) {
  return <S.Root.Icon name={nameIcon} size={size} />;
}