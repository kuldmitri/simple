import express from 'express';
import publicRouts from './publicRouts';
import auth from './../middlewares/auth';

const route = express();
route.use('/api', auth);
route.use('/publicRouts', publicRouts);

export default route;
