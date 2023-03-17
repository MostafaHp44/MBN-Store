import {Routes,Route } from "react-router-dom";
import SignUp from "../SignUp/SignUp";



const RoutesSignUp = () => {
    return (
    <div className="Main-Routes-SignUp">
<Routes>
    <Route path="signup" element={<SignUp/>}></Route>
</Routes>
    </div>
    );
}
 
export default RoutesSignUp;