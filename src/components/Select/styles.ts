
import  styled  from 'styled-components/native';

const Wrapper = styled.View`
`;

const ContentWrapper = styled.View`
  border: 1px solid black;
  border-radius: 4px;
  /* flex-direction: row; */
`;

const Error = styled.Text`
  color: red;
`;

const Text = styled.Text`
  font-size: ${({ theme }) => theme.font.sizes.small} ;
  padding-bottom: 6px;
  color: ${({ theme }) => theme.colors['purple-900']};
`;

const Icon = styled.View`
  padding-left: 10px;
`;

const Input = styled.TextInput`
  width: 90%;
  padding: 10px;
  font-size: ${({ theme }) => theme.font.sizes.medium} ;
  color: ${({ theme }) => theme.colors['purple-800']};
  /* border-bottom: 4px solid red; */
`;

export const Root = {
  Error: Error,
  Wrapper: Wrapper,
  Text: Text,
  Input: Input,
  ContentWrapper: ContentWrapper,
  Icon: Icon
};