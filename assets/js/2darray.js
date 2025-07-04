let std_details = [
    ["ali","mscs",35,"software developer",250000,"ali@gmail.com"],
    ["aliyan","mscs",35,"software developer",250000,"aliyan@gmail.com"],
    ["alisha","mscs",35,"software developer",250000,"alisha@gmail.com"],
    ["alisha","mscs",35,"software developer",250000,"alisha@gmail.com"],
    ["alisha","mscs",35,"software developer",250000,"alisha@gmail.com"],
    ["alisha","mscs",35,"software developer",250000,"alisha@gmail.com"],
    ["alisha","mscs",35,"software developer",250000,"alisha@gmail.com"],
    ["alisha","mscs",35,"software developer",250000,"alisha@gmail.com"]
];
// document.writeln(std_details[2][4])
let tableData = document.getElementById("data");
let x = "";
for(let i =0;i<std_details.length;i++){
    
   x+=`<tr>`
    for(let j=0;j<std_details[i].length;j++){
        // document.writeln(std_details[i][j]+"&nbsp;&nbsp;&gt;")
        x+=`<td>${std_details[i][j]}</td>`;
    }
   `</tr>`
}
tableData.innerHTML = x;