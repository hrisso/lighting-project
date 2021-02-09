const db = require('../db/connection')
const Product = require('../models/product')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const products = 
    [
        {
          "name": "Drops of Sushine",
          "price": "$1000",
          "imgURL": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixid=MXwxMjA3fDB8MHxwaG90[…]VufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          "description": "Beautiful arrangment of five gold drop lights sourced from Italy."
        }, 
        
        
      ]

    await Product.insertMany(products)
    console.log("Created products!")
}
const run = async () => {
    await main()
    db.close()
}

run()