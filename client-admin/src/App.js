import NavbarComponent from './components/Navbar';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import LandingPage from './pages/LandingPage';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/",
    element: <LandingPage/>,
  }
]);


function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
