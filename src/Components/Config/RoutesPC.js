import {Routes,Route,  } from "react-router-dom";
import PageOfCases from "../Pages/PC/Cases/PagesOfCases/PageOfCases";
import Cases from "../Pages/PC/Cases/UICases/Cases";
import Asus from "../Pages/PC/MotherBoard/PagesOfMotherBoard/Asus";
import GigaByte from "../Pages/PC/MotherBoard/PagesOfMotherBoard/GigaByte";
import Msi from "../Pages/PC/MotherBoard/PagesOfMotherBoard/Msi";
import MotherBoard from '../Pages/PC/MotherBoard/UIMotherBoard/MotherBoard';
import Home from "../UI/UI";

const RoutesPC = () => {
    return (
    <div className="Main-Routes-PC">
<Routes>
    <Route path='/' element={<Home/>}></Route>     
</Routes>

<Routes>
<Route path='motherboard' element={<MotherBoard/>}></Route> 
      <Route path="motherboard/asus"element={<Asus/>}></Route>
      <Route path="motherboard/gigabyte" element={<GigaByte/>}></Route>
      <Route path="motherboard/msi" element={<Msi/>}></Route>  
</Routes>

<Routes>
    <Route path='ram'></Route>
    <Route path='proccecors'></Route>
    <Route path='graphiccard'></Route>
    <Route path='cases' element={<Cases/>}></Route>
      <Route path="cases/productcases" element={<PageOfCases/>}></Route>
    <Route path='power supply'></Route>
</Routes>

    </div>
    );
}
 
export default RoutesPC;