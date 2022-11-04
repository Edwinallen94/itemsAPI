const productsController = new ProductsController(0);

function addItemCard(item) {
  const itemHTML =
    `<div class="card h-100 product-card">\n` +
    `<img src="` +
    item.img +
    `" class="card-img-top"
    alt="Boho style bed"
  />\n` +
    `<div class="card-body">\n` +
    `<h5 class="card-title">` +
    item.name +
    `</h5>\n` +
    `<p class="card-text">` +
    item.description +
    `</p>\n``</div>\n` +
    `<br/>`;

  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}
console.log(addItemCard(item));
