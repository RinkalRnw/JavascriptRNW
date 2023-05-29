let txt = '';
function getVal(no){
    txt += no;
    document.getElementById('no1').value = txt;
}

function getAns(){
    var t1 = document.getElementById('no1').value;
    var ans = eval(t1);
    document.getElementById('no1').value = ans;
}