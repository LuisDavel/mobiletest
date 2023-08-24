import { useState } from 'react';
import { useRealm, useQuery } from '../lib/realm';
import { Alert } from 'react-native';

type GenerateFunction<T> = (data: any) => T;

const useRealmCrud = <T extends Realm.Object>(
  generate: GenerateFunction<T>,
  tableName: string,
  table?: any
  ) => {
  const realm = useRealm();
  const query = useQuery(tableName);

  
  const [error, setError] = useState<Error | null>(null);

  const createRecord = (data: any) => {
    try {
      realm.write(() => {
        realm.create(tableName, generate(data));
      });
    } catch (err: any) {
      Alert.alert(`Error `, `Informe o erro ao administrador do sistema:\n\n${error}`  )
      setError(err);
    }
  };

  const deleteRecord = (id: any) => {
    try {
      const itemToDelete = realm.objectForPrimaryKey(tableName, id);
      if (itemToDelete) {
        realm.write(() => {
          realm.delete(itemToDelete);
        });
      }
    } catch (err: any) {
      Alert.alert(`Error`, `Informe o erro ao administrador do sistema:\n\n${error}`);
      setError(err);
    }
  };

  const queryRealm = () => {
    try {
      return query
    } catch (err: any) {
      setError(err);
    }
  };

  return {
    queryRealm,
    createRecord,
    deleteRecord,
    error,
  };
};

export default useRealmCrud;
