import { ProductsController } from "./itemsController.js";



// Initialize a new ItemsController with currentId set to 0
const newProductsController = new ProductsController(0);

// Select the New Item Form
const newItemForm = document.getElementById('new-item-form');

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newItemName = document.getElementById('new-item-name');
    const newItemDescription = document.getElementById('new-item-description');
    const newItemImageUrl = document.getElementById('new-item-img');    
    const newItemPrice = document.getElementById('new-item-price');

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

    // Clear the form
    newItemName.value = '';
    newItemDescription.value = '';    
    newItemImageUrl.value = '';
    newItemPrice.value = '';
});