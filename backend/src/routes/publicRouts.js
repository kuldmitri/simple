import express from 'express';
import bodyParser from 'body-parser';
import security from '../controllers/db';

const route = express.Router();

route.post('/register', security.dbExecute);
route.post('/login', security.dbExecute);
route.post('/changePassword', security.dbExecute);
route.get('/test', (req, res) => {
  res.status(200).json({ message: 'OK' })
});

export default route;
