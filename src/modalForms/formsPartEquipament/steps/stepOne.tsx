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
    const item = 
      [
        {
        label: 'Conforme',
        value: 'Conforme'
        },
        {
        label: 'Não conforme',
        value: 'Não conforme'
        },
      ]

    return (
      <View  style={{ gap: 10 }}>
        <TextInput.Root error={errors.tom} label='Tom *'> 
          {/* <TextInput.Icon icon={'cog'} /> */}
          <ControlledInput 
            name='tom'
            control={control}
            keyboardType="number-pad"
            placeholder='Insira o valor da tom'
          />
        </TextInput.Root>
      
        <Select.Root error={errors.tonality} label='Tonalidade *'> 
          <ControlledSelect item={item} placeholder='Selecione a tonalidade' control={control} name="tonality"  />
        </Select.Root>

        <Select.Root error={errors.texture} label='Textura *'> 
          <ControlledSelect item={item} placeholder='Selecione a textura' control={control} name="texture"  />
        </Select.Root>

        <Select.Root error={errors.shine} label='Brilho *'> 
          <ControlledSelect item={item} control={control} placeholder='Selecione o brilho' name="shine"  />
        </Select.Root>
      </View>
    );
  };