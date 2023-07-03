display();
//Insert category
document.getElementById("savecat").addEventListener("click",function(){
    //get value from textbox
    let catname = document.frm.catname.value;
    let cid  = document.frm.cid.value;
    //create blank object [localstorage format]
    let data = {};
console.log(cid);
    //If data is exist in local storage then push data
    let getData = JSON.parse(localStorage.getItem("CategoryInfo"));
    if(getData != null){
        if(cid != ''){
            for(let i=0;i<getData.Category.length;i++){
                if(cid == getData.Category[i].id){
                    getData.Category[i].name = catname;
                }
            }
        } else {
            let len = getData.Category.length;
            let catdata = {
                id:len+1,
                name:catname
            }
            getData.Category.push(catdata);
        }
        
        localStorage.setItem("CategoryInfo",JSON.stringify(getData));
        //push
    } else {
        //new record
        //Get actual data
        let catdata = {
            id:1,
            name:catname
        }
        //To store object data into array
        data.Category = [catdata];
        //Final inserted into localstorage
        localStorage.setItem("CategoryInfo",JSON.stringify(data));
    } 
    display();   
});

function display(){
    let tr = '';
    tr += "<tr>";
    tr +="<th>Id</th>";
    tr +="<th>Name</th>";
    tr +="<th>Action</th>";
    tr+="</tr>";

    let data = JSON.parse(localStorage.getItem("CategoryInfo"));
    if(data != null){

    
        for(let i=0;i<data.Category.length;i++){
            tr += "<tr>";
            tr += "<td>"+data.Category[i].id+"</td>";
            tr += "<td>"+data.Category[i].name+"</td>";
            tr += "<td> <button type='button' name='updData' id='updData' onclick='updData("+data.Category[i].id+")'>Edit</button> <button type='button' name='delData' id='delData' onclick='delData("+data.Category[i].id+")'>Delete</button></td>";

            tr += "</tr>";
            // data.Category[i].id
            // data.Category[i].name
        }

        document.getElementById("catAllData").innerHTML = tr;
    }
}

function delData(id){
    let data = JSON.parse(localStorage.getItem("CategoryInfo"));
    if(data != null && data.Category.length > 0){
        let id1 = id-1;
        data.Category.splice(id1,1);
        let j=1;
        for(let i=0;i<data.Category.length;i++){
            data.Category[i].id = j;
            j++;
        }
        localStorage.setItem("CategoryInfo",JSON.stringify(data));
        display();
    }
}


function updData(id){
    let data = JSON.parse(localStorage.getItem("CategoryInfo"));
    if(data != null){
        for(let i=0;i<data.Category.length;i++){
            if(id == data.Category[i].id){
                document.frm.catname.value = data.Category[i].name;
                document.frm.cid.value= data.Category[i].id;
            }
        }
    }
}
