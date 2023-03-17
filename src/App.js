import './App.css';
import NavBar from './Components/UI/NavBar/NavBar';
import Footer from './Components/UI/Footer/Footer';
import React from "react";
import RoutesPC from './Components/Config/RoutesPC';
import RoutesLaptop from './Components/Config/RoutesLaptop';
import RoutesLogin from './Components/Config/RoutesLogin';
import RoutesSignUp from './Components/Config/RoutesSignUp';
import RoutesWishList from './Components/Config/RoutesWishList';
import RoutesDashbord from './Components/Config/RoutesDashbord';
import PaymentProcess from './Components/Pages/PaymentProcess/paymentprocess';
import RoutesPayment from './Components/Config/RoutesPayment';





 
const App=()=>{
  return (
    <div className="App">
      <NavBar/>
      
      <RoutesPC/>
      <RoutesLaptop/>
      <RoutesSignUp/>
      <RoutesLogin/>
      <RoutesWishList/>
      <RoutesDashbord/>
      <RoutesPayment/>

    </div>

  );
}

export default App;
