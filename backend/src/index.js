import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import config from 'config';
import routes from './routes';
import logger from './logger';

const app = express();

app.use('/public', express.static(config.static.public));
app.use(['/sw', '/'], express.static(config.static.swPublic));
app.set('view engine', 'ejs');
app.set('views', __dirname + config.static.views);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next)=>{
  next();
});

app.use(routes);
app.get('/', (req, res) => res.redirect('/login'));
app.get(['/', '/register', '/login', '/ChangePassword'], (req, res) => res.render('app'));

app.listen(config.app.port, () =>
  logger.info(`Server listening on ${config.app.host}:${config.app.port}`)
);
