import {Routes,Route } from "react-router-dom";
import Login from "../Login/Login";


const RoutesLogin = () => {
    return (
    <div className="Main-Routes-Login">
<Routes>
    <Route path="/login" element={<Login/>}></Route>
</Routes>
    </div>
    );
}
 
export default RoutesLogin;