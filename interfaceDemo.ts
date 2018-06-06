interface Person
{
    firstName:String;
    lastName?:String; //optional
    address:String;
    fullName:()=>String;
}

var obj:Person={
    firstName:"Anoop",
    address:"UP",
    fullName:():String=>{
        return obj.firstName+" "+obj.lastName;
    }
}

console.log(obj.fullName());
console.log(obj.address);


class Employee implements Person
{
  constructor(public firstName:String,public lastName:String,public address:String)
  {

  }

  fullName():String
  {
      return this.firstName+this.lastName;
  }
}

var employeeObj=new Employee("Jayanth","Shinde","Delhi");
console.log(employeeObj.fullName());

