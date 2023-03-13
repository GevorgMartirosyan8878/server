import { Router } from 'express';

export const defaultRoute = Router();

defaultRoute.get('/path', (req, res) => {
  res.send('hahahahahahahahahahhah');
});
