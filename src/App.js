import React from 'react'
import {

  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cart from './pages/Cart';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Productpage from './pages/Productpage';
import Registration from './pages/Registration';
import SingleProductPage from './pages/SingleProductPage';
import aboutPage from './pages/aboutPage';
import contactPage from './pages/contactPage';



function App() {
  const user = false;
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} />


     

      <Route path="/products" element={<Productpage/>} >
        <Route path=":category" element={<Productpage/>} />
      </Route>



      <Route path="/product" element={<SingleProductPage/>} >
          <Route path=":id" element={<SingleProductPage/>}/>
      </Route>

      <Route path="/cart" element={<Cart/>} />
      <Route path="/about" element={<aboutPage/>} />

      <Route path="/contact" element={<contactPage/>} />


      <Route path="/login" element={user ? <Navigate to ="/"/> : <Login/>} />

      
     

      <Route path="/register" element={user ? <Navigate to ="/"/> : <Registration/>} />

      
      


    </Routes>
   
   </BrowserRouter>
  );
}

export default App;
