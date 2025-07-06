
function createInventoryItem(name, category, price) {
  return {
    name: name,
    category: category,
    price: price,
    describeItem: function () {
      console.log(`Item: ${this.name}, Category: ${this.category}, Price: ₹${this.price}`);
    }
  };
}

function addItemDiscount(item, discountPercent) {
  const discountedPrice = item.price - (item.price * (discountPercent / 100));

  return {
    ...item,
    discountPercent: discountPercent,
    discountedPrice: discountedPrice,
    applyDiscount: function () {
      console.log(`Discounted Price of ${this.name}: ₹${this.discountedPrice}`);
    }
  };
}

const item1 = createInventoryItem("Laptop", "Electronics", 60000);
item1.describeItem(); 

const discountedItem1 = addItemDiscount(item1, 10);
discountedItem1.applyDiscount(); 
