import Realm from 'realm';

type GenerateProps = {
  id_defect: number;
  desc_defect: string;
  created_date: Date;
};

export class Historic_defect extends Realm.Object {
  id_defect!: number;
  desc_defect!: string;

  static generate({
    desc_defect,
    id_defect,
    created_date = new Date()
    
  }: GenerateProps) {
    return {
      _id: new Realm.BSON.UUID(),
      desc_defect,
      id_defect,
      created_date
    };
  }

  static schema: Realm.ObjectSchema = {
    name: 'historic_defect',
    primaryKey: '_id',

    properties: {
      _id: 'uuid',
      desc_defect: 'string',
      id_defect: 'double',
      created_date: 'date', // Change the data type to 'date'
    },
  };
}
