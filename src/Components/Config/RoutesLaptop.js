import {Routes,Route } from "react-router-dom";
import Dell from "../Pages/Laptop/Dell/Dell";



const RoutesLaptop = () => {
    return (
    <div className="Main-Routes-Laptop">
<Routes>
    <Route path='dell' element={<Dell/>}></Route>     
   
</Routes>
    </div>
    );
}
 
export default RoutesLaptop;