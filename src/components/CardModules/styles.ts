
import { Pressable, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import  styled  from 'styled-components/native';
const AnimetedPressable = Animated.createAnimatedComponent(Pressable);


const dimensions = Dimensions.get('window');
const CARDS_PER_ROW = 3;
const HORIZONTAL_PADDING_SCREEN = 20 * CARDS_PER_ROW;
const MARGIN = 2 * CARDS_PER_ROW;

const CARD_WIDTH = (dimensions.width - HORIZONTAL_PADDING_SCREEN - MARGIN) / CARDS_PER_ROW;

const Wrapper = styled(AnimetedPressable)`
  gap: 10px;
  align-items: center;
  border-radius: 6px;
  height: 100px;
  width: ${CARD_WIDTH}px;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors['navy-600']};
  background: ${({ theme }) => theme.colors['lilac-200']};
  padding: 10px 0;
  margin: ${MARGIN}px;
`;

const Text = styled.Text`
  text-align: center;
`;

export const Root = {
  Wrapper: Wrapper,
  Text: Text
};