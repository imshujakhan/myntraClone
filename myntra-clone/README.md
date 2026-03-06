# Myntra Clone

An e-commerce shopping application inspired by Myntra, featuring product browsing and shopping cart functionality.

## Features

- Product catalog with images and pricing
- Add/remove items to shopping bag
- Shopping cart with quantity management
- Order summary with price breakdown
- Responsive design
- Loading states and spinners

## Tech Stack

- React 19 + Vite
- Redux Toolkit (state management)
- React Router (navigation)
- Bootstrap 5 (UI framework)
- React Icons

## Quick Start

```bash
# Install dependencies
npm install

# Start frontend
npm run dev

# Start backend (in separate terminal)
cd backend
npm install
npm start
```

Frontend: `http://localhost:5173`  
Backend: `http://localhost:8080`

## Project Structure

```
myntra-clone/
├── src/
│   ├── components/    # UI components (Header, Footer, BagItem)
│   ├── routes/        # Pages (Home, Bag)
│   └── store/         # Redux slices (items, bag, fetchStatus)
└── backend/
    ├── data/          # Product data
    └── app.js         # Express server
```

## Redux Store

- **itemsSlice**: Product catalog
- **bagSlice**: Shopping cart items
- **fetchStatusSlice**: API loading states

## API

Backend serves product data via REST API at `http://localhost:8080/items`
