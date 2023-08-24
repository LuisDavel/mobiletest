import { View } from "react-native";
import { ControlledInput } from "../../../components/ControlledInput";
import { TextInput } from "../../../components/TextInput";
import { Select } from "../../../components/Select";
import { ControlledSelect } from "../../../components/ControlledSelect";
interface StepProps {
    control: any;
    errors: any;
  }
  
interface StepProps {
    control: any;
    errors: any;
  }
  
export const StepTwo = ({ control, errors }: StepProps) => {
  const defects = 
    [
      {
      label: 'Defeito 1',
      value: 1
      },
      {
      label: 'Defeito 2',
      value: 2
      },
    ]

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
      <View style={{ gap: 10 }}>
        <Select.Root error={errors.defect} label='Defeito *'> 
          <ControlledSelect item={defects} control={control} placeholder='Selecione um defeito' name="defect"  />
        </Select.Root>

        <TextInput.Root error={errors.observation} label='Observação'> 
          <ControlledInput 
            name='observation'
            multiline
            control={control}
            placeholder='Insira uma observação do defeito'
          />
        </TextInput.Root>

        <Select.Root error={errors.deformity} label='Deformidade *'> 
          <ControlledSelect item={item} control={control} placeholder='Selecione uma deformidade' name="deformity"  />
        </Select.Root>

        <Select.Root error={errors.diff} label='Diferença de tonalidade da mesma peça *'> 
          <ControlledSelect item={item} control={control} placeholder='Selecione um valor' name="diff"  />
        </Select.Root>
      </View>
    );
  };