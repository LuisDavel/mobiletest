import { createRealmContext } from '@realm/react';

import { Historic_partsEquip } from './schema/Historic';

export const { RealmProvider, useQuery, useObject, useRealm } =
  createRealmContext({
    schema: [Historic_partsEquip],
  });