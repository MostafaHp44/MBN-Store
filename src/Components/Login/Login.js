import FormExampleLogin from './FormExampleLogin';
import './login.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { UilFacebook,UilGoogle } from '@iconscout/react-unicons'

const Login = () => {

    return (
 <div className='Main-Login'>
    <div className='background-imge'>

    <div className='Login' >
<div className='row1login'>
    <h1 style={{fontWeight:"800",color:"whitesmoke"}}>Sign in to your account</h1>
    <p style={{color:"white"}}>Don't have an account yet? <Link to="/signup">SignUp</Link></p>

</div>
<div className='row2login'>
<FormExampleLogin/>
</div>

<div className='row3'>

   <div className='text-row3'>  
   <span style={{color:"white"}}> or Login With </span>
   </div>

   <div className='btn-row3'>
   <Button variant="outline-danger"> Login With Google <UilGoogle/> </Button>
    <Button variant="outline-primary"> Login With FaceBook <UilFacebook/></Button>

   </div>
    

</div>
    </div>

    </div>

    </div>
    );
}
 
export default Login;