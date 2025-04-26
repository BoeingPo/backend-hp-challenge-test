import { createCarDB } from "../database/car"
import { carObjectType } from "../type/carType";
import { Request,Response } from 'express';


export const createCar = async (req : Request, res:Response):Promise<void> => {

    try {
        const {
            carRegistrationNumber,
            carBrand,
            carModel,
            note
        } = req.body;

        const object_data : carObjectType = {
            carRegistrationNumber : carRegistrationNumber,
            carBrand : carBrand,
            carModel : carModel,
            note : note
        }
        
        const car = await createCarDB(object_data);

        res.status(201).json({
            success : true,
            message : "inserted car data succesfully",
            data : car
        })
    }
    catch (error : any){
        res.status(500).json({
            success : false,
            message : error.message || "Internal server Error",
            error : error.name
        })
    }
};

export const readCar = async (req : Request,res : Response): Promise<void> =>{


}