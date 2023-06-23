dispData();
document.getElementById("btn1").addEventListener("click",function(){

    let name = document.myfrm.uname.value;
    let age = document.myfrm.age.value;
    let course = document.myfrm.course.value;

    
    let userinfo = {
        name:name,
        age:age,
        course:course
    };
     let userdata ={};

    let getData = JSON.parse(localStorage.getItem("UserDetail"));
    if(getData != null){
        console.log(getData);
        getData.userDetail.push(userinfo);
        localStorage.setItem("UserDetail",JSON.stringify(getData));
    } else {
        userdata.userDetail = [userinfo];
        localStorage.setItem("UserDetail",JSON.stringify(userdata));
    }    
    dispData();

});

function dispData(){
    let getData = JSON.parse(localStorage.getItem("UserDetail"));
    let a = getData.userDetail;
document.getElementById("dispData").innerHTML = "<tr><th>Name</th><th>Age</th><th>Course</th><th>Action</th></tr>";

    
    for(let i=0;i<getData.userDetail.length;i++){
        let a  = "<tr>";
        a+="<td>"+getData.userDetail[i].name+"</td>";
        a+="<td>"+getData.userDetail[i].age+"</td>";
        a +="<td>"+getData.userDetail[i].course+"</td>";
        a += "<td><input type='button' name='btnEdit' id='btnEdit' value='Edit'><input type='button' name='btnDel' id='btnDel' onclick='delData()' value='Delete'></td></tr>";
        document.getElementById("dispData").innerHTML += a;
        
    }

    
}