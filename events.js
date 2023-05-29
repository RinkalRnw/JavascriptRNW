function Add(){
    var a = document.getElementById('no1').value;
    var b = document.getElementById('no2').value;
    // let c = parseInt(a)+parseInt(b);
    let c = eval(a);
    document.getElementById('ans').value = c;
}
function sub(){
    var a = document.getElementById('no1').value;
    var b = document.getElementById('no2').value;
    let c = parseInt(a)-parseInt(b);
    document.getElementById('ans').value = c;
}
function cleardata(){
    document.getElementById('no1').value = '';
    document.getElementById('no2').value = '';
    document.getElementById('ans').value = '';
}
function firstPage(){
    alert("hi");
    window.location.href='first.html';
}
function pagePrint(){
    alert("hi11");
    window.print();
}

