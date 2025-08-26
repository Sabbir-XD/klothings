# Klothing 🛍️

A modern **Next.js 15 + MongoDB** powered e-commerce platform.  
This project demonstrates **product listing, product details, and authentication** using **NextAuth**, styled with **TailwindCSS + DaisyUI**.

🌐 **Live Demo**: [https://klothing-demo.vercel.app](https://klothing-demo.vercel.app)

---

## 🚀 Features
- Next.js 15 App Router (React 19, Server Components)
- MongoDB with Mongoose ORM
- Authentication with NextAuth.js
- TailwindCSS v4 + DaisyUI for UI
- Dynamic product listing & details page
- API routes for CRUD operations

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/klothing.git
cd klothing

npm install

MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/klothing
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

npm run dev

npm run build

npm start ```

📂 Route Summary
Route	Method	Description
/	GET	Home page
/products	GET	Product listing page
/products/[id]	GET	Single product details page
/api/products	GET	Fetch all products from MongoDB
/api/products	POST	Add a new product
/api/auth/[...nextauth]	ALL	NextAuth authentication handler

📦 Tech Stack

Next.js 15 (with Turbopack)

React 19

MongoDB + Mongoose

NextAuth.js

TailwindCSS 4 + DaisyUI


📊 Database ERD (Simple)
+-----------------+
|   Product       |
+-----------------+
| _id             |
| name            |
| price           |
| description     |
| createdAt       |
| updatedAt       |
+-----------------+


👨‍💻 Author

Built with ❤️ by [SABBIR HOSSAIN]
🌐 Live Demo: https://klothing-demo.vercel.app