import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import {createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import CategoriesPage from './pages/CategoriesPage';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import EditItemForm from './pages/EditItemForm';

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
      },
      {
        path: `/editItem/:id`,
        element: <EditItemForm/>,
      },

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
    <ReduxProvider store={store}>
    <RouterProvider router={router} />
    </ReduxProvider>
  );
}

export default App;
