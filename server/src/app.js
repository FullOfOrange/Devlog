import 'env';
import * as express from 'express';

const { } = process.env;

const app = express();
app.use(express.json());

export default app;
