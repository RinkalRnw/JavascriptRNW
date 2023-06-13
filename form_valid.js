
        function validateForm(){
            // let name = document.forms['userform']['uname'].value;
            let name = document.userform.uname.value;
            let no = document.userform.no.value;
            let pwd = document.userform.pwd.value;
            let cpwd = document.userform.cpwd.value;
            let email = document.userform.email.value;
            if(name == ''){
                document.userform.uname.focus();
                document.getElementById('errName').innerHTML = "Please enter username";
                document.getElementById('errName').style.color = 'red';
                return false;
            } 
            if(name.length<2){
                document.userform.uname.focus();
                document.getElementById('errName').innerHTML = "Name must be >2 characters";
                document.getElementById('errName').style.color = 'red';
                return false;
            }
            if(no == ''){
                document.userform.no.focus();
                document.getElementById('errNo').innerHTML = "Please enter number";
                document.getElementById('errNo').style.color = 'red';
                return false;
            }
            if(no<1 || no>100){
                document.userform.no.focus();
                document.getElementById('errNo').innerHTML = "Number must be between 1-100";
                document.getElementById('errNo').style.color = 'red';
                return false;
            }
            if(pwd == ''){
                document.userform.pwd.focus();
                document.getElementById('errPwd').innerHTML = "Please enter Password";
                document.getElementById('errPwd').style.color = 'red';
                return false;
            }
            if(cpwd == ''){
                document.userform.cpwd.focus();
                document.getElementById('errCPwd').innerHTML = "Please enter Confirm Password";
                document.getElementById('errCPwd').style.color = 'red';
                return false;
            }
            
            if(pwd != cpwd){
                document.userform.cpwd.focus();
                document.getElementById('errCPwd').innerHTML = "Please enter same password";
                document.getElementById('errCPwd').style.color = 'red';
                return false;
            }
            let capital = pwd.charAt(0);
            if(capital>='a' && capital<='z'){
                document.userform.pwd.focus();
                document.getElementById('errPwd').innerHTML = "First character must be capital";
                document.getElementById('errPwd').style.color = 'red';
                return false;
            }
            
            var pattern = "/^[A-Za-z0-9]@+[a-z].+[a-z]$/";
            var ans = pattern.test(email);
            // var a = new RegExp();
            alert(ans);
            if(ans == false){
                document.userform.email.focus();
                document.getElementById('errEmail').innerHTML = "Plz enter valid email";
                document.getElementById('errEmail').style.color = 'red';
                return false;
            }

        }
