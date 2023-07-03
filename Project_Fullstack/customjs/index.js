/************Category Display*************** */
let catData = JSON.parse(localStorage.getItem("CategoryData"));
let cat = catData.Category;
let row='';
//Display Category data from localstorage
for(i=0;i<cat.length;i++){
    row += "<a href='#' class='nav-item nav-link'>"+cat[i]+"</a>";
}

document.getElementById("navbar-nav").innerHTML = row;
/*************End Category Display*********** */