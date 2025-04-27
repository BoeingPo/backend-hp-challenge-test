import { Car } from '@prisma/client';
import  prisma  from '../prisma/prisma'
import type { carDeleteObjectType, carObjectType, carUpdateObjectType, queryCarType } from '../type/carType';

export const createCarDB = async(carObject : carObjectType):Promise<Car> => {
   try {
      const carCreate = await prisma.car.create({
         data: {
            carRegistrationNumber: carObject.carRegistrationNumber,
            carBrand: carObject.carBrand,
            carModel: carObject.carModel,
            note: carObject.note
         }
      });
      return carCreate;
   } catch (error : any) {
      console.error('Error creating car:', error);
      throw new error(error.message);
   }
}

export const readCarDB = async(pageCarObject : queryCarType) : Promise<{
   records : Car[];
   totalPage : number;
}> =>{
   
   const {
      page,
      pageSize
   } = pageCarObject

   const skip = (page - 1)* pageSize

   try{
      const records = await prisma.car.findMany({
         orderBy: {
            createdAt: 'desc',
         },
         skip: skip,
         take: pageSize
      })

      const totalRecords = await prisma.car.count()
      const totalPage = Math.ceil(totalRecords/pageSize)

       
      return {records,totalPage}
   }
   catch (error : any){
      console.error("Error query car", error)
      throw new error(error.message)
   }

}

export const updateCarDB = async ( updateCarObject : carUpdateObjectType ) : Promise<Car> => {
   const {
      uuid,
      update_data
   } = updateCarObject

   try {
      const updatedCar = await prisma.car.update({
         where: { id: uuid },
         data: update_data
      });

      return updatedCar

   }
   catch(error:any){
      console.error("Error update car",error)
      throw new error(error.message)
   }
}

export const deleteCarDB = async ( deleteCarObject : carDeleteObjectType ) : Promise<Car> => {
   const {
      uuid
   } = deleteCarObject

   try {
      const deletedCar = await prisma.car.delete({
         where: { id: uuid }
      });

      return deletedCar

   }
   catch(error:any){
      console.error("Error update car",error)
      throw new error(error.message)
   }
}