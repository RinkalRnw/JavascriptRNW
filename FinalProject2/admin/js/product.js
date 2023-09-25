var allData = localStorage.getItem("category");
const data = JSON.parse(allData)
console.log(data);
let opt1 = '<option>--Select Cat--</option>';
for(let i=0;i<data.length;i++){
    opt1 += "<option value="+data[i].cat_id+">"+data[i].name+"</option>";
}
console.log(opt1);
document.getElementById("catid").innerHTML = opt1;

dispProduct()
document.getElementById("image").addEventListener("change",()=>{
    let pimage = document.getElementById("image");
    
    if(pimage.files && pimage.files[0]){
        let r = new FileReader();
        r.readAsDataURL(pimage.files[0]);
        r.addEventListener("load",()=>{
            localStorage.setItem("ProductImage",r.result);   
            document.productfrm.himage.value = r.result;       
        });
    }
});
let data1 = [];
    
function saveprod(){
    let cat_id = document.productfrm.catid.value;
    let name = document.productfrm.pname.value;
    let image = document.productfrm.himage.value
    let id=1;
    let result = {
        pid:id,
        name:name,
        cat_id:cat_id,
        image:image
    }
    data1.push(result);
    localStorage.setItem("ProductInfo",JSON.stringify(data1));
    dispProduct()
}
function dispProduct(){
    let data = JSON.parse(localStorage.getItem("ProductInfo"));
    let catData = JSON.parse(localStorage.getItem("category"));
    console.log(catData);
    let tr='';
    for(let i=0;i<data.length;i++){
        let catname = '';
        for(let j=0;j<catData.length;j++){
            if(catData[j].cat_id == data[i].cat_id ){
                catname = catData[j].name;
            }
        }
        tr += "<tr>"
        tr += "<td>"
        tr += data[i].pid
        tr += "</td>"
        tr += "<td>"
        tr += catname
        tr += "</td>"
        tr += "<td>"
        tr += data[i].name
        tr += "</td>"
        tr += "<td>"
        tr += "<img src='"+data[i].image+"' height='100px' width='100px'>"
        tr += "</td>"
        tr += "<td>"
        tr += "Delete"
        tr += "</td>"
        tr += "</tr>"
    }
    document.getElementById("allProdData").innerHTML = tr;
}