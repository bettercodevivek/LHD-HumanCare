import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx';
import Profile from './Components/Profile.jsx';
import Products from './Components/Products.jsx';
import 'aos/dist/aos.css';
import Vision from './Components/Vision.jsx';
import Contact from './Components/Contact.jsx';
import Layout from './Layout.jsx';
import './index.css'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'home',
        element:<Home/>
      },
      {
        path:'vision',
        element:<Vision/>
      },
      {
        path:'profile',
        element:<Profile/>
      },{
        path:'products',
        element:<Products/>
      },
      {
        path:'contact',
        element:<Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
