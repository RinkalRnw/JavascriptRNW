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
            document.prodfrm.himage.value = r.result;       
        });
    }
});
//Insert /add product data to localstorage
document.getElementById("btn2").addEventListener("click",function(){
    
    let catid = document.prodfrm.catid.value;
    let hid = document.prodfrm.hid.value;
    let pname = document.prodfrm.pname.value;
    let price = document.prodfrm.price.value;
    let himage = document.prodfrm.himage.value;
    let pimage = localStorage.getItem("ProductImage");



    let pdata = {};
    let data = {
        catid:catid,
        pid:1,
        name:pname,
        price:price,
        image:pimage
    };
     let prodata=JSON.parse(localStorage.getItem("Productdata"));
     if(prodata != null){
       //update
            if(hid != ''){
                for(let i=0;i<prodata.productInfo.length;i++){
                    if(prodata.productInfo[i].pid == hid){
                        prodata.productInfo[i].name=pname;
                        prodata.productInfo[i].price=price;
                        prodata.productInfo[i].image=himage;
                    }
                    localStorage.setItem("Productdata",JSON.stringify(prodata)); 
                    document.prodfrm.hid.value = '';
                    document.prodfrm.himage.value = '';
                
                }
                
            } else {
                //push
                let len = prodata.productInfo.length;
                data = {
                    catid:catid,
                    pid:len + 1,
                    name:pname,
                    price:price,
                    image:pimage
                };
                prodata.productInfo.push(data);
                localStorage.setItem("Productdata",JSON.stringify(prodata)); 
            }    
     }else{
        pdata.productInfo = [data];
        localStorage.setItem("Productdata",JSON.stringify(pdata));

    }

     document.prodfrm.reset();
    disp();  
}); 

function disp(){
    let tr="";
    tr+="<tr>";
    tr+="<th> ID </th>"
    tr+="<th> Category </th>"
    tr+="<th> Product Name </th>"
    tr+="<th> Price </th>"
    tr+="<th> Image </th>"
    tr+="<th> Action </th>"
    tr+="</tr>"
  let p= JSON.parse(localStorage.getItem("Productdata"));
  if(p != null){
    let catData = JSON.parse(localStorage.getItem("CategoryInfo"));
    
  
    for(let i=0;i<p.productInfo.length; i++){
        
        tr+="<tr>"
        tr+="<td>"+p.productInfo[i].pid+"</td>"
        for(let j=0;j<catData.Category.length;j++){
            if(catData.Category[j].id == p.productInfo[i].catid){
                tr+="<td>"+catData.Category[j].name+"</td>"
            }
        }
        tr+="<td>"+p.productInfo[i].name+"</td>"
        tr+="<td>"+p.productInfo[i].price+"</td>"
        tr+="<td><img src='"+p.productInfo[i].image+"' height='60px' width='60px'></td>"
        tr+="<td><input type='button' id='deldata' name='deldata' value= 'delete' onclick='deldata("+p.productInfo[i].pid +")'><input type='button' id='editdata' name='editdata' value= 'edit' onclick='editdata("+p.productInfo[i].pid +")'></td>"
        tr+="</tr>"
    }
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
// edit data 
function editdata (id){
    let edit =localStorage.getItem("Productdata");
    let data =JSON.parse(edit);

    for (let i=0;i<data.productInfo.length;i++){
       if(id == data.productInfo[i].pid){
        document.prodfrm.pname.value=data.productInfo[i].name;
        document.prodfrm.price.value=data.productInfo[i].price;
        document.prodfrm.hid.value=data.productInfo[i].pid;
        document.prodfrm.himage.value=data.productInfo[i].image;
       
       }
    }
}