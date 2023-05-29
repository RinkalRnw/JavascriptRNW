let str = "Hi Hello How Are You?";
document.write("Total length is "+str.length+"<br>");

/*let str2 = str.slice(0); 
let str3 = str.slice(3,8); 
document.write("Starting point is "+str2+"<br>");
document.write("Slice is "+str3); */
let str2 = str.slice(-4).toUpperCase(); 
let str3 = str.slice(-10,-6); 
document.write("Starting point is "+str2+"<br>");
document.write("Slice is "+str3.toLowerCase()+"<br>");

let str4 = str.substr(2,8);
document.write("Sub str is "+str4+"<br>");

let p = "My name is soni Rinkal Soni";
let q = p.replaceAll(/Soni/gi,"Sony");
document.write("Replace is "+q+"<br>");
let str5 = "Who is your faculty?";

let str6 = "What are you doing";

let str7 = str.concat("sdklskldfsdgfhjk",str5);
document.write("Merge is "+str7+"<br>");


let str8 = "                hello Students         ";
document.write("String 8 is "+str8.length+"<br>");
let str9 = str8.trim(); 
document.write("String trim func is "+str9.length+"<br>");

let s = "45";
let s1 = s.padEnd(5,"$$5");
document.write("String  is "+s1+"<br>");

// let s2 = str9.charAt(6).toLowerCase()+str9.slice(7);
let s2 = str9.charCodeAt(0);
document.write("String  is "+s2+"<br>");






