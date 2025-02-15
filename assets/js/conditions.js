// let uname = prompt("enter your name");
// let age = prompt("enter your age");
// if(uname && age) {
// alert("welcome");
// document.write(`<h1>hello dear ${uname} your age is ${age}</h1>`);
// }else{
//     alert("input is required to fill");
// }
// for multiple conditions
let userPercentage = prompt("enter your percentage");
if(userPercentage==""){
alert("this input is require to fill")
}
else if(userPercentage>89 && userPercentage<100) {
    alert("you are in first division and you may apply in medical, engineering,arts , commerce or computer science");
}else if (userPercentage>79){
    alert("you are in second division and you may apply in  engineering,arts , commerce or computer science");

}else if(userPercentage>69){
    alert("you are in 3rd division and you may apply in arts , commerce or computer science");
}else if(userPercentage>59){
    alert("you are in forth division and you may apply in arts , commerce");
}else if(userPercentage>49){
    alert("you are in fifth division and you may apply in arts ");
}else{
    alert("you are fail");

}
nam
eng
urdu
maths
physics
comp
sum = eng + urdu + maths + physics + comp
percen = (sum/500)*100

