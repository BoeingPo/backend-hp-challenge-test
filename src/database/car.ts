import { Car } from '@prisma/client';
import  prisma  from '../prisma/prisma'
import type { carObjectType } from '../type/carType';

export const createCarDB = async(carObject : carObjectType):Promise<Car> => {
   try {
      const car = await prisma.car.create({
         data: {
            carRegistrationNumber: carObject.carRegistrationNumber,
            carBrand: carObject.carBrand,
            carModel: carObject.carModel,
            note: carObject.note
         }
      });
      return car;
   } catch (error : any) {
      console.error('Error creating car:', error);
      throw new error(error.message);
   }
}