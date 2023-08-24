import Animated from 'react-native-reanimated';

import  styled  from 'styled-components/native';

const Wrapper = styled(Animated.View)`
  flex: 1;
  gap: ${({ theme }) => theme.spacings.large};
  background-color: white;
  padding: 16px;
`;

const Column = styled.ScrollView`
  height: 48%;
`;

const H2 = styled.Text`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: 600;
`;

const H1 = styled.Text`
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: 600;
`;

export const Root = {
  Wrapper: Wrapper,
  Column: Column,
  H2: H2,
  H1: H1
};