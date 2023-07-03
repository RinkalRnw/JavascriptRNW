//get category  data from localstorage
let getCatData = JSON.parse(localStorage.getItem("cat_data"));
if(getCatData != null){
    var dt = getCatData.Category;
    var row = '';
    for(let i=0;i<dt.length;i++){
        row += "<a class='dropdown-item' href='#'>"+dt[i]+"</a>";
    }
    document.getElementById("dropdown-menu").innerHTML = row;
}