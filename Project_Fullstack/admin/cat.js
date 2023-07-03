document.getElementById("savecat").addEventListener("click",()=>{
    
    let catname = document.catfrm.cat.value;
    let getData = localStorage.getItem("CategoryData");
    let dt = JSON.parse(getData);

    if(dt != null){
        dt.Category.push(catname);
        data = dt;
    } else {
        let data = {};
        data.Category = [catname];
    }
localStorage.setItem("CategoryData",JSON.stringify(data));
});