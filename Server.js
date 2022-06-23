const express = require("express")
const app = express()
var cookieParser = require('cookie-parser')
const cloudinary = require("cloudinary")

const PORT = process.env.PORT || 5000;

// cookies parser for storing and retrive cookies
app.use(cookieParser())

// for getting port and secretkey
require("dotenv").config()

// database connection 
require("./Config/db")

// cloudinary api key
cloudinary.config({
    cloud_name: "dsj9t6adh",
    api_key: "998169537827179",
    api_secret: "OdZZJsvvLEd6rrDWQb0VqQVFFFg"
})

// initializing that app deal with json data
app.use(express.json())

// User Routes 
const User = require("./Routes/UserRoutes")
app.use("/User" , User)

// Category Routes 
const Category = require("./Routes/CategoryRoutes")
app.use("/Category" , Category)

// Category Routes 
const Product = require("./Routes/ProductRoutes")
app.use("/Product" , Product)

// Location Routes 
const Location = require("./Routes/LocationRoutes")
app.use("/Location" , Location)

// Coupon Routes 
const Coupon = require("./Routes/CouponRoutes")
app.use("/Coupon" , Coupon)

// Cart Routes 
const Cart = require("./Routes/CartRoutes")
app.use("/Cart" , Cart)

// app.get("/" , (req, res) => {
//     res.json({message : "Hello"})
// })

app.listen(PORT , () => {
    console.log("Port Is running at port no " + PORT);
})