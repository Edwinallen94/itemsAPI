import {ProductsController} from "./itemsController.js";
const productsController = new ProductsController(0);


function addItemCard(item) {
  let itemHTML =
  `<div class="card h-100 product-card>
  <img
    src= "${item.imageUrl}"
    class="card-img-top"
    id="cimg"
  />
  <div class="card-body" id="cbod">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.description}</p>
  </div>
  <div class="card-footer">
    <small class="text-muted">${item.price}</small>
    <div id="list-items></div>
  </div>
</div>`;

  let itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;

}


function loadStorageSampleData(){

  if(!localStorage.getItem("products"))
  {
    const productItems =[{'name':'Boho Style',
    'imageUrl':'../pictures/boho-bedding-urban-bedding.jpg',
    'description':'Vibrant boho bedding','price':'Price'},{'name':'Canopy Style',
    'imageUrl':'https://www.decorsnob.com/wp-content/uploads/cutest-canopy-bed-I-hung-my-plants-on-it.jpg',
    'description':'Elegant canopy bedding','price':'Price'},{'name':'Farmhouse Style',
    'imageUrl':'https://i.pinimg.com/564x/8b/d1/82/8bd182012328e66c09f5c7c0db22816b--farmhouse-style-headboard-diy-farmhouse-bed-frame-diy.jpg',
    'description':'Wood framhouse bedding','price':'Price'}];

    localStorage.setItem("products", JSON.stringify(productItems));
  }
}



function loadCardsListFromProductController(){
  for(let i = 0; i < productsController.products.length; i++){
      let item = productsController.products[i];
      addItemCard(item);
      
  }

}

loadStorageSampleData();
productsController.loadItemsFromLocalStorage();
loadCardsListFromProductController();








