//Get Category data into dropdown
let catdata = JSON.parse(localStorage.getItem("CategoryInfo"));
let row = '';
if(catdata != null && catdata.Category.length > 0){

    for(let i=0;i<catdata.Category.length;i++){
        row += "<option value="+catdata.Category[i].id+">"+catdata.Category[i].name;
        row += "</option>";
    }
    document.getElementById("catid").innerHTML = row;
}

//Insert /add product data to localstorage
document.getElementById("btn2").addEventListener("click",function(){
    let pimage = document.getElementsByName("pimg");
    
    if(pimage.files && pimage.files[0]){
        let r = new FileReader();
        r.readAsDataURL(pimage.files[0]);
        r.addEventListener("load",()=>{
            console.log("image is  "+r.result);
            localStorage.setItem("ProductImage",r.result);
            document.getElementById("prod_img").src = r.result;

        });

       
    } else {
        console.log('jk');
    }
}); 