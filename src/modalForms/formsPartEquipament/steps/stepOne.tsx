import { View } from "react-native";
import { ControlledInput } from "../../../components/ControlledInput";
import { TextInput } from "../../../components/TextInput";
import {Picker} from '@react-native-picker/picker';
import { useState } from "react";
import { ControlledSelect } from "../../../components/ControlledSelect";
import { Select } from "../../../components/Select";

interface StepProps {
    control: any;
    errors: any;
  }
  
interface StepProps {
    control: any;
    errors: any;
  }
  
export const StepOne = ({ control, errors }: StepProps) => {
  const item = [
    {
    label: 'Selecione um dado',
    value: ''
    },
    {
    label: 'Teste',
    value: 1
    },
  ]
    return (
      <View  style={{ gap: 10 }}>
        <TextInput.Root error={errors.tom} label='Tonalidade *'> 
          {/* <TextInput.Icon icon={'cog'} /> */}
          <ControlledInput 
            name='tom'
            control={control}
            keyboardType="number-pad"
            placeholder='Insira o valor da tonalidade'
          />
        </TextInput.Root>
        <TextInput.Root error={errors.tonality} label='Tonalidade *'> 
          {/* <TextInput.Icon icon={'cog'} /> */}
          <ControlledInput 
            name='tonality'
            control={control}
            placeholder='Insira um valor'
          />
        </TextInput.Root>
        <TextInput.Root error={errors.texture} label='Textura *'> 
          {/* <TextInput.Icon icon={'cog'} /> */}
          <ControlledInput 
            name='texture'
            control={control}
            placeholder='Insira um valor'
          />
        </TextInput.Root>
        <Select.Root error={errors.shine} label='Selecione o bilho *'> 
          <ControlledSelect item={item} control={control} name="shine"  />
        </Select.Root>
      </View>
    );
  };