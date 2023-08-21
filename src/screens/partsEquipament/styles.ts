
import  styled  from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
  margin: 0;
  padding: 15px;
  gap: 10px
`;

const WrapperFlatList = styled.View` 
  height: 91%;
`;

export const Root = {
  Wrapper: Wrapper,
  WrapperFlatList: WrapperFlatList
  // BarTop: BarTop
};