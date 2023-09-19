import React from 'react';
import { Controller, Control } from "react-hook-form"
import { InputProps } from '../TextInput/InputContent';
import { Picker, PickerProps } from '@react-native-picker/picker';
// import * as S from './styles';
type Props<T> = {
    control: Control<any>
    name: string
    placeholder?: string
    item: {
        label: string,
        value: string | number
    }[]
    onValueChanged?: (val: any) => void
} & PickerProps<T>

export function ControlledSelect({ control, name, item, placeholder, onValueChanged, ...props }: Props<T>) {

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }})=> (
                <Picker
                    selectedValue={value}
                    onValueChange={(val) => {
                        onChange(val)
                        if(!!onValueChanged) {
                            onValueChanged(val) 
                        }
                    }}
                    {...props}
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