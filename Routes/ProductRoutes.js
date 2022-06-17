const ProductController = require("../Controller/ProductController")
const express = require("express")
const route = express.Router()

const { AuthorizeUser , authorizeRoles} = require("../middleware/Authorize")

route.post("/AddProduct" , AuthorizeUser , authorizeRoles("Vendor") ,  ProductController.AddProducts)

route.get("/GetProduct" , AuthorizeUser , authorizeRoles("Vendor") ,  ProductController.GetProduct)

module.exports = route