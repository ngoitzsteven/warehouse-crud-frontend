export class Warehouse {
 warehouseId:number;
 warehouseName:string;
 location:string;
 capacityMax:number;
 capacityCurrent:number;
 supply:number;
 product_id:number;

 constructor(warehouseId = 0, warehouseName = '', location = '', capacityMax = 0, capacityCurrent = 0, supply = 0, product_id = 0 ){
    this.warehouseId =warehouseId;
    this.warehouseName =warehouseName;
    this.location =location;
    this.capacityMax =capacityMax;
    this.capacityCurrent =capacityCurrent;
    this.supply =supply;
    this.product_id =product_id;
 }
    



}

