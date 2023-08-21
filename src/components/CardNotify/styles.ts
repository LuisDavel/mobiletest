
import  styled  from 'styled-components/native';

const Wrapper = styled.View`
  height: 150px;
  background-color: ${({ theme }) => theme.colors['purple-800']};
  border-radius: 16px;
  align-items: flex-end;
  padding: 0 10px ;
`;

export const Root = {
  Wrapper: Wrapper,
};