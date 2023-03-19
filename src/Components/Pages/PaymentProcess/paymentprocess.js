import {MDBBtn,MDBCard,MDBCardBody,MDBCardImage,MDBCol,MDBContainer,MDBIcon,MDBInput,MDBRow,MDBTypography,} from "mdb-react-ui-kit";
import React from "react";
import { useSelector,useDispatch} from "react-redux";
import Badge from 'react-bootstrap/Badge';
import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import{IncreaseQuantity,DecreaseQuantity, DeleteQuantity} from '../../Redux/Action/action'
import { UilTrashAlt} from '@iconscout/react-unicons'





    
     const PaymentProcess=()=> {
        const numberCart=useSelector((state)=>state.numberCart)
        const Carts=useSelector((state)=>state.Carts)
        
        const [opencart,setopencart]=useState(false)
        
        const dispatch=useDispatch();
        
        
        const handelprice=(price,item)=>{
            return Number(price * item).toLocaleString('en-US');
        }
       
    return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" ,position:"relative",top:"10em"}}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <a href="#!" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                        shopping
                      </a>
                    </MDBTypography>
    
                    <hr />
    
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have {numberCart} in your cart</p>
                      </div>
                      <div>
                        <p>
                          <span className="text-muted">Sort by:</span>
                          <a href="#!" className="text-body">
                            price
                            <MDBIcon fas icon="angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>
    {Carts.map((item,key)=>(
        <>
                    <MDBCard className="mb-3" key={key}>
                      <MDBCardBody>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <MDBCardImage
                                src={item.img}
                                fluid className="rounded-3" style={{ width: "65px" }}
                                alt="Shopping item" />
                            </div>
                            <div className="ms-4">
                              <MDBTypography style={{fontSize:"14px"}}>
                                {item.title}
                              </MDBTypography>
                            </div>

                            <div className="ms-3">
                              <MDBTypography tag="h5">
                              <span>{item.price}<span  style={{color:"green"}}>.EGP</span></span>
                              </MDBTypography>
                            </div>
                            <div className="ms-3">
                              <MDBTypography tag="h5">
                              <Button variant="success" onClick={()=>{dispatch(IncreaseQuantity(key))}}>+</Button>{' '}
        <Badge pill bg="primary">{item.quantity}</Badge>{' '}
        <Button variant="warning" onClick={()=>{dispatch(DecreaseQuantity(key))}}>-</Button>{' '}
                              </MDBTypography>
                            </div>

                        
                          </div>
                        

                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <MDBTypography tag="h5" className="fw-normal mb-0">
                               {item.quantity}
                              </MDBTypography>
                            </div>

                            <div style={{ width: "80px" }}>
                              <MDBTypography tag="h5" className="mb-0">
                              <Badge pill bg="info">{handelprice(item.price,item.quantity)}$</Badge>{' '}

                              </MDBTypography>
                            </div>
                            <div className='deleteitem' onClick={()=>{dispatch(DeleteQuantity(key))}} style={{cursor:"pointer"}}>
            <UilTrashAlt/>
        </div>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                    </>
))}
                  </MDBCol>
    
                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Card details
                          </MDBTypography>
                          <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                        </div>
    
                        <span className='Accept'> We Accept Pyment With:</span>
<div className='iconpayment'>

    <a  className='logopayment'> 
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width='30px' height='30px'>
      <path d="M11.343 18.031c.058.049.12.098.181.146a7.391 7.391 0 01-4.107 1.238 7.416 7.416 0 114.104-13.593c-.06.051-.12.098-.165.15A7.963 7.963 0 008.595 12a7.996 7.996 0 002.748 6.031zm5.241-13.447c-1.52 0-2.931.456-4.105 1.238.06.051.12.098.165.15A7.963 7.963 0 0115.405 12a8.002 8.002 0 01-2.748 6.031c-.058.049-.12.098-.181.146a7.386 7.386 0 004.107 1.238A7.414 7.414 0 0024 12a7.417 7.417 0 00-7.416-7.416zM12 6.174A7.388 7.388 0 009.169 12 7.386 7.386 0 0012 17.827 7.39 7.39 0 0014.831 12 7.388 7.388 0 0012 6.174z"></path>
    </svg>
    </a>

    <a  className='logopayment'> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='30px' height='30px'>
          <path d="M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 01.894.764l.817 4.338 2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 011.913.336l.34-1.59a5.207 5.207 0 00-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.504-.602.725-1.16.734-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 00-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656l1.02-2.815.588 2.815zm-8.16-4.84l-1.603 7.496H8.34l1.605-7.496z"></path>
        </svg>
    </a>

    <a  className='logopayment'> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width='30px' height='30px'>
          <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0m4.25 1.12c.32 0 .65.03.86.1-2.17.45-3.9 2.47-3.89 4.78 0 .05 0 .11.01.17 3.64.89 5.27 3.08 5.27 6.11.04 3.03-2.36 6.36-6.41 6.37-3.27.01-6.68-2.79-6.7-7.28C5.38 8.4 7 5.54 9.04 3.85c2-1.66 4.73-2.72 7.21-2.73z"></path>
        </svg>
    </a>

    <a  className='logopayment'>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='30px' height='30px'>
      <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 00-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 00.554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 01.923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"></path>
    </svg>
    </a>
    
    <a  className='logopayment'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width='30px' height='30px'>
      <path d="M16.015 14.378c0-.32-.135-.496-.344-.622-.21-.12-.464-.135-.81-.135h-1.543v2.82h.675v-1.027h.72c.24 0 .39.024.478.125.12.13.104.38.104.55v.35h.66v-.555c-.002-.25-.017-.376-.108-.516a.75.75 0 00-.33-.234l.02-.008a.784.784 0 00.48-.747zm-.87.407l-.028-.002c-.09.053-.195.058-.33.058h-.81v-.63h.824c.12 0 .24 0 .33.05a.266.266 0 01.15.255c0 .12-.045.215-.134.27zm5.152 1.052H19v.6h1.304c.676 0 1.05-.278 1.05-.884 0-.28-.066-.448-.187-.582-.153-.133-.392-.193-.73-.207l-.376-.015c-.104 0-.18 0-.255-.03a.212.212 0 01-.15-.21c0-.09.017-.166.09-.21a.495.495 0 01.272-.06h1.23v-.602h-1.35c-.704 0-.958.437-.958.84 0 .9.776.855 1.407.87.104 0 .18.015.225.06.046.03.082.106.082.18 0 .077-.035.15-.08.18-.06.053-.15.07-.277.07zM0 0v10.096L.81 8.22h1.75l.225.464V8.22h2.043l.45 1.02.437-1.013h6.502c.295 0 .56.057.756.236v-.23h1.787v.23c.307-.17.686-.23 1.12-.23h2.606l.24.466v-.466h1.918l.254.465v-.466h1.858v3.948H20.87l-.36-.6v.585h-2.353l-.256-.63h-.583l-.27.614h-1.213c-.48 0-.84-.104-1.08-.24v.24h-2.89v-.884c0-.12-.03-.12-.105-.135h-.105v1.036H6.067v-.48l-.21.48H4.69l-.202-.48v.465H2.235l-.256-.624H1.4l-.256.624H0V24h23.786v-7.108c-.27.135-.613.18-.973.18H21.09v-.255c-.21.165-.57.255-.914.255H14.71v-.9c0-.12-.018-.12-.12-.12h-.075v1.022h-1.8v-1.066c-.298.136-.643.15-.928.136h-.214v.915h-2.18l-.54-.617-.57.6H4.742v-3.93h3.61l.518.602.554-.6h2.412c.28 0 .74.03.942.225v-.24h2.177c.202 0 .644.045.903.225v-.24h3.265v.24c.163-.164.508-.24.803-.24h1.89v.24c.194-.15.464-.24.84-.24h1.176V0H0zm21.156 14.955c.004.005.006.012.01.016.01.01.024.01.032.02l-.042-.035zm2.672-1.873h.065v.555h-.065zm.037 1.948v-.005c-.03-.025-.046-.048-.075-.07-.15-.153-.39-.215-.764-.225l-.36-.012a.881.881 0 01-.27-.03.212.212 0 01-.15-.21c0-.09.03-.16.09-.204.076-.045.15-.05.27-.05h1.223v-.588h-1.283c-.69 0-.96.437-.96.84 0 .9.78.855 1.41.87.104 0 .18.015.224.06.046.03.076.106.076.18 0 .07-.034.138-.09.18-.045.056-.136.07-.27.07h-1.288v.605h1.287c.42 0 .734-.118.9-.36h.03c.09-.134.135-.3.135-.523 0-.24-.045-.39-.135-.526zm-5.268-.822v-.583h-2.235v2.833h2.235v-.585h-1.57v-.57h1.533v-.584h-1.532v-.51M13.51 8.787h.685V11.6h-.684zm-.384.756l-.007.006c0-.314-.13-.5-.34-.624-.217-.125-.47-.135-.81-.135H10.43v2.82h.674v-1.034h.72c.24 0 .39.03.487.12.122.136.107.378.107.548v.354h.677v-.553c0-.25-.016-.375-.11-.516a.79.79 0 00-.33-.237c.172-.07.472-.3.472-.75zm-.855.396h-.015c-.09.054-.195.056-.33.056H11.1v-.623h.825c.12 0 .24.004.33.05.09.04.15.128.15.25s-.047.22-.134.266zm3.649-.566h.632v-.6h-.644c-.464 0-.804.105-1.02.33-.286.3-.362.69-.362 1.11 0 .512.123.833.36 1.074.232.238.645.31.97.31h.78l.255-.627h1.39l.262.627h1.36v-2.11l1.272 2.11h.95l.002.002V8.786h-.684v1.963l-1.18-1.96h-1.02V11.4L18.11 8.744h-1.004l-.943 2.22h-.3c-.177 0-.362-.03-.468-.134-.125-.15-.186-.36-.186-.662 0-.285.08-.51.194-.63.133-.135.272-.165.516-.165zm1.668-.108l.464 1.118v.002h-.93l.466-1.12zM2.38 10.97l.254.628H4V9.393l.972 2.205h.584l.973-2.202.015 2.202h.69v-2.81H6.118l-.807 1.904-.876-1.905H3.343v2.663L2.205 8.787h-.997L.01 11.597h.72l.26-.626h1.39zm-.688-1.705l.46 1.118-.003.002h-.915l.457-1.12zm10.164 4.355H9.714l-.85.923-.825-.922H5.346v2.82H8l.855-.932.824.93h1.302v-.94h.838c.6 0 1.17-.164 1.17-.945l-.006-.003c0-.78-.598-.93-1.128-.93zM7.67 15.853l-.014-.002H6.02v-.557h1.47v-.574H6.02v-.51H7.7l.733.82-.764.824zm2.642.33l-1.03-1.147 1.03-1.108v2.253zm1.553-1.258h-.885v-.717h.885c.24 0 .42.098.42.344 0 .243-.15.372-.42.372zM9.967 9.373v-.586H7.73V11.6h2.237v-.58H8.4v-.564h1.527V9.88H8.4v-.507"></path>
    </svg>
    </a>
</div>
    
                        <form className="mt-4">
                          <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                            placeholder="Cardholder's Name" contrast />
    
                          <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                            minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />
    
                          <MDBRow className="mb-4">
                            <MDBCol md="6">
                              <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                                minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                            </MDBCol>
                            <MDBCol md="6">
                              <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                            </MDBCol>
                          </MDBRow>
                        </form>
    
                        <hr />
   

        <div className="d-flex justify-content-between" >
                          <p className="mb-2">ToTal Price :</p>
                          <p className="mb-2">$ {Carts.reduce((total, item)=>total+(item.price*item.quantity),0)}</p>
                        </div>
    
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$ 20.00</p>
                        </div>
    
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">$ {Carts.reduce((total, item ,taxes=20)=>total+Number(item.price * item.quantity)+20,0)}</p>
                        </div>

    
                        <MDBBtn color="info" block size="lg">
                          <div className="d-flex justify-content-between">
                            <span></span>
                            <span>
                              Checkout{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
    }
    export default PaymentProcess