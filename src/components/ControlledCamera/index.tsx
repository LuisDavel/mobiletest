import React, { useState } from 'react';
import { Controller, Control } from "react-hook-form"
import { TextInput } from '../TextInput';
import { InputProps } from '../TextInput/InputContent';
import { Picker } from '@react-native-picker/picker';
// import * as S from './styles';
type Props = {
    control: Control<any>
    name: string
    item: {
        label: string,
        value: string | number
    }[]
} & InputProps

export function ControlledSelect({ control, name, item, ...props }: Props) {
    // const [open, setOpen] = useState(false);
    // const [_, setValue] = useState(false);

    return (
       
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }})=> (

            )}
        />
    )
}