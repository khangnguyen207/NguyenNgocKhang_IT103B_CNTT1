const products = [
    {id: 1, name: "Bánh Chưng", price: 150000},
    {id: 2, name: "Giò Lụa", price: 180000},
    {id: 3, name: "Cành Đào", price: 500000},
    {id: 4, name: "Mứt Tết", price: 120000},
    {id: 5, name: "Bao Lì Xì", price: 25000},
    {id: 6, name: "Dưa Hấu Tết", price: 80000},
];

let productList = document.getElementById('product-list');

//cách dùng for()
// for(let i = 0; i < product.length; i++) {
//     let divProduct = document.createElement("div");

//     divProduct.innerText = `${products[i].id},${products[i].name}, ${products[i].price} VNĐ`;

//     productList += divProduct; 
// }

//Cách dùng forEach()
// products.forEach((product) => {
//     let divProduct = document.createElement("div");

//     divProduct.innerHTML = `<div class = "product">${product.id}: ${product.name} - ${product.price} VNĐ </div>`;

//     productList.append(divProduct); 
// });

//Cách dùng +=
// productList.innerHTML = ""; //tạo  mảng rỗng
// products.forEach((product) => {
//     productList.innerHTML += `<div class = "product">${product.id}: ${product.name} - ${product.price} VNĐ </div>`;
// });

//Cách dùng map()
productList.innerHTML = ""; //tạo  mảng rỗng

let newProducts = products.map((product) => {
    return `<div class = "product">${product.id}: ${product.name} - ${product.price} VNĐ </div>`
}).join("");

productList.innerHTML = newProducts;