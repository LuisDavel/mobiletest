
import  styled  from 'styled-components/native';

const Wrapper = styled.View`
  height: 150px;
  background-color: ${({ theme }) => theme.colors['purple-800']};
  border-radius: 16px;
  align-items: flex-end;
  padding: 0 10px ;
`;

const WrapperOptionsCam = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const WrapperMenuOptionsCam = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
`;

const ContainerIcon = styled.Pressable`
  background: white;
  opacity: 0.8;
  padding: 10px;
  border-radius: 8px;
`;

const ViewInsideCircle = styled.View`
  border-radius: 99999px;
  position: absolute;
  bottom: 10%;
  border: 5px solid #ffffff;
  background: #ffffff50;
  align-self: center;
  height: 80%;
  width: 80%;
`;

const ViewSideCircle = styled.TouchableOpacity`
  position: relative;
  border-radius: 99999px;
  background: #00000099;
  width: 80px;
  height: 80px;
`;

export const Root = {
  Wrapper: Wrapper,
  ViewInsideCircle: ViewInsideCircle,
  ViewSideCircle: ViewSideCircle,
  ContainerIcon: ContainerIcon,
  WrapperOptionsCam: WrapperOptionsCam,
  WrapperMenuOptionsCam: WrapperMenuOptionsCam
};