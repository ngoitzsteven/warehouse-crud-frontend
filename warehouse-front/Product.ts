export class Product {
    id: number;
    productName: String;
    partNumber: String;
    supply: number;
    warehouseId: number
    
    constructor( id = 0, productName = '', partNumber = '', supply = 0, warehouseId = 0){
        this.id = id;
        this.productName = productName;
        this.partNumber = partNumber;
        this.supply = supply;
        this.warehouseId = warehouseId;
    }


}



// export interface Product {
//     id: number;
//     productName: String;
//     partNumber: String;
// }