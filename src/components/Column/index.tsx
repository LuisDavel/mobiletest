import { ViewProps } from 'react-native';

import * as S from './styles';

type ColumnProps = {
  color?: string
  children: React.ReactNode
  size?: string
  align?: 'center'  | 'flex-end'  | 'flex-start'
  justify?: 'center'  | 'flex-end'  | 'flex-start'  | 'space-around'  | 'space-between' | 'space-evenly'
  p?: string | number
} & ViewProps

export default function Column({children, p=0, justify='flex-start' ,align='flex-start', size='100%', color, ...props}: ColumnProps) {
  
  return (
    <S.Root.Wrapper color={color} p={p} justify={justify} align={align} size={size}>
      {children}
    </S.Root.Wrapper>
  );
}