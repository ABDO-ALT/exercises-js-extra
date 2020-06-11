/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart. x

1. Fill the products list with at least 4 products, what attributes de we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice

4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products

6. If there is not enough stock, the product cannot be added to the shopping cart
*/

var products = [];

var product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 105,
};
var product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2,
};
const product4 = {
  id: 4,
  name: "Watch",
  price: 10,
  stock: 4,
};

products.push(product1);
products.push(product2);
products.push(product4);

var shoppingCart = {
  totalPrice: 0,
  selectedProducts: [],
};
// total Price 10
// total Price 9.99
// total Price 12.98

// selectedProducts { product1 = [
//   id: 1,
//   name: "Toaster X56 Plus",
//   price: 12.98,
//   stock: 105,
// };
//  product2 = {
//   id: 2,
//   name: "Watch Rocker",
//   price: 9.99,
//   stock: 2,
// };
//  product4 = {
//   id: 4,
//   name: "Watch",
//   product: 10,
//   stock: 4,
// }]

function addToShoppingCart(id) {
  //console.log("addtoShoppingId", id);
  for (let i = 0; i < products.length; i++) {
    //console.log(products[i]);
    if (products[i].id === id) {
      shoppingCart.selectedProducts.push(products[i]);
      const sum = products[i].price + shoppingCart.totalPrice;
      shoppingCart.totalPrice = sum;
    }
  }
}

function removeFromShoppingCart(id) {
  for (let i = 0; i < shoppingCart.selectedProducts.length; i++) {
    if (shoppingCart.selectedProducts[i].id === id) {
      shoppingCart.selectedProducts.splice(i, 1);
      shoppingCart.totalPrice -= shoppingCart.selectedProducts[i].price;
      for (let j = 0; j < products.length; j++) {
        if (products[j].id == id) {
          products[j] += 1;
        }
      }

      break;
    }
  }
}

function shop() {
  shoppingCart.totalPrice = 0;
  shoppingCart.selectedProducts = [];
}

//results
addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log(
  "Name of Elements = " + shoppingCart.selectedProducts.map((p) => p.name)
);
addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log(
  "Name of Elements = " + shoppingCart.selectedProducts.map((p) => p.name)
);
addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log(
  "Name of Elements = " + shoppingCart.selectedProducts.map((p) => p.name)
);
removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log(
  "Name of Elements = " + shoppingCart.selectedProducts.map((p) => p.name)
);
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log(
  "Name of Elements = " + shoppingCart.selectedProducts.map((p) => p.name)
);
