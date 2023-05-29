let arr = ["basg","xyd","are","you"];

//length
let ch = arr.length;
// document.write("Array Length "+ch+"<br>");

//convert array into string 
let a = arr.toString();
// document.write("Array "+a);

//add element from last
arr.push("hello");
let i;
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }

arr.pop();

// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }

arr.shift();
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }

arr.unshift("heyyy");
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }
arr[1] = "wow";
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }

// delete arr[2];
// for(i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }
let b = ["Hello","Xyz"];
let d = ["Pqr"];
let c = arr.concat(b,d);
// for(i=0;i<c.length;i++){
//     document.write(c[i]+"<br>");
// }

c.splice(2,0,"vishal","azim");
for(i=0;i<c.length;i++){
    document.write(c[i]+"<br>");
}

c.splice(0,2);
document.write("---------After remove first element --------------<br>");
for(i=0;i<c.length;i++){
    document.write(c[i]+"<br>");
}

document.write("---------After Sorting --------------<br>");
let arr_new = ["xyz","abc","pqr","def"];

arr_new.sort();
arr_new.reverse();
for(i=0;i<arr_new.length;i++){
    document.write(arr_new[i]+"<br>");
}
// let arr_new = [40,35,100,250,67,4,5];
// document.write(arr_new.sort(function(a,b){ return b-a;}));
// d = arr_new.reverse();
// for(i=0;i<d.length;i++){
//     document.write(d[i]+"<br>");
// }

