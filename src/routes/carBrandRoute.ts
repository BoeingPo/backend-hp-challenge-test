const express = require('express');

const router = express.Router();

import { createCar, deleteCar, readCar, updateCar } from '../controller/carController.js';


router.post('/create-car',createCar);

router.get('/read-car',readCar);

router.patch('/update-car/:uuid',updateCar)

router.delete('/delete-car/:uuid',deleteCar)

export default router;