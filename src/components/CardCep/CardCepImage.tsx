import * as S from './styles';

type CardCepRootSpanProps = {
  url: string;
};

export function CardCepImage({ url }: CardCepRootSpanProps) {
  url =
    url === ''
      ? require('../../assets/images/image_notfound.png')
      : { uri: 'data:image/png;base64, '+ url };
  //@ts-ignore
  return <S.Root.Image source={url} />;
}