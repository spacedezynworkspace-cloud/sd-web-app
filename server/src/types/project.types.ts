import { Schema } from 'mongoose';

export interface projectStages {
  _id: Schema.Types.ObjectId;
  name: string;
  completed: boolean;
}
