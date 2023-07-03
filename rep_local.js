display();
//Insert update Records
document.getElementById("btn1").addEventListener("click",()=>{
    let name = document.frm.uname.value;
    let age = document.frm.age.value;
    let sal = document.frm.salary.value;
    let cr = document.frm.course.value;
    let userid = document.frm.uid.value;
    let gender = document.frm.g1.value;
    
    if(name != '' && age != '' && sal!= '' && cr!='' && userid !='' && gender!=''){
            // let qual = document.frm.q1;
            let qual = document.getElementsByName("q1");
            let q1 = [];
            for(let j=0;j<qual.length;j++){
                if(qual[j].checked == true){
                    q1.push(qual[j].value);
                }
            }
            let data = {};
            let info = {
                name:name,
                age:age,
                salary:sal,
                course:cr,
                gender:gender,
                qualification:q1
            };
            let studData = JSON.parse(localStorage.getItem("StudentDetail"));
            if(studData != null){
                if(userid != ''){
                    //update
                    for(let i=0;i<studData.studentInfo.length;i++){
                        if(userid == i){
                            studData.studentInfo[i].name = name;
                            studData.studentInfo[i].age = age;
                            studData.studentInfo[i].salary = sal;
                            studData.studentInfo[i].course = cr;
                            studData.studentInfo[i].gender = gender;
                            studData.studentInfo[i].qualification = q1;
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
            document.frm.uid.value = '';
            display();
    } else {
        return false;
    }
   
});


//Display Data
function display(){
    let dt ='';
    
    let info = JSON.parse(localStorage.getItem("StudentDetail"));
    if(info != null && info.studentInfo.length > 0){
        dt += "<tr>";
        dt += "<th>Name</th>";
        dt += "<th>Age</th>";
        dt += "<th>Salary</th>";
        dt += "<th>Course</th>";
        dt += "<th>Gender</th>";
        dt += "<th>Qualification</th>";
        dt += "<th>Action</th>";
        dt += "</tr>";
        for(let i=0;i<info.studentInfo.length;i++){
            dt += "<tr>";
            dt += "<td>"+info.studentInfo[i].name+"</td>";
            dt += "<td>"+info.studentInfo[i].age+"</td>";
            dt += "<td>"+info.studentInfo[i].salary+"</td>";
            dt += "<td>"+info.studentInfo[i].course+"</td>";
            dt += "<td>"+info.studentInfo[i].gender+"</td>";
            dt += "<td>"+info.studentInfo[i].qualification+"</td>";
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

//Edit Records
function editData(id){
    let info = JSON.parse(localStorage.getItem("StudentDetail"));
    if(info != null){
        for(let i=0;i<info.studentInfo.length;i++){
            if(id == i){
                document.frm.uname.value = info.studentInfo[i].name;
                document.frm.age.value= info.studentInfo[i].age;
                document.frm.salary.value= info.studentInfo[i].salary;
                document.frm.course.value= info.studentInfo[i].course;
                document.frm.g1.value= info.studentInfo[i].gender;

                let qual = document.getElementsByName("q1");
                let q_data = info.studentInfo[i].qualification;
                for(let j=0;j<qual.length;j++){
                    if(q_data.includes(qual[j].value)){
                        qual[j].checked = true;
                    }
                }
                document.frm.uid.value = i;
            }
        }
    }
}

