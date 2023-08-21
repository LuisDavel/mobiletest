import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';
import theme from '../../theme';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';
export type StyledProps = {
  type: ButtonTypeStyleProps;
};
const Wrapper = styled(TouchableOpacity)<StyledProps>`
  border-radius: 6px;
  background-color: ${({ type }) =>
    type == 'PRIMARY' ? theme.colors['purple-800'] : theme.colors['red-400']};
`;

const Text = styled.Text`
  padding: 12px;
  margin: 0 auto;
  color: ${ theme.colors.white[100]};
`;

export const Root = {
  Wrapper: Wrapper,
  Text: Text,
};