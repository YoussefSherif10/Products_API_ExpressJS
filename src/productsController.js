//import the productService
const productService = require('./productsService');

const getProducts = (done) => {
   //call service getProducts method and pass the parameter
    productService.getProducts(done);
}

const getProductById = (productId, done) => {
   //call service getProductById method and pass the parameter

}

const saveProductDetails = (productDetails, done) => {
  //call service saveProductDetails method and pass the parameter

}


 const deleteProductById = (productId, done) => {
   //call service deleteProductById method and pass the parameter
  
 }

module.exports = {
  getProducts, getProductById, saveProductDetails, deleteProductById
}
