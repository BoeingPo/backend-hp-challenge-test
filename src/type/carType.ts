export type carObjectType = {
    carRegistrationNumber : string
    carBrand : string
    carModel : string
    note     : string
};

export type queryCarType = {
    page : number,
    pageSize : number
};

export type allowUpdateCarType = {
    carBrand : string
    carModel : string
    note     : string   
};

export type carUpdateObjectType = {
    uuid : string,
    update_data : allowUpdateCarType 
};

export type carDeleteObjectType = {
    uuid : string
};
