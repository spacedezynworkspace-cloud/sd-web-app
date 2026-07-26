import mongoose from 'mongoose';

export const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  const mongoURI = process.env['MONGODB_URI']!;

  if (!mongoURI) {
    throw new Error('MONGODB_URI is missing');
  }

  await mongoose.connect(mongoURI);

  console.log('✅ MongoDB Connected');
};
