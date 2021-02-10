const db = require("../db/connection");
const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const products = [
    {
      name: "Drops of Sushine",
      price: "$1000",
      imgURL:
        "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixid=MXwxMjA3fDB8MHxwaG90[…]VufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      description:
        "Beautiful arrangment of five gold drop lights sourced from Italy.",
    },
    {
      name: "Bright Backyard",
      price: "$250",
      imgURL: "https://images.unsplash.com/photo-1552529232-9e6cb081de19?ixid=MXwxMjA3fDB8MHxzZWFyY2h[…]fHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Brighten you backyard with a collection of these stark outdoor lights",
    },
    {
      name: "Plain Jane Light",
      price: "$600",
      imgURL:
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bGFtcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Fits easily in with many home decors",
    },
    {
      name: "Copper Queen",
      price: "$550",
      imgURL:
        "https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bGFtcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Cheery and bright table lamp. Works well in bedrooms.",
    },
    {
      name: "Nightlight",
      price: "$225",
      imgURL:
        "https://images.unsplash.com/photo-1567459045800-4d77c81fc3f5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Buy as a pair!",
    },
    {
      name: "Cage-Free",
      price: "$600",
      imgURL:
        "https://images.unsplash.com/photo-1579652231394-977f3c5c32fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGxhbXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Charming geometric design. Lots of light.",
    },
    {
      name: "Plain Jane 2",
      price: "$200",
      imgURL:
        "https://images.unsplash.com/photo-1593038065120-5f3bd95bbe0c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGxhbXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Wonderful table light. Multidirectional. Buy as a pair.",
    },
    {
      name: "Sky Dreams",
      price: "$800",
      imgURL:
        "https://images.unsplash.com/photo-1562978625-e94c524cfc17?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTJ8fGxhbXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Earthy and delightful.",
    },
  ];

  await Product.insertMany(products);
  console.log("Created products!");
};
const run = async () => {
  await main();
  db.close();
};

run();
