function dispalyDetails(){
    //read input values using getElementsByName method 
    fname = document.getElementsByName("fname")[0].value;
    mname = document.getElementsByName("mname")[0].value;
    lname = document.getElementsByName("Iname")[0].value;
    //read selected radio value
   gender = document.querySelector('input[name="gender"]:checked').value;
var checkedValue="";
//read checkbox group value
var checkboxes = document.querySelectorAll("input[type=checkbox].checked");
for (var i = 0; i < checkboxes.length; i++) { 
    checkedValue + checkboxes[i].value;
}
checkedValue +=",";
cnic = document.getElementsByName("cnic")[0].value;
cellno = document.getElementsByName("cellno")[0].value;
email = document.getElementsByName("email")[0].value; 
session = document.getElementById("session").value;
//create adynamic table for dispalying the seleted value 
var data="<table class='profile' style='width: 70%'>";
data += "<tr><td>First Name: </td><td>"+fname+"</td></tr>";
data+=" <tr><td>Middle Name: </td><td>"+mname+"</td></tr>";
data+=" <tr><td>Last Name: </td><td>"+Iname+"</td><t/r>";

data +="<tr><td>Gender: </td><td>"+gender+"</td></tr>";
data +=" <tr> <td>Course Selected: </td><td>"+checkedValue+"</td></tr>";

data+=" <tr><td>CNIC: </td><td>"+cnic+"</td></tr>";
data+=" <tr><td>Cell No: </td><td>"+celino+"</td></tr>";

data += "<tr><td>Email: </td><td>"+email+"</td></tr>";
data += "<tr><td>Session: </td><td>"+session+"</td></tr>";

data += "</table>";

//dispay dynamic table to the screen 
document.getElementById('displayResult').innerHTML;
        }