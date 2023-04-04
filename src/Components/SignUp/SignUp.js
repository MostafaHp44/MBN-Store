import { Link } from 'react-router-dom';
import FormExampleSingUp from './FormExampleSignUp';
import './SignUp.css'
import { ToastContainer } from 'react-toastify';
import Button from 'react-bootstrap/esm/Button';
import { UilFacebook,UilGoogle } from '@iconscout/react-unicons'

const SignUp = (props) => {

  

    return (
<div className='Main-SignUp'>
  
    <div className='background-signup'>

    </div>

    <div className='SignUp' >

<div className='row1'>
<h1 style={{fontSize:"28px",color:"royalblue",fontWeight:"800"}}>Hello, Create your account</h1>
<p>Already have an account? <Link  to ="/login"className='redirectsignin'>Sign in</Link> </p>
</div>

<div className='row2'>
    <FormExampleSingUp/>
</div>

<div className='row3'>

   <div className='text-row3'>  
   <span> or SignUp With </span>
   </div>

   <div className='btn-row3'>
   <Button variant="outline-danger"> SignUp With Google <UilGoogle/> </Button>
    <Button variant="outline-primary"> SignUp With FaceBook <UilFacebook/></Button>

   </div>
    

</div>
</div>

</div>


    );
}
 
export default SignUp;