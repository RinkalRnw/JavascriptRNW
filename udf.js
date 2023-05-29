//without parameter & without return 
function add(){
    let a = prompt("Enter a");
    let b = prompt("Enter b");
    c = parseInt(a)+parseInt(b);
    document.write("Addition is "+c+"<br>");
    // let d = sub();
    // document.write("Minus is ----"+d+"<br>");
    mult(a,b);
}
//take nothing,return something
function sub(){
    let a = prompt("Enter a");
    let b = prompt("Enter b");
    c = parseInt(a)-parseInt(b);
    return c;
}
//Take something,return nothing
function mult(p,q){
    let m = p*q;
    document.write("Multiplication is "+m+"<br>");
}
//Take something,return something
function area(r){
    const pi=3.14;
    return pi*r**2;
}
let radious = prompt("Enter radious:");
document.write("<br>Area of circle is "+area(radious));