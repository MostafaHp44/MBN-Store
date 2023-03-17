import { Route,Routes } from "react-router";
import PaymentProcess from "../Pages/PaymentProcess/paymentprocess";


const RoutesPayment = () => {
    return (
    <div className="Main-RoutesPayment">
        <Routes>
            <Route path="/paymentprocess" element={<PaymentProcess/>} > </Route>
        </Routes>
    </div>
    );
}
 
export default RoutesPayment;