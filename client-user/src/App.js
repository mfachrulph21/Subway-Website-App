import './App.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <LandingPage/>,
  }
]);

function App() {
  return (
    // <div className="App">
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
