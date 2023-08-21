
import * as S from './styles';
 import { 
  Text
 } from 'react-native'

type CardModulesProps = {
  text: string
} 

export default function CardModulesContent( { text }: CardModulesProps ) {
  return <S.Root.Text> {text} </S.Root.Text> ;
}