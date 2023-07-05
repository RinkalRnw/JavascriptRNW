disp();
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
//Onchange image store in localstorage
document.getElementById("pimg").addEventListener("change",()=>{
    let pimage = document.getElementById("pimg");
    
    if(pimage.files && pimage.files[0]){
        let r = new FileReader();
        r.readAsDataURL(pimage.files[0]);
        r.addEventListener("load",()=>{
            localStorage.setItem("ProductImage",r.result);           
        });
    }
});
//Insert /add product data to localstorage
document.getElementById("btn2").addEventListener("click",function(){
    
    let catid = document.prodfrm.catid.value;
    let pname = document.prodfrm.pname.value;
    let price = document.prodfrm.price.value;
    let pimage = localStorage.getItem("ProductImage");

    let pdata = {};
    let data = {
        catid:catid,
        pid:1,
        name:pname,
        price:price,
        image:pimage
    };
    pdata.productInfo = [data];
    localStorage.setItem("Productdata",JSON.stringify(pdata)); 
    disp();  
}); 

function disp(){
    let tr="";
    tr+="<tr>";
    tr+="<th> ID </th>"
    tr+="<th> catid </th>"
    tr+="<th> Name </th>"
    tr+="<th> Price </th>"
    tr+="<th> Image </th>"
    tr+="<th> Action </th>"
    tr+="</tr>"
  let p= JSON.parse(localStorage.getItem("Productdata"));
  for(let i=0;i<p.productInfo.length; i++){
    tr+="<tr>"
    tr+="<td>"+p.productInfo[i].pid+"</td>"
    tr+="<td>"+p.productInfo[i].catid+"</td>"
    tr+="<td>"+p.productInfo[i].name+"</td>"
    tr+="<td>"+p.productInfo[i].price+"</td>"
    tr+="<td><img src='"+p.productInfo[i].image+"'></td>"
    tr+="<td><input type='button' id='deldata' name='deldata' value= 'delete' onclick='deldata("+p.productInfo[i].pid +")'></td>"
    tr+="</tr>"
  }
  document.getElementById("tabid").innerHTML=tr;
   

}

function deldata(id){
  let p= JSON.parse(localStorage.getItem("Productdata"));
    if(p!= null){
        let id1 =id-1;
        p.productInfo.splice(id1,1);
        localStorage.setItem("Productdata",JSON.stringify(p));
        disp();
    }
}