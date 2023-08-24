import React from 'react';
import { Controller, Control } from "react-hook-form"
import { InputProps } from '../TextInput/InputContent';
import { Picker } from '@react-native-picker/picker';
// import * as S from './styles';
type Props = {
    control: Control<any>
    name: string
    placeholder?: string
    item: {
        label: string,
        value: string | number
    }[]
} & InputProps

export function ControlledSelect({ control, name, item, placeholder, ...props }: Props) {

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }})=> (
                <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                >
                    <Picker.Item label={placeholder || "Selecione"} value={null} enabled={true} />
                    {item.map((v, key) => ( 
                        <Picker.Item  key={key} label={v.label} value={v.value} /> 
                    ))}
                </Picker>
            )}
        />
    )
}