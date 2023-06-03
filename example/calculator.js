
let txt = '';

function appendvalue(num){
    
    var len = txt.length; //5+
    var lastChar = txt.slice(len-1);
    // alert(lastChar);
    var p = ["+","-","x","/"];
    if(lastChar == num && (num == '+' || num=='x' || num == '/')){
        alert("Plz enter valid char");
    } 
    else {
        txt += num;
        var pos = txt.indexOf(num);
        
        if(pos == 0 && (num == '+' || num=='x' || num == '/')){
            alert("Plz enter no");
            document.getElementById('num').value = '';
            txt = '';
        } else {
            document.getElementById('num').value = txt;
        }
    }
    
}

function calculate(){ 
    var var1 = document.getElementById('num').value;
    var1 = var1.replace(/x/g,"*");
    var var2 = eval(var1);
    document.getElementById('num').value = var2;
}  

function allclear(){
    txt = '';
    document.getElementById('num').value = txt;
}

function onechdlt(){
    var var4 = document.getElementById('num').value;
    var var5 = var4.slice(0, -1);
    txt = var5;
    document.getElementById('num').value = txt; 
}

