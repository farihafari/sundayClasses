let obj ={
    v1: 

    {
    name : "abc car",
    price : 10000,
    color : "red",
    model : "abc model",
   
},
v2:
{
    name : "xyx car",
    price : 100000,
    color : "black",
    model : "xyz model",
},
v3:
{
    name : "xyx car",
    price : 100000,
    color : "black",
    model : "xyz model",
}
}
let obj1={
    name : "xyx car",
    price : 100000,
    color : "black",
    model : "xyz model",
}
console.log(obj1)
let para = document.querySelector("#demo");
// para.innerHTML = obj.name+" "+obj.price+" "+obj.color+" "+obj.model+" "+ obj.drive();
let x = "";
for(let key in obj){
    x+=`
    ${key} : ${obj[key].name} <br>
      ${key} : ${obj[key].price} <br>
        ${key} : ${obj[key].model} <br>

    `
   
}
para.innerHTML+=x;