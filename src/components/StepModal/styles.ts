
import  styled  from 'styled-components/native';
import theme from '../../theme';

const Wrapper = styled.View`
  align-self: center;
  background-color: white;
  border-radius: 8px 8px 0 0;
  width: 100%;
  gap: 15px;
  padding: ${ theme.spacings.default };
`;

export const Root = {
  Wrapper: Wrapper,
};