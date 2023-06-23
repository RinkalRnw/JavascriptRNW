display();
//Insert update Records
document.getElementById("btn1").addEventListener("click",()=>{
    let name = document.frm.uname.value;
    let age = document.frm.age.value;
    let sal = document.frm.salary.value;
    let cr = document.frm.course.value;
    let uid = document.frm.uid.value;
    let data = {};
    let info = {
        name:name,
        age:age,
        salary:sal,
        course:cr
    };

    let studData = JSON.parse(localStorage.getItem("StudentDetail"));
    if(studData != null){
        if(uid != ''){
            //update
            for(let i=0;i<studData.studentInfo.length;i++){
                if(i == uid){
                    studData.studentInfo[i].name = name;
                    studData.studentInfo[i].age = age;
                    studData.studentInfo[i].salary = sal;
                    studData.studentInfo[i].course = cr;
                    document.frm.uid.value = '';
                   
                }
            }            
        } else {
            //push
            studData.studentInfo.push(info);            
        }
        localStorage.setItem("StudentDetail",JSON.stringify(studData));
       

    } else {
        data.studentInfo = [info];
        localStorage.setItem("StudentDetail",JSON.stringify(data));
    }
    document.frm.reset();
    display();
});


//Display Data
function display(){
    let dt ='';
    
    let info = JSON.parse(localStorage.getItem("StudentDetail"));
    if(info != null){
        dt += "<tr>";
        dt += "<th>Name</th>";
        dt += "<th>Age</th>";
        dt += "<th>Salary</th>";
        dt += "<th>Course</th>";
        dt += "<th>Action</th>";
        dt += "</tr>";
        for(let i=0;i<info.studentInfo.length;i++){
            dt += "<tr>";
            dt += "<td>"+info.studentInfo[i].name+"</td>";
            dt += "<td>"+info.studentInfo[i].age+"</td>";
            dt += "<td>"+info.studentInfo[i].salary+"</td>";
            dt += "<td>"+info.studentInfo[i].course+"</td>";
            dt += "<td><input type='button' name='btnedit' id='btnedit' value='Edit' onclick='editData("+i+")'>";
            dt += "  <input type='button' name='btndel' id='btndel' value='Delete' onclick='delData("+i+")'></td>";
        
            dt += "</tr>";

        }
    }

    document.getElementById("dispData").innerHTML = dt;

}


//Delete Records
function delData(id){
    let info = JSON.parse(localStorage.getItem("StudentDetail"));
    info.studentInfo.splice(id,1);
    localStorage.setItem("StudentDetail",JSON.stringify(info));
    display();
}

//Edit Data
function editData(id){
    let info = JSON.parse(localStorage.getItem("StudentDetail"));
    if(info != null){
        for(let i=0;i<info.studentInfo.length;i++){
            if(i == id){
                document.frm.uname.value = info.studentInfo[i].name;
                document.frm.age.value = info.studentInfo[i].age;
                document.frm.salary.value = info.studentInfo[i].salary;
                document.frm.course.value = info.studentInfo[i].course;
                document.frm.uid.value = id;
            }
        }
    }
}   
