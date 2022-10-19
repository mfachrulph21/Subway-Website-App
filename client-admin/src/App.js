import NavbarComponent from './components/Navbar';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import {createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import CategoriesPage from './pages/CategoriesPage';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  
  {
    path: "/",
    loader: () => {
      const access_token = localStorage.getItem('access_token')

      if(!access_token) {
        throw redirect('/login')
      }
    },
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Dashboard/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/categories",
        element: <CategoriesPage/>,
      }
    ]
  },
  {
    path: "/login",
    loader: () => {
      const access_token = localStorage.getItem('access_token')

      if(access_token) {
        throw redirect('/')
      }
    },
    element: <Login/>,
  }
]);


function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
