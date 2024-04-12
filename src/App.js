 
import './App.css';
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Footer from "./Components/Footer";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart/Cart";
import {PizzaContextProvider} from "./Context/PizzaContext";
function App() {
  return(
     
     <div className="App">
      <PizzaContextProvider>

      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/"  element={<HomePage/>}/>
          <Route exact path="/menu"  element={<Menu/>}/>
          <Route exact path="/about"  element={<About/>}/>
          <Route exact path="/cart"   element={<Cart/>}/>
          <Route exact path="/contact"  element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
      </PizzaContextProvider>
     </div>
  );
}

export default App;  
