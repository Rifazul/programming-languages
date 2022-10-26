import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CartSummary from "../Pages/Shawed/CartSummary/CartSummary";
import Details from "../Pages/Shawed/Details/Details";
import PrivateRoter from "./PrivateRouter/PrivateRoter";



export const router = createBrowserRouter([
    {path:'/', element: <Main></Main>, children:[

      {path:'/', element:<Home></Home>},
      {path:'/courses', element:<Courses></Courses>},
      {path:'/faq', element:<FAQ></FAQ>},
      {path:'/blog', element:<Blog></Blog>},
      {path:'/register', element:<Register></Register>},
      {path:"/login", element:<Login></Login>},

      {
        path: '/details/:id', element:  <Details></Details> ,

        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
    },

    {
       path:'/cartSummary/:id', element: <PrivateRoter><CartSummary></CartSummary> </PrivateRoter> ,
       loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
    }

      
    ]}
])