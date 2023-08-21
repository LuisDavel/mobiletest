import { useState } from 'react';
import { useRealm, useQuery } from '../lib/realm';

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
    error,
  };
};

export default useRealmCrud;
