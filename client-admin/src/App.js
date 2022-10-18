import NavbarComponent from './components/Navbar';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Register/>
      <Login/>
      <LandingPage/>
     </div>
  );
}

export default App;
