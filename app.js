import express from 'express';

const app = express();

app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', './views'); 
import router from './routes/ai.js';
app.use('/', router);

export default app;