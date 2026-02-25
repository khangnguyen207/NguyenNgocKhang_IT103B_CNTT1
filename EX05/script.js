const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

let productList = document.getElementById("product-list");
const showProducts = () => {
  productList.innerHTML = ""; //tạo  mảng rỗng

  let newProducts = products
    .map((product, index) => {
      return `<li class = "product">${product.id}: ${product.name} - ${product.price} VNĐ <button class="delete-btn" onclick = deleteProduct(${index})>Xóa</button> <button class="edit-price-btn" onclick = handleEdit(${index})>Sửa giá</button></li>`;
    })
    .join("");

  let ul = document.getElementById("product-list");
  ul.style.listStyle = "none";

  productList.innerHTML = newProducts;
};
showProducts();

let form = document.getElementById("product-form");

const addNewProduct = () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); //ngăn hành vi mặc định

    //lấy dữ liệu
    const formData = new FormData(form);
    const name = formData.get("input-name").trim();
    const price = Number(formData.get("input-price").trim());

    if (!name || !price) {
      alert("Vui lòng nhập Tên Sản Phẩm hoặc Giá:");
      return;
    } else {
      const newProducts = {
        id: products.length + 1,
        name: name,
        price: price,
      };
      products.push(newProducts);
      showProducts(); //cập nhật lại danh sách hiểm thị

      alert(`Dữ liệu đã được xử lý ${name}`);
      console.log(`Dữ liệu được xử lý: ${name} - ${price}`);
    }
  });
};
addNewProduct();

const deleteProduct = (index) => {
  if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
    products.splice(index, 1);
    showProducts();
  }
};

const handleEdit = (index) => {
  let newPrice = +prompt("Nhập Giá mới");
  products[index].price = newPrice;
  showProducts();
};

const searchInput = document.getElementById("search-input");
const handleSearch = () => {
  searchInput.addEventListener("input", () => {
    let valueSearch = searchInput.value.toLocaleLowerCase().trim();
    let productItemAll = document.querySelectorAll(".product");

    productItemAll.forEach((product) => {
      if (product.textContent.toLocaleLowerCase().includes(valueSearch)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
}
searchInput.addEventListener("input", handleSearch);