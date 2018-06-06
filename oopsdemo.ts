class Product
{
    private productId:Number;
    private productName:String;
    private dop:Date;

    constructor(id:Number,pName:String)
    {
        this.productId=id;
        this.productName=pName;

    }

    set DOP(value:Date)
    {
        this.dop=value;
    }

    get ProductId():Number
    {
        return this.productId;
    }

    get ProductName():String
    {
        return this.productName;
    }

    get DOP():Date
    {
        return this.dop;
    }

}

var productObj=new Product(437658,"Engine");
productObj.DOP=new Date(2016,4,4);
console.log("Product Id=",productObj.ProductId);
console.log("Product Name=",productObj.ProductName);
console.log("DOP=",productObj.DOP);
