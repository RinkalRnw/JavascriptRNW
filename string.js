let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, repellat maiores itaque ";
document.write("Length of string is "+str.length+"<br>");
document.write("Uppercase string is "+str.toUpperCase()+"<br>");
document.write("Lowercase of string is "+str.toLowerCase()+"<br>");
let ch = str.slice(5,10);

document.write("slice function "+ch+"<br>");

let ch1 = str.slice(5);
document.write("slice function "+ch1+"<br>");

ch1 = str.slice(-5);
document.write("slice reverse function "+ch1+"<br>");

ch1 = str.slice(-10,-4);
document.write("slice reverse function "+ch1+"<br>");

ch1 = str.substr(10,5);
document.write("sub string function "+ch1+"<br>");

let txt = "My Self Adesara  Rinkal Adesara";
let rep_txt = txt.replaceAll(/adesara/gi,"Soni");
document.write("Replace string "+rep_txt+"<br>");

let text1 = "Rinkal";
let text2 = "Adesara";
let text3 = text2.concat("@", text1);
document.write("Merge string function "+text3+"<br>");

let finalText = "I am".concat(" ","Rinkal"," ","Adesara");
document.write("Merge string function "+finalText+"<br>");


let t1 ="                  Hello             ";
document.write("msg is "+t1.length+"<br>");
let t2 = t1.trimEnd();
document.write("msg is "+t2.length+"<br>");

let t3 = "4";
document.write("pad Start is "+t3.padEnd(2,"01"));

document.write("char at is "+text1.charAt(2));

















