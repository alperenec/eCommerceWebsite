# E-Commerce Website

A comprehensive full-stack e-commerce platform built with **Node.js (Express)** on the backend and **React** (with Redux) on the frontend. This application offers user and admin functionality, including JWT-based authentication, role management, product listing and filtering, shopping cart management, and a dedicated admin panel for advanced operations.

---

### 1. UI/ UX


![1](https://github.com/user-attachments/assets/3f1c9ea6-6092-4c70-888f-97c111545284)


- **Search Bar** for products  
- **Category Filter** (e.g., headphones, phones, etc.)  
- **Sign Up / Sign In** forms with JWT-based authentication  
- **Add to Cart** and **Product Filtering** by price and category

### 2. Admin, Cart & Product Details


![2](https://github.com/user-attachments/assets/e6d020f4-52b3-4173-9ab7-0c929136c22d)

- **Admin Panel**:  
  - View all users and change their roles  
  - Manage products (edit, update, or create new ones)  
- **Shopping Cart**:  
  - See items added by users  
  - Adjust quantity or remove products  
- **Product Details**:  
  - Detailed product descriptions, multiple images  
  - “Buy Now” or “Add to Cart” options

---

## Key Features

- **Authentication & Authorization**  
  - JWT-based sign-up and sign-in  
  - Role-based access (ADMIN/GENERAL)  

- **Product Management**  
  - Create, Read, Update, Delete (CRUD) operations for products  
  - Image upload (Cloudinary integration)  
  - Price and category-based filtering, search functionality  

- **Shopping Cart**  
  - Add products to cart, update quantity, remove items  
  - Dynamic cart total and item count  

- **Admin Panel**  
  - Manage all users: change roles (ADMIN/GENERAL)  
  - Manage products: edit, delete, or add new  
  - View user list, track creation dates  

- **Responsive UI**  
  - Built with React and Tailwind CSS for a clean, responsive interface  

---


## Architecture Overview

This project follows a simple **MVC-like** pattern on the backend:

- **Models**: Mongoose schemas (e.g., `userModel.js`, `productModel.js`, `cartProduct.js`)  
- **Controllers**: Business logic (e.g., `uploadProduct.js`, `userSignIn.js`)  
- **Routes**: Endpoint definitions (e.g., `/api/get-product`, `/api/signup`)  

On the frontend, React manages UI components, while Redux stores and handles global state (e.g., user info, cart items). React Router manages navigation between pages.

---

## Technologies Used

### Backend
- **Node.js**  
- **Express.js**  
- **MongoDB** & **Mongoose**  
- **JWT** for authentication  
- **Cloudinary** (optional) for image uploads  
- **bcryptjs** for password hashing  

### Frontend
- **React** (Functional components & Hooks)  
- **Redux** for state management  
- **React Router** for navigation  
- **Tailwind CSS** for styling  
- **ESLint** for linting and code consistency  

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/alperenec/eCommerceWebsite
cd eCommerceWebsite
