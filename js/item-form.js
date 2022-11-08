import { ProductsController } from "./itemsController.js";
import { addItemCard } from "./index.js";


// Initialize a new ItemsController with currentId set to 0
const newProductsController = new ProductsController(0);

// Select the New Item Form
const newItemForm = document.getElementById('new-item-form');

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newItemName = document.getElementById('name');
    const newItemDescription = document.getElementById('description');
    const newItemImageUrl = document.getElementById('image-url');    
    const newItemPrice = document.getElementById('price');

    // Get the values of the inputs
    const name = newItemName.value;
    const description = newItemDescription.value;
    const imageUrl = newItemImageUrl.value;
    const itemPrice = newItemPrice.value;

    /*
        Validation code here
    */

    // Add the item to the ItemsController
    newProductsController.addItem(name, description, imageUrl, itemPrice);
    newProductsController.loadItemsFromLocalStorage();
    let itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML ='';
    for(let i = 0; i < newProductsController.products.length; i++)
    {
        addItemCard(newProductsController.products[i]);
    }
    

    // Clear the form
    newItemName.value = '';
    newItemDescription.value = '';    
    newItemImageUrl.value = '';
    newItemPrice.value = '';
});