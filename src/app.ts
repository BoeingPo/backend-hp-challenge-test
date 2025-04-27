const express = require('express');
import carBrandRoute from './routes/carBrandRoute';
import { Request,Response,NextFunction } from 'express';

const app = express();

app.use((req : Request, res:Response, next:NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE,OPTIONS'); // Allow these methods
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Allow these headers
  
    if (req.method === 'OPTIONS') {
      // Pre-flight request
      return res.sendStatus(200);
    }
  
    next();
  });
  

app.use(express.json());

app.use('/car',carBrandRoute);

export default app