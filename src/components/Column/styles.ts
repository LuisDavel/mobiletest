
import  styled  from 'styled-components/native';

type WrapperProps = {
  color?: string
  size?: string
  align?: 'center'  | 'flex-end'  | 'flex-start'
  justify?: 'center'  | 'flex-end'  | 'flex-start'  | 'space-around'  | 'space-between' | 'space-evenly'
  p?: string 
}

const Wrapper = styled.View`
  flex-direction: column;
  background-color: ${({ color }: WrapperProps) => color } ;
  height: ${({ size }: WrapperProps) => size } ;
  justify-content: ${({ justify }: WrapperProps) => justify };
  align-items:  ${({ align }: WrapperProps) => align } ;
  padding: ${({ p }: WrapperProps) => p };
`;

export const Root = {
  Wrapper: Wrapper,
};