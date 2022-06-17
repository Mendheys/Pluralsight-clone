import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Angular from './Pages/Angular';
import Cplus  from './Pages/Cplus';
import Python from './Pages/Python';
import Footer from './Components/Footer';
import LandingPage from './Pages/LandingPage'
import Products from './Pages/Products';
import SingleProduct from './Pages/SingleProduct';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import AllRoutes from './Components/AllRoutes';





function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
      
    </div>
  );
}

export default App;
