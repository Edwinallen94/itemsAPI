class ProductsController{
    constructor(currentId = 0){
        this._products = [];
        this._currentId = currentId;
    }
    get products(){
        return this._products;
    }
    addItem(name, description,imageUrl,price) {
        const item = {
            // Increment the currentId property
            id: ++this._currentId,
            name: name,
            description: description,
            imageUrl: imageUrl,
            price:price
        };

        // Push the item to the products property
        this._products.push(item);
    }
    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("products");
        if (storageItems) {
            const items = JSON.parse(storageItems);
            //TODO load the items into the local items structure (this.items)   
            for(let i = 0; i < items.length; i++) {
                const product = items[i];
                this._products.push(product);
            }       
        }
    }
 
}
