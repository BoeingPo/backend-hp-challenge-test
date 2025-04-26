const express = require('express');
import carBrandRoute from './routes/carBrandRoute';

const app = express();

app.use(express.json());

app.use('/car',carBrandRoute);

export default app