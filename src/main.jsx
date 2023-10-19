import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import AddProduct from './pages/add product/AddProduct.jsx';
import Cart from './pages/cart/Cart.jsx';
import Error from './pages/error page/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('brands.json')
      },
      {
        path: '/add-product',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
