
import  styled  from 'styled-components/native';
import theme from '../../theme';

type WrapperProps = {
  color?: string
  size?: string
  align?: 'center'  | 'flex-end'  | 'flex-start'
  justify?: 'center'  | 'flex-end'  | 'flex-start'  | 'space-around'  | 'space-between' | 'space-evenly'
  p?: string 
}

const Wrapper = styled.Pressable`
  align-self: center;
  height: 10px;
  border-radius: 8px;
  width: 50%;
  background-color: ${theme.colors['navy-900']};
  margin-bottom: 5px;
`;

const WrapperContent = styled.View`
  align-self: center;
  height: 500px;
  border-radius: 8px 8px 0 0;
  width: 100%;
  background-color: ${theme.colors['navy-900']};
`;

export const Root = {
  Wrapper: Wrapper,
  WrapperContent: WrapperContent
};