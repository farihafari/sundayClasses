let mobicom = [
    {
        name:"Samsung",
        price:"Rs. 439,999",
        model:"Galaxy S25 Ultra",
        description:"Samsung has announced the future's Galaxy S25 series with the addition of the Ultra variant. In recent days, leaks and suggestions about the new Samsung Galaxy S25 Ultra have been circulating on the internet.",
        image:"https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS25Ultra-b.jpg",
    },
    {
        name:"Vivo",
        price:"Rs. 139,999",
        model:"V50",
        description:"Samsung has announced the future's Galaxy S25 series with the addition of the Ultra variant. In recent days, leaks and suggestions about the new Samsung Galaxy S25 Ultra have been circulating on the internet.",
        image:"https://www.whatmobile.com.pk/admin/images/Vivo/VivoV50-s.jpg",
    },
    {
        name:"Samsung",
        price:"Rs. 439,999",
        model:"Galaxy S25 Ultra",
        description:"Samsung has announced the future's Galaxy S25 series with the addition of the Ultra variant. In recent days, leaks and suggestions about the new Samsung Galaxy S25 Ultra have been circulating on the internet.",
        image:"https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS25Ultra-b.jpg",
    },
    {
        name:"Samsung",
        price:"Rs. 439,999",
        model:"Galaxy S25 Ultra",
        description:"Samsung has announced the future's Galaxy S25 series with the addition of the Ultra variant. In recent days, leaks and suggestions about the new Samsung Galaxy S25 Ultra have been circulating on the internet.",
        image:"https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS25Ultra-b.jpg",
    },
    {
        name:"Samsung",
        price:"Rs. 439,999",
        model:"Galaxy S25 Ultra",
        description:"Samsung has announced the future's Galaxy S25 series with the addition of the Ultra variant. In recent days, leaks and suggestions about the new Samsung Galaxy S25 Ultra have been circulating on the internet.",
        image:"https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS25Ultra-b.jpg",
    },
    {
        name:"Samsung",
        price:"Rs. 439,999",
        model:"Galaxy S25 Ultra",
        description:"Samsung has announced the future's Galaxy S25 series with the addition of the Ultra variant. In recent days, leaks and suggestions about the new Samsung Galaxy S25 Ultra have been circulating on the internet.",
        image:"https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS25Ultra-b.jpg",
    },
    {
        name:"Vivo",
        price:"Rs. 139,999",
        model:"V50",
        description:"Samsung has announced the future's Galaxy S25 series with the addition of the Ultra variant. In recent days, leaks and suggestions about the new Samsung Galaxy S25 Ultra have been circulating on the internet.",
        image:"https://www.whatmobile.com.pk/admin/images/Vivo/VivoV50-s.jpg",
    }
];
let datadiv = document.querySelector("#data");
let x ="";
for(let keys in mobicom){
    x+=`
     <tr>
                <td>${mobicom[keys].name}</td>
                <td>${mobicom[keys].price}</td>
                <td>${mobicom[keys].model}</td>
                <td>${mobicom[keys].description}</td>
                <td><img src="${mobicom[keys].image}" alt=""></td>
            </tr>
    `
}
datadiv.innerHTML=x;