
import  styled  from 'styled-components/native';

const Wrapper = styled.View`
`;

const ContentWrapper = styled.View`
  align-items: center;
  border: 1px solid black;
  flex-direction: row;
  border-radius: 4px;
`;

const Error = styled.Text`
  color: red;
`;

const Text = styled.Text`
  font-size: 17px ;
  padding-bottom: 6px;
  color: ${({ theme }) => theme.colors['purple-900']};
`;

const Icon = styled.Pressable`
  padding-left: 10px;
`;

const Input = styled.TextInput`
  width: 90%;
  padding: 10px;
  font-size: 16px ;
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