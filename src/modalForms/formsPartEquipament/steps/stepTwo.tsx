import { View } from "react-native";
import { ControlledInput } from "../../../components/ControlledInput";
import { TextInput } from "../../../components/TextInput";
import { Select } from "../../../components/Select";
import { ControlledSelect } from "../../../components/ControlledSelect";
import useRealmCrud from "../../../hooks/useCrud";
import { Historic_defect } from "../../../lib/realm/schema/historic_defect";
import { addLabelAndValue } from "../../../utils";
interface StepProps {
    control: any;
    errors: any;
  }
  
type OptionProps = {
    descdefeito: string, 
    iddefeito: number  
}[]

interface StepProps {
    control: any;
    errors: any;
  }
  
export const StepTwo = ({ control, errors }: StepProps) => {
  const { queryRealm } = useRealmCrud(Historic_defect.generate,'historic_defect');
  const defects = queryRealm()?.toJSON()
  // console.log(defects)
  const transformedOptions = addLabelAndValue(defects, 'desc_defect', 'id_defect');
  
    const item = 
    [
      {
      label: 'Conforme',
      value: 0
      },
      {
      label: 'Não conforme',
      value: 1
      },
    ]

    return (
      <View style={{ gap: 10 }}>
        <Select.Root error={errors.defect} label='Defeito *'> 
          <ControlledSelect item={transformedOptions} control={control} placeholder='Selecione um defeito' name="defect"  />
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