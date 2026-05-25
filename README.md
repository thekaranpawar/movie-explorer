# 🎬 Movie Explorer

A modern and responsive movie discovery web application built with React + Vite that lets users explore movies, search by title, filter by genres, view details, and manage favorites. It offers a smooth experience with fast performance, real-time API data fetching, and a clean, responsive UI for all devices.
Movie Explorer is built using reusable React components, Context API, and custom hooks, ensuring a scalable and maintainable structure. Users can easily discover trending movies, browse categories, and save their favorite movies for quick access.

---

## 🌐 Live Demo

👉 https://movie-explorer-delta-ten.vercel.app/

---

## 🚀 Features

- 🔍 Search movies by title  
- 🎭 Filter movies by genre  
- 📄 View detailed movie information  
- ❤️ Add and manage favorite movies  
- ⚡ Fast and optimized performance using Vite  
- 📱 Fully responsive UI  
- 🔄 Dynamic API data fetching  
- 🧩 Reusable component-based architecture  
- 🛠️ Custom hooks and Context API for state management  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Vite  
- JavaScript (ES6+)  
- Material UI (MUI)  

### State Management
- React Context API  
- Custom Hooks  

### API
- Movie API Integration  

---

## 📂 Project Structure

```
movie-explorer/
│
├── public/
│   └── movies-app.png
│
├── src/
│   ├── components/
│   │   ├── FilterByGenre.jsx
│   │   ├── Loader.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Navbar.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── context/
│   │   └── MoviesContext.jsx
│   │
│   ├── hooks/
│   │   └── useMovies.js
│   │
│   ├── pages/
│   │   ├── Favorites.jsx
│   │   ├── Home.jsx
│   │   └── MovieDetails.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js

```
---

## ⚙️ Installation & Setup
```
### 1️⃣ Clone the repository

Bash

git clone https://github.com/thekaranpawar/movie-explorer.git

### 2️⃣ Navigate to project directory

Bash

cd movie-explorer

### 3️⃣ Install dependencies

Bash

npm install

### 4️⃣ Start development server

Bash

npm run dev
```
---

## 🔑 Environment Variables

Create a .env file in the root directory and add:

env

VITE_API_KEY=your_api_key

---

## 🧠 Architecture Overview

- Components → Reusable UI components  
- Pages → Main application screens  
- Hooks → Custom React hooks for reusable logic  
- Context → Global state management using React Context API  
- Services → API handling and external service calls  

---

## 📈 Future Improvements

- User authentication  
- Dark mode support  
- Pagination  
- Watchlist feature  
- Trailer integration  
- Advanced filtering & sorting  
- Deployment with CI/CD  

---

## 🧪 Available Scripts

Bash

npm run dev       # Start development server
npm run build     # Create production build
npm run preview   # Preview production build
npm run lint      # Run ESLint

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository  
2. Create a new branch  
3. Commit your changes  
4. Push to the branch  
5. Open a Pull Request  

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Developer

Karan Pawar  
Java Full Stack Developer 
Passionate about building scalable web applications  

---

## ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub.
