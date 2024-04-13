type car = {
    carBrand: string;
    carModel: string;
    carPrice: number;
    carRating: number;
    carInventatoryStatus: string;
    carImage?: string;
};


type Cars = Array<car>;


export { car, Cars };