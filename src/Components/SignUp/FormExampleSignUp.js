import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios, {isCancel, AxiosError, AxiosHeaders} from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { UilEyeSlash } from '@iconscout/react-unicons'





function FormExampleSingUp() {
    
const [validated, setValidated] = useState();
const[firstname,setfirstname]=useState('')
const[lastname,setlastname]=useState('')
const[email,setemail]=useState('')
const[username,setusername]=useState('')
const[password,setpassword]=useState('')
const[rpassword,setrpassword]=useState('')
const [apierr,setapierr]=useState('')
const navigate=useNavigate();


  const handleSubmit =  async(event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) 
    {
      event.preventDefault();
      event.stopPropagation();
  
      toast.error('دخل بياناتك كامله من فضلك', {
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

    else if (form.checkValidity()===true &&password!==rpassword)
    {
      
      event.preventDefault();
      event.stopPropagation();
  
      toast.error('كلمه السر مش زي بعض', {
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
      setapierr(null)
      event.preventDefault();      
    try{
      await axios.post('http://localhost:5000/signup',{
        firstname:firstname,
        lastname:lastname,
        username:username,
        email:email,
        password:password
      }).then(()=>{
        toast.success('فل اوي يا امبيسا ', {
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
            navigate('/login',{ replace: true })
          }, 5000);
          console.log('done');
          
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
    <Form noValidate validated={validated} onSubmit={handleSubmit}  >
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
          onChange={(e)=>{setfirstname(e.target.value)}}
            required
            type="text"
            placeholder="First name"
            value={firstname}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
          onChange={(e)=>{setlastname(e.target.value)}}
            required
            type="text"
            placeholder="Last name"
            value={lastname}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="7" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control style={apierr==='so,sorry But The username is taken '?{borderColor: '#dc3545',backgroundImage:"none"}:{borderColor: '#198754'}}
            onChange={(e)=>{setusername(e.target.value)}}
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              value={username}
            />
          
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
         
          </InputGroup>
        </Form.Group>

      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="10" controlId="validationCustom01">
          <Form.Label>Email Address</Form.Label>
          <Form.Control style={apierr==='this mail rigster before'?{borderColor: '#dc3545',backgroundImage:"none"}:{borderColor: '#198754'}}
          onChange={(e)=>{setemail(e.target.value)}}
            required
            type="text"
            placeholder="Your Email"
            value={email}
          />
          {
          apierr==='this mail rigster before'
          ?
          <Form.Control.Feedback style={{color:'#dc3545'}}>this mail rigster before</Form.Control.Feedback>
          :
          <Form.Control.Feedback >Looks good!</Form.Control.Feedback>

        }
        </Form.Group>

        <Form.Group as={Col} md="10" controlId="validationCustom01">
          <Form.Label>Password</Form.Label>
          <Form.Control
          onChange={(e)=>{setpassword(e.target.value)}}
            required
            type="password"
            placeholder="Your Password"
            value={password}
          />
           
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="10" controlId="validationCustom01">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control style={password!==rpassword?{borderColor: '#dc3545',backgroundImage:"none"}:{borderColor: '#198754'}}
          onChange={(e)=>{setrpassword(e.target.value)}}
            required
            type="password"
            placeholder="Your Password Agine !"
            value={rpassword}
          />
          {
          password!==rpassword
          ?<Form.Control.Feedback style={{color:'#dc3545'}}>Your password don't match</Form.Control.Feedback>

          :<Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
          }
          
        </Form.Group>

    

      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>

      <Button type="submit" >Submit</Button>
    </Form>
    </>
  );
}

export default FormExampleSingUp ;