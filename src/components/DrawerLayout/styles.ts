
import  styled  from 'styled-components/native';
import theme from '../../theme';

const BarContainerBottom = styled.Pressable`
  align-self: center;
  height: 12px;
  border-radius: 8px;
  width: 45%;
  position: absolute;
  /* top: 0; */
  bottom: 8px;
  background-color: ${theme.colors.white[700]};
  `;

const BarContainerTop = styled.View`
  align-self: center;
  height: 12px;
  border-radius: 8px;
  width: 45%;
  background-color: ${theme.colors.white['700']};
  margin-bottom: 15px;
`;

const WrapperContent = styled.View`
  position: relative;
  align-self: center;
  border-radius: 8px 8px 0 0;
  width: 100%;
  padding: ${theme.spacings.medium};
  background-color: white;
`;

export const Root = {
  BarContainerBottom: BarContainerBottom,
  BarContainerTop: BarContainerTop,
  WrapperContent: WrapperContent
};