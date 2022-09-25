$(() => {
  $.get(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
    (productList) => {
      function createElement(key) {
        return `<div id = ${productList[key].id} class = card>
      <a href = product.html?product_id=${productList[key].id}>
      <div class = img>
      <img src = ${productList[key].preview}>
      </div>
      <div class = details>
      <h3>${productList[key].name}</h3>
      <h4>${productList[key].brand}</h4>
      <h5>Rs ${productList[key].price}</h5>
      </div>
      </a>
      </div`;
      }
      for (let i = 0; i < productList.length; ++i) {
        if (productList[i].isAccessory === false)
          $("#clothingCard").append(createElement(i));
        else $("#accessoriesCard").append(createElement(i));
      }
    }
  );

  //slick slider Start-------------------//

  let btns = $(".button");
  $(".button:first").addClass("active-btn");
  for (let i = 0; i < btns.length; ++i) {
    $(".button")
      .eq(i)
      .click(function () {
        $(".active-btn:first").toggleClass("active-btn");
        $(".active-img:first").toggleClass("active-img");
        $(".button").eq(i).toggleClass("active-btn");
        $(".image").eq(i).toggleClass("active-img");
        loop = i;
      });
  }
  let loop = 0;
  setInterval(() => {
    if (loop === btns.length) {
      loop = 0;
    }
    $(".active-btn:first").toggleClass("active-btn");
    $(".active-img:first").toggleClass("active-img");
    $(".button").eq(loop).toggleClass("active-btn");
    $(".image").eq(loop).toggleClass("active-img");
    ++loop;
  }, 3000);

  //slick slider End-------------------//
});
