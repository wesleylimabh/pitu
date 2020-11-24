import express from 'express';
import linksRouter from './routes/linksRoutes'

const app = express();

app.use(express.json());
app.use(linksRouter);

export default app;