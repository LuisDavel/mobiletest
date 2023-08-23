
import { ImageBackground, Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import  styled  from 'styled-components/native';
import theme from '../../theme';
const AnimetedPressable = Animated.createAnimatedComponent(Pressable);
const AnimetedBack = Animated.createAnimatedComponent(ImageBackground);

type WrapperContentProps = {
  image: string
}

const Wrapper = styled(AnimetedPressable)`
  align-items: center;
  border-radius: 6px;
  height: 150px;
  width: 100%;
  justify-content: center;
  border: 2px dashed ${ theme.colors['purple-600']};
  background: ${theme.colors['lilac-200']};
`;
const WrapperContent = styled(AnimetedBack)<WrapperContentProps>`
  align-items: center;
  border-radius: 6px;
  height: 120px;
  width: 120px;
  justify-content: center;
  border: 2px dashed ${ theme.colors['purple-600']};
  /* background: ${theme.colors['lilac-200']}; */
`;


export const Root = {
  Wrapper: Wrapper,
  WrapperContent: WrapperContent
};