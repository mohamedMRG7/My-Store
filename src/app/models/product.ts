export interface Product {
    id:number;
    title:string;
    price:number;
    description:string;
    image:string;
    rating:Rating;
}


interface Rating {
    rate:number;
}