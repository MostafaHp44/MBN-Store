import {Routes,Route } from "react-router-dom";
import WishList from "../Pages/WishLists/WishList";


const RoutesWishList = () => {
    return (
    <div className="Mian-Routes-WishList">
<Routes>
    <Route path="/wishlist" element={<WishList/>}></Route>

</Routes>
    </div>
    );
}
 
export default RoutesWishList;