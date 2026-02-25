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
    .map((product) => {
      return `<div class = "product" data-id="${product.id}">${product.id}: ${product.name} - ${product.price} VNĐ <button class="delete-btn">Xóa</button></div>`;
    })
    .join("");

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

const deleteProduct = () => {
  productList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      const div = event.target.closest(".product");
      const productId = Number(div.dataset.id);
      if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
        const index = products.findIndex((item) => item.id === productId);
        if (index !== -1) {
          products.splice(index, 1);
        }
        div.remove();
        showProducts();
      }
    }
  });
};
deleteProduct();
