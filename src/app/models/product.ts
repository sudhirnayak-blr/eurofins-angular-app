export class Product {

    constructor(
        public productId:number, 
        public productName:string,
        public unitPrice: number,
        public unitsInStock:number,
        public discontinued: boolean
    ) {

    }
    toString() : string { 
        let str = `Id:${this.productId}, Name:${this.productName}`; 
        str += `, Price: ${this.unitPrice}, Stock: ${this.unitsInStock}`;
        str += `, Discontinued: ${this.discontinued}`; 
        return str;
    }
}
