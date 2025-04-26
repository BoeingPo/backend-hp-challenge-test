const express = require('express');

const router = express.Router();

import { createCar } from '../controller/carController.js';


router.post('/create-car',createCar);


//router.post('/read-car')

export default router;