# 🌿 Digital Life Lessons

A platform to create, store, and share meaningful life lessons, personal insights, and personal growth wisdom.

### 🔗 Live Site

👉 **Live URL:** *[Live website link here](https://digital-life-lessons-a5382.web.app/)*
👉 **Client Repo:** *[GitHub repo link](https://github.com/roll-raihan/digital-life-lessons-client.git)*

---

## 📌 Overview

**Digital Life Lessons** helps users preserve and share the wisdom they gather throughout life. Users can reflect on personal lessons, browse public lessons from others, and upgrade to Premium for advanced features. The platform encourages mindfulness, learning, and community-driven personal growth.

---

## 🚀 Key Features

* ✍️ **Create & Manage Life Lessons** — Add title, description, category, tone & image
* 🌐 **Public / Private Lessons** — Control visibility
* ⭐ **Free vs Premium Access Level** — Premium lessons locked for free users
* ❤️ **Likes, Favorites & Comments** — Community engagement
* 👤 **User Dashboard** — Manage lessons, favorites, and profile
* 👑 **Admin Dashboard** — Manage users, lessons & reported content
* 💳 **Stripe Premium Upgrade** — One-time lifetime access
* 🔐 **Secure Auth** — Firebase user auth + server verification
* 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
* 🚫 **No Lorem Ipsum** — Real meaningful content only

---

## 🧩 Core Modules

### 🔐 Authentication (Firebase)

* Email + Password login
* Google login
* Password validation (uppercase, lowercase, number, special char)
* Toast messages for all success/error states
* Protected routes for logged-in users
* Firebase Admin SDK token verification on backend

---

### 📝 Life Lessons Module

Each lesson includes:

* Title
* Full description/story
* Category
* Emotional tone
* Image (optional)
* Visibility: **Public / Private**
* Access level: **Free / Premium**

**Premium (locked) lessons** appear blurred for free users with an upgrade prompt.

---

### 🌍 Public Lessons Page

* Browse all public lessons
* Search by keyword
* Filter by category
* Filter by emotional tone
* Sort by newest or most saved
* Pagination
* Locked blur view for Premium lessons

---

### 📖 Lesson Details Page

Includes:

* Full content
* Creator info
* Likes, favorites & comments
* Report lesson
* Similar lessons by tone/category
* Share to social media

---

### 🎛️ User Dashboard

* Dashboard home (stats + recent lessons + small analytics)
* Add lesson
* My lessons (edit, delete, update access level)
* My favorites
* Profile page

---

### 🛠️ Admin Dashboard

* Admin overview (platform-wide stats)
* Manage users (view, update role)
* Manage lessons (delete, filter, feature)
* Manage reports (view reasons, take actions)
* Admin profile

---

### 💳 Stripe Payment Integration

* Free → Premium upgrade
* ৳1500 one-time payment
* /create-checkout-session backend route
* Payment success/cancel pages
* Stripe webhook updates MongoDB (`isPremium: true`)

---

## 🖥️ Tech Stack

### **Frontend**

* React + React Router
* Firebase Authentication
* Axios
* TanStack Query / Custom Hooks
* SweetAlert2 / React Hot Toast
* Stripe (client integration)
* Lottie React
* Responsive UI (custom design)

### **Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* Firebase Admin SDK
* Stripe (checkout + webhook)
* JWT-style token verification
* CORS configured for production

---

## 🧪 Additional Features

* Lottie animation when lesson added
* Search + Filter + Sort
* Pagination
* Secure toast-based messaging
* Optional dark/light mode
* Optional PDF export

---

## 📦 Installation & Setup

### **Frontend**

```
cd client
npm install
npm run dev
```

### **Backend**

```
cd server
npm install
npm run start
```

---


## 🧾 License

This project is built for assessment and learning purposes.

---

