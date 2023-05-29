//If else if
let m1,m2,m3;
m1=78;
m2=50;
m3=67;
let total = m1+m2+m3;
console.log("TOtal is "+total);
let per = total/3;
document.write("Percentage is "+per+"<br>");
/*
80 up = A+
70-80 = A
60-70 = B+
50-60 = B
40-50 = Pass
<40 = Fail 
*/
if(per>=80){
    document.getElementById('demo').innerHTML = "You achieved Grade A+";
} else if(per>=70 & per<80){
    document.getElementById('demo').innerHTML = "You achieved Grade A";
} else if(per>=60 & per<70){
    document.getElementById('demo').innerHTML = "You achieved Grade B+";
}else if(per>=50 & per<60){
    document.getElementById('demo').innerHTML = "You achieved Grade B";
}else if(per>=40 & per<50){
    document.getElementById('demo').innerHTML = "You achieved Pass Class";
}else {
    document.getElementById('demo').innerHTML = "Fail";
}

//Wap to check no is +ve,-ve or zero.
// let no =prompt("Enter any no:");
let no = 5;
if(no>0){
    document.write("+ve no");
} else if(no<0){
    document.write("-ve no");
} else {
    document.write("Zero");
}
//Find max from 3 value;
let a=34,b=40,c=230;
if(a>b){ //34>4
    if(a>c){ //34>230
        document.write("A is max - "+a);
    }else {
        document.write("C is max - "+c);
    }
} else {
    if(b>c){
        document.write("B is max - "+b);
    } else {
        document.write("C is max - "+c);
    }
}
//Find max from 4 value.
document.write("<pre>1.Add\n2.Sub\n3.Mult\n4.Div</pre>");
let ch = prompt("Enter your choice");
//Take 1,2,3,4 for add,sub
//Take s for Sunday
//Take + for add,- for subtraction 
switch(ch){
    case '+':
        c=a+b;
        document.write("\n Sunday");
        break;
    case '-':
        c=a-b;
        document.write("\n Subtraction is "+c);
        break;    
    case '3':
        c=a*b;
        document.write("\n Multiplication is "+c);
        break;
    case '4':
        c=a/b;
        document.write("\n Division is "+c);
        break;
    default:
        document.write("\n Invalid choice");
        break;
}














