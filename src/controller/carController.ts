import { createCarDB, deleteCarDB, readCarDB, updateCarDB } from "../database/car"
import { carDeleteObjectType, carObjectType, carUpdateObjectType, queryCarType } from "../type/carType";


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
    try{
        const {
            currentPage ,
            pageSize
        }  = req.query;

        //Change type string to int
        const currentPageInt : number = parseInt(currentPage as string,10) || 1
        const pageSizeInt : number = parseInt(pageSize as string,10) || 10

        const params_object:queryCarType = {
            page : currentPageInt,
            pageSize : pageSizeInt 
        }

        const queryCar = await readCarDB(params_object)

        res.status(200).json({
            success : true,
            message : "query Successfully",
            data : queryCar
        })

    }
    catch (error : any) {

        res.status(500).json({
            success : false,
            message : error.message || "Internal server Error",
            error : error.name
        })
    }

}

export const updateCar = async (req :Request , res : Response) : Promise<void> => {

    try {
        const uuid = req.params.uuid

        const {
            carBrand,
            carModel,
            note
        } = req.body

        const updateObject : carUpdateObjectType = {
            uuid : uuid,
            update_data : {
                carBrand : carBrand,
                carModel : carModel,
                note : note
            }
        }

        const updateCar = await updateCarDB(updateObject)


        res.status(200).json({
            success : true,
            message : "updated successfully",
            data : updateCar
        })
    }
    catch (error : any) {

        res.status(500).json({
            success : false,
            message : error.message || "Internal server Error",
            error : error.name
        })
    }

}

export const deleteCar = async (req :Request , res : Response) : Promise<void> => {

    try {
        const uuid = req.params.uuid

        const deleteObject : carDeleteObjectType = {
            uuid : uuid,
        }
        
        console.log(deleteObject)

        const deleteCar = await deleteCarDB(deleteObject)


        res.status(200).json({
            success : true,
            message : "deleted successfully",
            data : deleteCar
        })
    }
    catch (error : any) {

        res.status(500).json({
            success : false,
            message : error.message || "Internal server Error",
            error : error.name
        })
    }

}