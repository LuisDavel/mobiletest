import { useEffect } from 'react';
import { useRealm } from "../lib/realm";
import { Historic_defect } from "../lib/realm/schema/historic_defect";
import { api } from "../utils/axios/axios";
import { addLabelAndValue } from "../utils/handle-options-props";
import { useMutation } from 'react-query';

type OptionProps = {
  descdefeito: string,
  iddefeito: number
}[];

export function useSync() {
  const realm = useRealm();

  const syncDefectsMutation = useMutation(async (unit: number) => {
    const response = await api.get(`/v1/util/defeito/${unit}/${0}`);
    const options: OptionProps = response.data || [];

    const transformedOptions = addLabelAndValue(options, 'descdefeito', 'iddefeito');
    realm.write(() => {
      const module = realm.objects('historic_defect');

      realm.delete(module);
      transformedOptions.forEach(data => {
        const defectObject = {
          desc_defect: data.label as string,
          id_defect: data.value as number
        };

        const existDataDefect = module.filtered(`id_defect == ${defectObject.id_defect}`);
        if (existDataDefect.length === 0) {
          realm.create('historic_defect', Historic_defect.generate(defectObject));
        }
      });
    });

    return transformedOptions; // Retornar os dados transformados
  });

  return syncDefectsMutation;
}
