
let catdata = localStorage.getItem("CategoryInfo");
let cat = JSON.parse(catdata);
let row ='';
let len = cat.Category.length;

for(let i=0;i<len;i++){
    if(i==0){
        row+="<li class='active'><a href='#'>"+cat.Category[i].name+"</a></li>";
    } else {
        row+="<li><a href='#'>"+cat.Category[i].name+"</a></li>";
    }
}
document.getElementById("navbar-nav").innerHTML = row;