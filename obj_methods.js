var emp ={
    fname:"Rinkal",
    lname:"Soni",
    age:"25",
    fullname: function(){
        return this.fname+"  "+this.lname;
    },
    get getName(){
        return emp.fname.toUpperCase();
    },
    set setLastName(newval){
        this.lname = newval;
    }
};
emp.salary = 25000;
emp.getInfo = function(){
    return this.salary+"--"+this.age;
}
document.write("Your name is "+emp.getName);
// document.write("Your name is "+emp.fullname());
document.write("<br>Salary & Age is  "+emp.getInfo());

emp.setLastName = "Adesara";
document.write("Your last name is "+emp.lname);



