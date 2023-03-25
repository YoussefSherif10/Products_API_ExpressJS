//import the modules require
const productsController = require('./productsController');
const express = require("express");

// response messages
const errMsg = 'Unexpected error please try again';

// define the responses that can be used by the API
const response = (res, err, results) => {
    //if error return the response as 400
    //if result return the response as 200 with status OK and  data as result
    if (err)
        return res.status(400).send(err);
    return res.status(200).send({"STATUS": "OK", data: results});
}

router = express.Router();

//This method will get all the Product form the product.json 
router.get("/", (req, res) => {
    try {
        //calling the controller getProducts
        productsController.getProducts((err, results) => {
            response(res, err, results);
        });
        //Handle the exception return response as 400 with status as some error msg
    } catch (err) {
        res.status(400).send(errMsg);
    }
});

//This method will get the product with given productId form the product.json 
router.get("/:productId", (req, res) => {
    try {
        //calling the controller getProductById method
        productsController.getProductById(req.params.productId, (err, results) => {
            response(res, err, results);
        });
    } catch (err) {
        //Handle the exception return response as 400 with status as some error msg
        res.status(400).send(errMsg);
    }
});

//This method will save/post a new product in the product.json 
router.post("/", (req, res) => {
    try {
        //get all the productdetails from the req.body
        const productDetails = {
            "name": req.body.name,
            "description": req.body.description,
            "price": req.body.price,
            "quantity": req.body.quantity
        }
        //calling the controller saveProductDetails method
        productsController.saveProductDetails(productDetails, (err, results) => {
            if (err)
                return response(res, err, results);
            return res.status(201).send({"STATUS": "OK", data: results});
        });
    } catch (err) {
        //Handle the exception return response as 400 with status as some error msg
        res.status(400).send(errMsg);
    }
});



//This method will delete product with specific productid from the product.json 
router.delete("/:productId", (req, res) => {
    try {
        //calling the controller deleteProductById method
        productsController.deleteProductById(req.params.productId, (err, results) => {
            response(res, err, results);
        });

    } catch (err) {
        //Handle the exception return response as 400 with status as some error msg
        res.status(400).send(errMsg);
    }
});

module.exports = router;
