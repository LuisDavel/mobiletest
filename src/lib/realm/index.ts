import { createRealmContext } from '@realm/react';

import { Historic_partsEquip } from './schema/historic_parts';
import { Historic_defect } from './schema/historic_defect';

export const { RealmProvider, useQuery, useObject, useRealm } =
  createRealmContext({
    schema: [Historic_partsEquip, Historic_defect],
  });