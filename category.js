//Insert category
var catdata = [];
dispCategory()
function savecat(){
    var name = document.catfrm.catname.value;
    var id = document.catfrm.catid.value;

    var allData = localStorage.getItem("category");
    const data = JSON.parse(allData)
    let len =1;
    if(data != null){
        len = data.length+1
    } 
    let categoryObj = {
        cat_id: len,
        name: name,
    }
    if(id != ''){
        //update
        
        for(let i=0;i<data.length;i++){
            if(i==id){
                data[i].name = name;
                localStorage.setItem("category",JSON.stringify(data))
            }
        }

    } else {
        //insert
        if(name != ''){
            catdata.push(categoryObj)
            localStorage.setItem("category",JSON.stringify(catdata))
        }
    }


    document.catfrm.catname.value = '';
    document.catfrm.catid.value = '';
    dispCategory()
}
//Display Category
function dispCategory(){
    var allData = localStorage.getItem("category");
    const data = JSON.parse(allData)
    
    let tr = "";
    if(data != null){
        for(let i=0;i<data.length;i++){
            tr += "<tr>"
            tr += "<td>"+data[i].cat_id+"</td>"
            // tr += "<td>"
            // tr += i+1
            // tr += "</td>"
            tr += "<td>"
            tr += data[i].name
            tr += "</td>"
            tr += "<td><button onclick='editCat("+i+")'>Edit</button>  <button onclick='deleteCat("+i+")'>Delete</button></td>"
            tr += "</tr>"
        }
    }
    document.getElementById("allCatData").innerHTML = tr;
}
//Delete 
function deleteCat(id){
    var allData = localStorage.getItem("category");
    const data = JSON.parse(allData)
    data.splice(id,1)
    for(let i=0;i<data.length;i++){
        data[i].cat_id = i+1;
    }
    localStorage.setItem("category",JSON.stringify(data))
    dispCategory();
}
//Edit 
function editCat(id){
    var allData = localStorage.getItem("category");
    const data = JSON.parse(allData)
    for(let i=0;i<data.length;i++){
        if(i==id){
            document.catfrm.catname.value = data[i].name;
            document.catfrm.catid.value = id;
            
        }
    }

}
//Update