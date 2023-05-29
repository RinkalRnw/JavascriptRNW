class emp{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    displayData(){
        return this.id+"--"+this.name;
    }
}
let objEmp = new emp(); //Normal object
let a = new emp(101,"Rinkal"); //
console.log("Data is "+a.displayData());

let emp = class {
    constructor(id,name,age){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    // displayData(){
    //     return this.id+"--"+this.name;
    // }
};
emp.prototype.displayData = function(){
    return this.id;
}

let obj = new emp(102,"Soni");
console.log("Disp Data is "+obj.displayData());