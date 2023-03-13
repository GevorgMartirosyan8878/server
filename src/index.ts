import dotenv from 'dotenv';
import express from 'express';

import { defaultRoute } from './routes/defaultRoute';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3001;

app.use('/bla', defaultRoute);

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${process.env.PORT}`);
});
