import FormExampleLogin from './FormExampleLogin';
import './login.css'
import { Link } from 'react-router-dom';

const Login = () => {

    return (
 <div className='Main-Login'>
    <div className='background-imge'>

    <div className='Login' >
<div className='row--1'>
    <h1 style={{fontWeight:"800",color:"whitesmoke"}}>Sign in to your account</h1>
    <p style={{color:"white"}}>Don't have an account yet? <Link to="/signup">SignUp</Link></p>

</div>
<div className='row--2'>
<FormExampleLogin/>
</div>
    </div>

    </div>

    </div>
    );
}
 
export default Login;