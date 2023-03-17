import { Link } from 'react-router-dom';
import FormExampleSingUp from './FormExampleSignUp';
import './SignUp.css'
import { ToastContainer } from 'react-toastify';

const SignUp = (props) => {

  

    return (
<div className='Main-SignUp'>
  
    <div className='background-signup'>

    </div>

    <div className='SignUp' >

<div className='row--1'>
<h1 style={{fontSize:"28px",color:"royalblue",fontWeight:"800"}}>Hello, Create your account</h1>
<p>Already have an account? <Link  to ="/login"className='redirectsignin'>Sign in</Link> </p>
</div>

<div className='row--2'>
    <FormExampleSingUp/>
</div>

<div className='row--3'>
    <span> or SignUp With </span>
</div>
</div>

</div>


    );
}
 
export default SignUp;