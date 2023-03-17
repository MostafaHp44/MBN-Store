import {Routes,Route } from "react-router-dom";
import Admin from "../Dashbord/Admin/Admin";
import User from "../Dashbord/User/User";

const RoutesDashbord = () => {
    return (
    <div className="Main-RoutesDashbord">
<Routes>
    <Route path="adminpanel" element={<Admin/>}></Route>
    <Route path="userpanel" element={<User/>}> </Route>
</Routes>
    </div>
    );
}
 
export default RoutesDashbord;