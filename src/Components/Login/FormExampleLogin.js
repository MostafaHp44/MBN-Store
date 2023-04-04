import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState,useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from '../API/Api';
import {useNavigate } from 'react-router-dom';





function FormExampleLogin() {
  const [validated, setValidated] = useState();
  const[user,setuser]=useState('')
  const[password,setpass]=useState('')
  const [apierr,setapierr]=useState('')
  const[isadmin,setisadmin]=useState()

  const navigate=useNavigate();
 const handelrole=()=>{
  setisadmin()
 }
  const handleSubmit =  async(event) => {
    const form = event.currentTarget;

    if (form.checkValidity()===false) 
    {
      event.preventDefault();
      event.stopPropagation();
  
      toast.error('enter password and mail',{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    
    }


    else if (form.checkValidity()===true)
    {
      setValidated(true)
      event.preventDefault();  
      

    try{
     await axios.post('http://localhost:5000/login',{
       
        username:user,
        password:password,
        adminrole:isadmin
       
      }).then((res)=>{
        toast.success(res, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setTimeout(() => {
            isadmin?
            navigate('/adminpanel',{ replace: true })
            :
            navigate('/userpanel',{ replace: true })

          }, 5000);
          
      })
        }
        catch(err) {
          toast.error(err.response.data,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            setapierr(err.response.data)
        }
    }

    setValidated(true)


  }

  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <Form>

      <Form.Group className="mb-3" controlId="formGroupEmail">

        <Form.Label style={{color:"white"}}> Username</Form.Label>
        <Form.Control  onChange={(e)=>{setuser(e.target.value)}} type="email" placeholder="Enter email" value={user}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label style={{color:"white"}}>Password</Form.Label>
        <Form.Control onChange={(e)=>{setpass(e.target.value)}}  type="password" placeholder="Password" value={password} />

       <a style={{cursor:"pointer" , textDecoration:"underline", fontSize:"10px" ,color:"red"}}>Forget Password</a> 

      </Form.Group>

      <Button variant="primary" onClick={handleSubmit}>Login</Button>{' '}

    </Form>
    </>
  );
}

export default FormExampleLogin;