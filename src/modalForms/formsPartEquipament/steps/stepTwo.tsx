import { View } from "react-native";
import { ControlledInput } from "../../../components/ControlledInput";
import { TextInput } from "../../../components/TextInput";
interface StepProps {
    control: any;
    errors: any;
  }
  
interface StepProps {
    control: any;
    errors: any;
  }
  
export const StepTwo = ({ control, errors }: StepProps) => {
    // console.log({errors})
    return (
      <View>
        <TextInput.Root error={errors.deformity} label='Deformidade *'> 
          <TextInput.Icon icon={'cog'} />
          <ControlledInput 
            name='deformity'
            control={control}
            placeholder='Insira um valor'
          />
        </TextInput.Root>
        <TextInput.Root error={errors.diff} label='Diferença de tonalidade lados da mesma peça *'> 
          <TextInput.Icon icon={'cog'} />
          <ControlledInput 
            name='diff'
            control={control}
            placeholder='Insira um valor'
          />
        </TextInput.Root>
        <TextInput.Root error={errors.defect} label='Defeito *'> 
          <TextInput.Icon icon={'cog'} />
          <ControlledInput 
            name='defect'
            control={control}
            placeholder='Insira um valor'
          />
        </TextInput.Root>
        <TextInput.Root error={errors.observation} label='Observação *'> 
          <TextInput.Icon icon={'cog'} />
          <ControlledInput 
            name='observation'
            multiline
            control={control}
            placeholder='Insira um valor'
          />
        </TextInput.Root>
      </View>
    );
  };