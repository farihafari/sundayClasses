// function sum(a,b){
//     return a+b; 
// }
// console.log(sum(4,6));
// document.writeln(sum(7,7))
function ImgPreview(sImg){
    let BImage = document.getElementById("bImg");
    console.log(sImg.src)
    BImage.src = sImg.src;
}