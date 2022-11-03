class ProductsController{
    constructor(currentId = 0){
        this._products = [];
        this._currentId = currentId;
    }
    addItem(name, description,imageUrl) {
        const item = {
            // Increment the currentId property
            id: this._currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl
        };

        // Push the item to the items property
        this._products.push(item);
    }
 
}
