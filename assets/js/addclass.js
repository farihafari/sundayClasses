let h1 = document.getElementById("he");
function AddClass(){
    h1.classList.add("a");
}
function RemoveClass(){

    h1.classList.remove("a");
   
}
let date  = new Date();
h1.innerHTML = date;
// console.log(date)
function dateVal(){
    let dd = document.getElementById("dd").value;
    console.log(dd)
    console.log(date)
}