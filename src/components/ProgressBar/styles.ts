
import  styled  from 'styled-components/native';
import theme from '../../theme';

type Props = {
    styledAnimated: string
}

const Wrapper = styled.View`
    height: 18px;
    width: 100%;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Root = {
  Wrapper: Wrapper,
};