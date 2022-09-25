let id = Number(new URLSearchParams(window.location.search).get("product_id"));
if (cartCount === undefined) {
  cartCount = 0;
}
let cart = document.getElementById("cart-count");
cart.innerText = cartCount;
$(() => {
  $.get(
    `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`,
    function (productList) {
      $("#product-image").append(
        `<img class="product-img"src = ${productList.preview}>`
      );
      $("#product-detail").append(`<div id = product-description>
        <h1>${productList.name}</h1>
        <h4>${productList.brand}</h4>
        <h3>Price: Rs <span>${productList.price}</span></h4>
        <div id = description>
        <h3>Description</h3>
        <p>${productList.description}</p>
        </div>
        <div id = product-preview>
        <h3>Product preview</h3>
        </div>
        <div id = preview-image></div>
        </div>
        <div id = btn>
        <button id = add-to-cart>Add to Cart</button>
        </div>`);
      let temp = 0;
      for (let i of productList.photos) {
        $("#preview-image").append(
          `<img src = ${i} id = img${temp++} class = prev-img></img>`
        );
      }
      $(".prev-img:first").addClass("active");
      for (let i = 0; i < productList.photos.length; ++i) {
        $(".prev-img")
          .eq(i)
          .click(function () {
            $(".active:first").removeClass("active");
            $(this).addClass("active");
            $("#product-image img").attr("src", productList.photos[i]);
          });
      }
      let tempCart = {
        id: String(id),
        name: `${productList.name}`,
        count: 1,
        amount: `${productList.price}`,
        preview: `${productList.preview}`,
      };
      let tempCount = localStorage.getItem("cart-count");
      $("#add-to-cart").click(function () {
        var flag = 1;
        setCartCount.innerHTML = ++tempCount;
        localStorage.setItem("cart-count", `${tempCount}`);
        cartItem = JSON.parse(localStorage.getItem("cart-item"));
        if (cartItem[0] === undefined) {
          cartItem.push(tempCart);
        } else {
          for (var i = 0; i < cartItem.length; ++i) {
            if (cartItem[i].id === String(id)) {
              cartItem[i].count++;
              flag = 1;
              break;
            } else {
              flag = 0;
            }
          }
          if (flag === 0) {
            cartItem.push(tempCart);
          }
        }
        localStorage.setItem("cart-item", JSON.stringify(cartItem));
      });
    }
  );
});
