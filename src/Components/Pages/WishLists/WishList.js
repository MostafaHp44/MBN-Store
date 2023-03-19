import './WishList.css'
import { useSelector,useDispatch} from "react-redux";
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { addtocart } from '../../Redux/Action/action';




const WishList = () => {
    const dispatch=useDispatch()

    const handelprice=(price,item)=>{
        return Number(price * item).toLocaleString('en-US');
    }
    const WishList=useSelector((state)=>state.WishList)

    return (
    <div className="Main-WishList">
<section className="vh-100" style={{backgroundColor: "#fdccbc"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <p><span className="h2">Your WishList </span><span className="h4">{WishList.map((item)=>(item.favitem),0)}</span></p>

        <div className="card mb-4">
          <div className="card-body p-4">

            <div className="row align-items-center">
                {WishList.map((item,key)=>(

              <>
              <div className="col-md-2">
                <img src={item.img}
                  className="img-fluid"  alt="Generic placeholder image" />
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Name</p>
                  <p className="lead fw-normal mb-0">{item.title}</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Color</p>
                  <p className="lead fw-normal mb-0">
                    pink rose</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Quantity</p>
                  <p className="lead fw-normal mb-0">{item.quantity}</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Price</p>
                  <p className="lead fw-normal mb-0">${item.price}</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Total</p>
                  <p className="lead fw-normal mb-0"><Badge pill bg="info">{handelprice(item.price,item.quantity)}$</Badge>{' '}
</p>
                </div>
              </div>
              </>
                ))}

            </div>

          </div>
        </div>

        <div className="card mb-5">
          <div className="card-body p-4">

            <div className="float-end">
              <p className="mb-0 me-5 d-flex align-items-center">
                <span className="small text-muted me-2">Order total:</span> <span
                  className="lead fw-normal">${WishList.reduce((total, item)=>total+(item.price*item.quantity),0)}</span>
              </p>
            </div>

          </div>
        </div>

        <div className="d-flex justify-content-end">
         <Link to='/'><button type="button" className="btn btn-light btn-lg me-2">Complate shopping</button></Link>
          <button type="button" className="btn btn-primary btn-lg" onClick={()=>{
            dispatch(addtocart())
          }}>Add to cart</button>
        </div>

      </div>
    </div>
  </div>
</section>

    </div>
    );
}
 
export default WishList;