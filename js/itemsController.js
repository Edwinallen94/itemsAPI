export class ProductsController {
    constructor(currentId = 0) {
      this._products = [];
      this._currentId = currentId;
    }
    get products() {
      return this._products;
    }
    save(name, description, imageUrl, price) {
      const data = { name, description, imageUrl, price };
      fetch("http://localhost:8080/item", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    addItem(name, description, imageUrl, price) {
      const item = {
        // Increment the currentId property
        id: ++this._currentId,
        name: name,
        description: description,
        imageUrl: imageUrl,
        price: price,
      };
      // Push the item to the products property
      this._products.push(item);
      localStorage.setItem("products", JSON.stringify(this._products));
      this.save(item.name, item.description, item.imageUrl, item.price);
    }
    loadItemsFromLocalStorage() {
      const storageItems = localStorage.getItem("products");
      if (storageItems) {
        const items = JSON.parse(storageItems);
        //TODO load the items into the local items structure (this.items)
        // for(let i = 0; i < items.length; i++) {
        //     const product = items[i];
        //     this._products.push(product);
        // }
      }
    }
  }



