var productId:Number;
var productName:String;
var dop:Date;
var isExpired:Boolean;

productId=348658734;
productName="Dashboard";
dop=new Date(2017,4,4)
isExpired=false;

console.log("Product Id","-->",productId);
console.log("Name","-->",productName);
console.log("DOP","-->",dop.getDate());
console.log("Expired?","-->",isExpired);

//enum data type
enum componentType{Engine,Dashboard,Steering,AC};
var component:componentType=componentType.Dashboard;
console.log("Component","-->",component);

//array
var clients:String[]=["Hyundai","Maruti","Volvo"];
//lambda function

clients.forEach(obj=>{
    console.log("Client Name",'-->',obj);
})

var misc:any=[{
    id:0,
    exists:true,
    name:'steam'
},
    {
        id:0,
        exists:true,
        name:'steam'
    }
]
console.log(misc.length);
misc.forEach(obj=>{
    console.log(obj.name);
})


