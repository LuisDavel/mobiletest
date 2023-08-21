import { Image, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import theme from '../../theme';

export type TypeStyleProps = 'NORMAL' | 'ALERT';
export type StyledProps = {
  type: TypeStyleProps;
};

const Wrapper = styled(TouchableOpacity)<StyledProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  padding: 10px;
  border: 2px solid ${theme.colors.white['700'] };
  background-color: ${({ type }) =>
    type === 'NORMAL' ? theme.colors.white['200'] : theme.colors['red-400/50']};
`;

const WrapperView = styled(View)`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  gap: 5px;
`;

const Text = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors['purple-800']};
`;

const TextDate = styled.Text`
  font-size: 10px;
  color: ${({ theme }) => theme.colors['purple-800']};
`;

const Icon = styled(Feather)`
  /* margin: 0 auto; */
  color: ${({ theme }) => theme.colors['purple-800']};
`;

const ImageContent = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 6px;
`;

export const Root = {
  Wrapper: Wrapper,
  WrapperView: WrapperView,
  Text: Text,
  Icon: Icon,
  TextDate: TextDate,
  Image: ImageContent,
};