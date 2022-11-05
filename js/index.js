import {ProductsController} from "./itemsController.js";
const productsController = new ProductsController(0);


function addItemCard(item) {
  const itemHTML =
  `<div class="card h-100 product-card">
  <img
    src= ${item.imageUrl}
    class="card-img-top"
  />
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.description}</p>
  </div>
  <div class="card-footer">
    <small class="text-muted">${item.price}</small>
    <div id="list-items></div>
  </div>
</div>`;

  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}


function loadStorageSampleData(){

  if(!localStorage.getItem("products"))
  {
    const productItems =[{'name':'Boho Style',
    'imgURL':'/pictures/boho-bedding-urban-bedding.jpg',
    'description':'Vibrant boho bedding'},{'name':'Canopy Style',
    'imgURL':'/pictures/canopy-bed.jpg',
    'description':'Elegant canopy bedding'},{'name':'Farmhouse Style',
    'imgURL':'/pictures/farmhouse-bed-frame.jpg',
    'description':'Wood framhouse bedding'}];

    localStorage.setItem("products", JSON.stringify(productItems));
  }
}


function loadCardsListFromProductController(){
  for(let i = 0, size = productsController.products.length; i < size ; i++){
      const item = productsController.products[i];
      addItemCard(item);
      
  }

}

productsController.loadItemsFromLocalStorage;
loadStorageSampleData();
loadCardsListFromProductController();





/*
function createDoms(){
  for(let i = 0; i < productsController.products.length; i++ )
  {
      const addcard = document.createElement("div");
      addcard.setAttribute('class','card h-100 product-card');
      const addimg = document.createElement("img");
      addimg.setAttribute('src', json.ProductsController.products[i].imageURL);
      addimg.setAttribute('class','card-img-top');
      addcard.appendChild(addimg);
      const addcardbody = document.createElement('div');
      addcardbody.setAttribute('class','card-body');
      const addheadingfive = document.createElement('h5');
      addheadingfive.setAttribute('class','card-title');
      const addp = document.createElement('p');
      addp.setAttribute('class','card-text');
      addheadingfive.innerHTML = json.ProductsController.products[i].name;
      addp.innerHTML = json.ProductsController.products[i].description;
      addcard.appendChild(addcardbody);
      addcardbody.appendChild(addheadingfive);
      addcardbody.appendChild(addp);
      const addcardfooter = document.createElement("div");
      addcardfooter.setAttribute('class','card-footer');
      const addsmalltag = document.createElement("small");
      addsmalltag.setAttribute('class','text-muted');
      addsmalltag.innerHTML = json.ProductsController.products[i].price;
      addcard.appendChild(addcardfooter);
      addcardfooter.appendChild(addsmalltag);




  }
}
*/








