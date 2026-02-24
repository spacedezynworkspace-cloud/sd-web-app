import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IExpense extends Document {
  project?: mongoose.Types.ObjectId;
  amount: number;
  type: 'electrical' | 'wood' | 'tools' | 'material' | 'labor' | 'logistics';
  description?: string;
  requestedBy?: mongoose.Types.ObjectId;
  approved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const expenseSchema = new Schema<IExpense>(
  {
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      index: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    type: {
      type: String,
      enum: ['electrical', 'wood', 'tools', 'material', 'labor', 'logistics'],
      required: true,
      index: true,
    },
    description: {
      type: String,
      trim: true,
    },
    requestedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    approved: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  { timestamps: true }
);

expenseSchema.index({ createdAt: -1 });
expenseSchema.index({ type: 1 });
expenseSchema.index({ project: 1 });
export const Expense: Model<IExpense> = mongoose.model(
  'Expense',
  expenseSchema
);
