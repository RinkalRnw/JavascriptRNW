/*
If statement
if(condition){
    //code
}
*/
let age = prompt("Enter age:"); 
let a = parseInt(age);

if(a>=18){
    document.getElementById("demo").innerHTML = "You are eligible 4 vote";
}
document.write("<br>Hello");
/*
If_Else  statement
if(condition){
    //true block
}  else {
    //false block
}
*/
if(a>=18){
    document.write("<br>You are eligible 4 vote");
} else {
    document.write("<br>You are not eligible 4 vote");
}
//No is even or odd
a = prompt("Enter no:");
let b = parseInt(a);
if(b%2 == 0){
    document.write("<br>Even No");
} else {
    document.write("<br>Odd No");

}
//Leap Year or not
if(b%4 == 0){
    document.write("<br>Leap Year");
} else {
    document.write("<br> Not leap year");
}
const pi=3.14;
let r = 2.5;
document.write("Area of circle is "+pi*r**2);

