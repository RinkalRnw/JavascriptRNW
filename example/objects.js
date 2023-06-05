// array ma only value store thati hati but in object 
// key - value pair store thay
//Object is most imp.
let a = {
    fname:"Rinkal",
    lname:"Soni",
    age:"25",
    fullname:function(){
        return this.fname+" "+this.lname;
    }
};

//add new element in object
a.salary = function(){
    return 35000;
};
a['address'] = "Bopal";

// document.write('First name is '+a.fname+"<br>");
// document.write('Last name is '+a['lname']+"<br>");

for(var x in a){
    document.write(x+" is "+a[x]+"<br>");
}
delete a.address;

for(var x in a){
    document.write(x+" is "+a[x]+"<br>");
}

document.write('Your fullname is '+a.fullname());
document.write('Your Salary is '+a.salary());



