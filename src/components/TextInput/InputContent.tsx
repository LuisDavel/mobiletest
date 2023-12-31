import { TextInputProps, TextInput } from 'react-native';

import * as S from './styles';
import { useState } from 'react';

export type InputProps = {
  value?: string 
} & TextInputProps

export default function InputContent({ value, ...props }: InputProps) {
  const [onFocus, setOnFocus] = useState(false)
  const [onBlur, setOnBlur] = useState(false)
  
  function handleInputFocus() {
    setOnFocus(!onFocus);
  };

  function handleInputBlur() {
    setOnFocus(false);
    setOnBlur(!!onBlur);
  };

  return ( 
    <S.Root.Input
      value={value}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      {...props }
    />
   
   
  )
}