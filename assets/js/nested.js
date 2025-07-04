let email = prompt("enter some value");
let password=prompt("enter tou password")
if(email && password){
    if(email ==="a@gmail.com"){
        if(password == "abc"){
alert("login")
        }else{

            alert("wrong password")
        }
    }else{
       alert( "doesn't exist")
    }
}else{
    alert("invalid")
}