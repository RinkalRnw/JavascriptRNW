let a = [23,34,32,12];

// a.forEach(dispArray);
// function dispArray(val){
//     document.write("Element is ---"+val+"<br>");
// }
a.forEach(function(val,i){
    document.write("Element is"+i+" ---"+val+"<br>");
});

document.write("answer is "+a.includes(3));
document.write("answer is "+a.indexOf(34));
