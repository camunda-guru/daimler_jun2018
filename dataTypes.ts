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

//functions

function checkInventory(products):void
{

    console.log( products.length);
}
var products:String[]=["BMW","ESTILO","HONDA","CLASS E"];
checkInventory(products);

//optional parameters

function employeeInfo(empName:String, ...skills:String[] ):void
{
    console.log("Employee Name",empName)

    skills.forEach(obj=>{
        console.log(obj);
    })
}

employeeInfo("Anoop");
employeeInfo("Anju","c++");
employeeInfo("Anju","c++","Java");
employeeInfo("Anju","c++","Java","Angularjs");

//default parameters

function addressInfo(city:String="Chennai",country:string="India")
{
    console.log(city,"--->",country);

}
addressInfo();
addressInfo("Bangalore");
addressInfo(undefined,"USA");


