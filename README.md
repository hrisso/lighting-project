# lighting-project

## Overview
Linterna is a lamp appreciation web app that allows users to view high-end lamps all in one application. Users can view lamp details such as name, price, and description without an account. Upon sign up/sign in, users will be able to add, edit, and delete lamps from the collection.

## Schema

```
const Product = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true }
  },
  { timestamps: true }
)

```

## Whimsical Diagram
![Whimsical](https://res.cloudinary.com/doas1ztbf/image/upload/v1612815239/Whimsical.png)

## Wireframes
![Wireframes](https://res.cloudinary.com/doas1ztbf/image/upload/v1613657620/p3-wireframe.png)

## Team Expectations
https://docs.google.com/document/d/1YLXA-zjy0KFBMMgFSZN1QUKv3Rie46kFgE4ulY4VDks/edit?usp=sharing

## MVP
- Homepage, Product List page, Product Detail Page, Add Product page, Edit Product page
- Authentication - Sign Up, Sign In, Sign On
- Image Carousel on the homepage

## Post MVP
- Search feature
- Contact Us form
- Sort products
- Image carousel on product details page
