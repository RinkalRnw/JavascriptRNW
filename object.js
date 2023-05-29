// let a = {};
// let b = new Object();
let emp = {
    firstname:"Rinkal",
    lastname:"Soni",
    age:"25"
};
/*
document.write("Your firstname is "+c.firstname+"<br>");
document.write("Your lastname is "+c['lastname']+"<br>");


a.fname = "Rinkal";
a['lname'] = "Soni";
document.write("Your firstname is "+a.fname+"<br>");
document.write("Your lastname is "+a['lname']+"<br>");
*/
emp.salary = 25000; //c['salary'] = 25000;
//For In loop
let a;
for(a in emp){
    document.write(a+" value is "+emp[a]+"<br>");
}

delete emp.age; //emp['age']
for(a in emp){
    document.write(a+" value is "+emp[a]+"<br>");
}

var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
let arr = pets.reduce(function(t,v){
        if(!t[v]){
            t[v] = 1;
        } else {
            t[v]++;
        }
        return t+v;
},{});

for(a in arr){
    document.write(a+" -- "+arr[a]+"<br>");
}
