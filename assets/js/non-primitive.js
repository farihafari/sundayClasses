let std_data=["ali","mscs",35,"software developer",250000,"ali@gmail.com"];
// document.writeln(std_data[0]+"<br>"+std_data[1]+"<br>"+std_data[2]);
let dd =  document.getElementById("data");
let x="";
for(let i=0;i<std_data.length;i++){
    // document.writeln(std_data[i]+"<br>");
//    x+="<li class=''>"+std_data[i]+"</li>";
x+=`<li class="">

${std_data[i]}</li>`
}
dd.innerHTML=x;