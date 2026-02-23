import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProject extends Document {
  // user: mongoose.Types.ObjectId;
  // assignedTo?: mongoose.Types.ObjectId[];
  name: string;
  client: string;
  email: string;
  phoneNum: string;
  serviceType: string;
  budget: number;
  state: string;
  phase: 1 | 2 | 3 | 4 | 5;
  startDate: Date;
  endDate: Date;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  location: {
    state: string;
    address: string;
  };
}

const projectSchema = new Schema<IProject>(
  {
    // user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // assignedTo: [{ type: Schema.Types.ObjectId, ref: 'Staff' }],
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    client: { type: String, required: true, trim: true },
    serviceType: { type: String, required: true, trim: true },
    phoneNum: { type: String, required: true, trim: true },
    startDate: { type: Date },

    endDate: { type: Date },
    phase: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      default: 1,
    },
    budget: { type: Number },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'refunded'],
      default: 'pending',
    },
    // paymentReference: { type: String, trim: true },
    // cancelReason: { type: String, trim: true },
    // rescheduledFrom: { type: Schema.Types.ObjectId, ref: 'Project' },
    // images: [
    //   {
    //     url: { type: String },
    //     public_id: { type: String },
    //     isSelected: { type: Boolean, default: false },
    //   },
    // ],
    location: {
      state: { type: String, required: true, trim: true },
      address: { type: String, required: true, trim: true },
    },
  },
  { timestamps: true }
);

projectSchema.index({ user: 1 });
projectSchema.index({ phase: 1 });

export const Project: Model<IProject> = mongoose.model(
  'Project',
  projectSchema
);
export default Project;
