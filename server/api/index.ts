import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.config';
import swaggerUI from 'swagger-ui-express';
import swaggerOpenapiSpecification from './config/swagger.config';
import morgan from 'morgan';

// API routes
// Auth API routes
import authRoutes from './routes/auth.routes';

// User API routes

// Supervisor API routes
import supervisorRoutes from './routes/supervisor/supervisor.routes';

// Admin API routes
import adminProjectRoutes from './routes/admin/project.routes';
import adminFinanceRoutes from './routes/admin/finance.routes';
import adminExpenseRoutes from './routes/admin/expense.routes';
import adminPaymentRoutes from './routes/admin/payment.routes';
import adminDasboardRoutes from './routes/admin/dashboard.routes';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [process.env['FRONTEND_URL']!],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan('dev'));

// swagger endpoints
app.use(
  '/api/v1/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerOpenapiSpecification)
);

// Auth endpoints
app.use('/api/v1/auth', authRoutes);

// Admin endpoints
app.use('/api/v1/admin/projects', adminProjectRoutes);
app.use('/api/v1/admin/finances', adminFinanceRoutes);
app.use('/api/v1/admin/expenses', adminExpenseRoutes);
app.use('/api/v1/admin/payments', adminPaymentRoutes);
app.use('/api/v1/admin/dashboard', adminDasboardRoutes);

// Supervisor endpoints
app.use('/api/v1/supervisors', supervisorRoutes);

// User endpoint

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

export default app;
