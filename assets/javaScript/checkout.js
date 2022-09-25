$(() => {
  let items = JSON.parse(localStorage.getItem("cart-item"));

  function createCartElement(key) {
    return `<div class = item>
    <img src=${items[key].preview}>
    <div class = detail>
    <h3>${items[key].name}</h3>
    <p style="font-size:16px">x${items[key].count}</p>
    <p style="font-size:16px">Amount: ${items[key].amount}</p>
    </div>
    </div`;
  }

  let totalAmount = 0;
  if (items[0] !== undefined) {
    for (var i = 0; i < items.length; ++i) {
      totalAmount += items[i].count * items[i].amount;
      $("#cart-item-container").append(createCartElement(i));
    }
    $("#item-count").html(items.length);
    $("#total-amount").html(totalAmount);
  }
  $("#place-order-btn").click(() => {
    let cart = [];
    localStorage.setItem("cart-count", "0");
    localStorage.setItem("cart-item", JSON.stringify(cart));
  });
});
