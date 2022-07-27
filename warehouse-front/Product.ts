export class Product {
    id: number;
    productName: String;
    partNumber: String;

    
    constructor( id = 0, productName = '', partNumber = ''){
        this.id = id;
        this.productName = productName;
        this.partNumber = partNumber;
    }


}



// export interface Product {
//     id: number;
//     productName: String;
//     partNumber: String;
// }