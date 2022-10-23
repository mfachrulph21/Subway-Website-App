import './App.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import { Provider as ReduxProvider} from 'react-redux'
import store from './store/index'
import Layout from './components/layout';
import Products from './pages/Products';
import DetailPage from './pages/DetailItemsPage';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <LandingPage/>,
  // },
  {
    element: <Layout />,
    children: [
        {
            path: `/`,
            element: <LandingPage/>
        },
        {
            path: `/products`,
            element: <Products />
        },
        {
            path: `/products/:id`,
            element: <DetailPage/>
        }
    ]
}

]);


function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
    <RouterProvider router={router} />
    </ReduxProvider>
    </div>
  );
}

export default App;
