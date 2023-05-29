const name1 = ["abc","xyz","pqr"];

// document.write("first is "+name1[0]);
name1.push("Helloo");
for(let i=0;i<name1.length;i++){
    document.write("Name is "+name1[i]+"<br>");
}

name1.pop();
for(let i=0;i<name1.length;i++){
    document.write("Name is "+name1[i]+"<br>");
}  

name1.toString();
document.write("array to string conversion is "+name1);
