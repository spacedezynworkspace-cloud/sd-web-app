import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.config';
import swaggerUI from 'swagger-ui-express';
import swaggerOpenapiSpecification from './config/swagger.config';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes';
import supervisorRoutes from './routes/supervisor/supervisor.routes';

import adminProjectRoutes from './routes/admin/project.routes';
import adminFinanceRoutes from './routes/admin/finance.routes';
import adminExpenseRoutes from './routes/admin/expense.routes';
import adminPaymentRoutes from './routes/admin/payment.routes';
import adminDashboardRoutes from './routes/admin/dashboard.routes';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      'https://sd-web-app-nine.vercel.app',
      'https://app.spacedezyn.com',
      'http://localhost:3000',
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan('dev'));

app.use(
  '/api/v1/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerOpenapiSpecification)
);

app.use('/api/v1/auth', authRoutes);

app.use('/api/v1/admin/projects', adminProjectRoutes);
app.use('/api/v1/admin/finances', adminFinanceRoutes);
app.use('/api/v1/admin/expenses', adminExpenseRoutes);
app.use('/api/v1/admin/payments', adminPaymentRoutes);
app.use('/api/v1/admin/dashboard', adminDashboardRoutes);

app.use('/api/v1/supervisors', supervisorRoutes);

// let isConnected = false;

// async function connect() {
//   if (!isConnected) {
//     await connectDB();
//     isConnected = true;
//   }
// }

// connect();
const PORT = 5000;
// Start server ONLY after DB connects
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

export default app;
