//import the DAO layer
const productDAO = require('./productDao');

const getProducts = function(done){
  //call dao getProducts method and pass the parameter
  productDAO.getProducts(done);
}

const getProductById = function(id, done){
  //call dao getProductById method and pass the parameter
 
}
const saveProductDetails = function(productDetails, done){
  //call dao saveProductDetails method and pass the parameter

}


const deleteProductById = (productId, done) => {
//call dao deleteProductById method and pass the parameter
}



module.exports = {
  getProducts, getProductById,saveProductDetails, deleteProductById
}
