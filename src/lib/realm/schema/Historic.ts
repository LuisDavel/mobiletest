import Realm from 'realm';

type GenerateProps = {
  defect: number;
  deformated: number;
  diff: number;
  obs: string;
  shine: number;
  texture: number;
  tom: number;
  tonality: number;
  image: string[];
  created_date: Date;
};

export class Historic_partsEquip extends Realm.Object {
  defect!: number;
  deformated!: string;
  diff!: string;
  obs!: string;
  shine!: string;
  texture!: string;
  tom!: number;
  tonality!: string;

  static generate({
    defect,
    deformated,
    diff,
    obs,
    created_date = new Date(),
    image,
    shine,
    texture,
    tom,
    tonality,
  }: GenerateProps) {
    return {
      _id: new Realm.BSON.UUID(),
      defect,
      deformated,
      diff,
      obs,
      shine,
      texture,
      tom,
      tonality,
      image,
      created_date,
    };
  }

  static schema: Realm.ObjectSchema = {
    name: 'historic_appointment_parts_equip5',
    primaryKey: '_id',

    properties: {
      _id: 'uuid',
      image: 'string[]',
      defect: 'double',
      deformated: 'string',
      diff: 'string',
      obs: 'string',
      shine: 'string',
      texture: 'string',
      tom: 'double',
      tonality: 'string',
      created_date: 'date', // Change the data type to 'date'
    },
  };
}
