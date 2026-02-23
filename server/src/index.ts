import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.config';
import swaggerUI from 'swagger-ui-express';
import swaggerOpenapiSpecification from './config/swagger.config';
import morgan from 'morgan';

// API routes

// Admin API routes
import adminProjectRoutes from './routes/admin/project.routes';

// User API routes

// import { moniepointWebhook } from './controllers/webhooks/moniepoint.webhook';

dotenv.config();

const app = express();

// ✅ RAW body ONLY for Moniepoint webhook
// app.post(
//   '/webhooks/moniepoint',
//   express.raw({ type: 'application/json' }),
//   moniepointWebhook
// );

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// swagger endpoints
app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerOpenapiSpecification)
);

// Admin endpoints
// app.use('/api/admin/dashboard', adminDashboardRoutes);
app.use('/api/v1/admin/projects', adminProjectRoutes);
// app.use('/api/admin/users', adminUsersRoutes);
// app.use('/api/admin/payments', adminPayments);
// app.use('/api/admin/sessions', sessionRoutes);
// app.use('/api/admin/packages', packageRoutes);
// app.use('/api/admin/staff', staffRoutes);

// User endpoint
// app.use('/api/auth', authRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api/payment', paymentRoutes);
// app.use('/api/user', userRouters);

// Packages endpoint
// app.use('/api/bookings/packages', packagesRoutes);

const PORT = process.env['PORT'] || 5000;
console.log('port: ', PORT);

(async () => {
  try {
    await connectDB(); // 👈 wait for DB connection
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to connect to DB', err);
    process.exit(1); // Exit if DB connection fails
  }
})();
