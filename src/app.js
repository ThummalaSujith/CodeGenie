import express from 'express';
import aiRoutes from './routes/ai.routes.js';
import * as dotenv from 'dotenv'; // Import dotenv

dotenv.config();



export const app = express();

app.use(express.json())

app.use('/ai', aiRoutes);




