import './Main-LastsNews.css'
import Form from 'react-bootstrap/Form';



const MainLastsNews = () => {
    return (
    <div className="Main-LastsNews">

<div className="join">

<div className="TextOfJoin">
<span className="text1">THE WEEKEND AWAITS</span>
<h6 className="text2">Sign up now to get alerts for new product drops and rad promotions</h6>
</div>

    <div className='InputOfJoin'>

        <form className='FormLast'>
        <Form.Group className="mb-0 inputjoin" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
        <button className='btnn'><span>Subscribe</span></button>

        </form>
       
    </div>

</div>
    </div>
    );
}
 
export default MainLastsNews;