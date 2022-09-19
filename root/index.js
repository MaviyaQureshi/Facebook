var username = document.getElementsByClassName("name").value;
var password = document.getElementsByClassName("word").value; 
function validate(){
    if(username == " "){
        alert("Please enter an Email!");
    }else if(password == " "){
        alert("Please enter a Password!");
    }else if(username == "" && password == " "){
        alert("Please enter the details!");
    }
};