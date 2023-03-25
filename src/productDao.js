//import products data
const products = require('./products.json');


//The getProducts function take done as callback
//It will read the product.json file
const getProducts = function(done){
    return done(null, products);
}


//The function getProductById will take two parameters first the id and second the callback
const getProductById = function(id, done){
      const product = products.find(p => p.id == id);
      if (!product)
          return done('The product doesn\'t exist');
      return done(null, product);
}


//The saveProductDetails method will take productDetails and done as callback
const saveProductDetails = function (ProductDetails, done) {
    products.push(ProductDetails);
    return done(null, ProductDetails);
}

//The method deleteProductById will take productId and done as parameters
const deleteProductById = function(productId, done){
    const index = products.findIndex(p => p.id == productId);
    if (index === -1)
        return done('Product doesn\'t exist');
    products.splice(index, 1);
    return done(null, "Products Deleted");
}


module.exports ={
    getProducts,
    getProductById,
    saveProductDetails,
    deleteProductById
    
}