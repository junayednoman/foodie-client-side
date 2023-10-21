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
import BrandDetails from './pages/brand details/BrandDetails.jsx';
import ProductDetails from './pages/product details/ProductDetails.jsx';
import UpdateProduct from './pages/update product/UpdateProduct.jsx';
import AuthProvider from './auth provider/AuthProvider.jsx';
import SignUp from './pages/sign up/SignUp.jsx';
import SignIn from './pages/login/SignIn.jsx';
import PrivateParent from './private route center/PrivateParent.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/brands.json')
      },
      {
        path: '/add-product',
        element: <PrivateParent><AddProduct></AddProduct></PrivateParent>
      },
      {
        path: '/cart',
        element: <PrivateParent><Cart></Cart></PrivateParent>
      },
      {
        path: '/brand-details/:brandName',
        element: <BrandDetails></BrandDetails>,
        loader: ({ params }) => fetch(`https://brand-store-server-eosin.vercel.app/products/${params.brandName}`)
      },
      {
        path: '/products/:brandName/:id',
        element: <PrivateParent><ProductDetails></ProductDetails></PrivateParent>,
        loader: ({ params }) => fetch(`https://brand-store-server-eosin.vercel.app/products/${params.brandName}/${params.id}`)
      },
      {
        path: '/update-product/:brandName/:id',
        element: <PrivateParent><UpdateProduct></UpdateProduct></PrivateParent>,
        loader: ({ params }) => fetch(`https://brand-store-server-eosin.vercel.app/products/${params.brandName}/${params.id}`)
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
