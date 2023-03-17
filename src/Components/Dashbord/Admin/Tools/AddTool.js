import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import { useState} from 'react';
import './Tools.css'
import { useDispatch } from "react-redux";
import { additem } from '../../../Redux/Action/action';





const AddTool = () => {

    const[Tilte,settitle]=useState('')
    const[Price,setprice]=useState('')
    const[main_category,setmaincategory]=useState('')
    const[category,setcategory]=useState('')
    const[instock,setinstock]=useState('')
    const[outstock,setoutstock]=useState('')
    const[typemotherboard,settypemotherboard]=useState('')
    const [image, setImage] = useState("");

    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        setImage(URL.createObjectURL(event.target.files[0]));
      }
    };
    const dispatch=useDispatch()
    
    const handeltitle=(e)=>{
        e.preventDefault()
        settitle(e.target.value)
    }
  
    const handelprice=(e)=>{
        e.preventDefault()
        setprice(e.target.value)
    }
    const handelinstock=()=>{
        setinstock("InStock")
        setoutstock('')
    }
    const handeloutstock=()=>{
        setinstock('')
        setoutstock("OutStock")
    }
    const handelstatusstock=()=>{
        setinstock('inStock')
        setoutstock('OutStock')
    }
    const handleEnter = (e) => {
      if(e.key === "Enter"){
        handeladditem()
      } return;
    }
    var generate = function () {
      var ObjectId = (
        m = Math,
        d = Date,
        h = 16,
        s = (s) => m.floor(s).toString(h)
      ) =>
        s(d.now() / 1000) + " ".repeat(h).replace(/./g, () => s(m.random() * h));
      // Thanks to Ruben Stolk
      return ObjectId();
    };
    const handelmaincategory=(e)=>{
      console.log(e);
      setmaincategory(e)
    }
    const handelcategory=(e)=>{
      setcategory(e)
    }
    const handeladditem=()=>{
        const item=
        {
            title:Tilte,
            price:Price,
            statusstock:outstock?outstock:instock,
            main_category:main_category,
            category:category,
            typemotherboard:typemotherboard,
            img:image,
            id_products:generate(),
           }
           console.log(item);
          
          dispatch(additem(item))
         
    }

    return (
    <div className="MainAddTool">
        <div className='AddCard'>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Title
        </InputGroup.Text>
        <Form.Control onChange={handeltitle}
          type='text'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={Tilte}
        />
      </InputGroup>

      <InputGroup className="mb-3" >
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text>Price</InputGroup.Text>
        <Form.Control  onChange={handelprice} aria-label="Dollar amount (with dot and two decimal places)"
        value={Price} />
      </InputGroup>

      <InputGroup className="mb-3">
        <Button variant="outline-success" onClick={handelinstock}>inStock</Button>
        <Button variant="outline-danger"  onClick={handeloutstock}>OutStock</Button>
        <Form.Control onChange={handelstatusstock}
        aria-label="Example text with two button addons"
        type='text'
        placeholder='??'
         value={outstock?outstock:instock}
        />
      </InputGroup>

      <InputGroup className="mb-3">

        <DropdownButton className=''
          variant="outline-secondary"
          title="Main-Categories"
          id="input-group-dropdown-1"
          onSelect={handelmaincategory}>

          <Dropdown.Item eventKey="PC">PC</Dropdown.Item>
          <Dropdown.Item eventKey="Laptop" >Laptop</Dropdown.Item>
          <Dropdown.Item eventKey="Phone" >Phone</Dropdown.Item>
      
        </DropdownButton>

        <Form.Control aria-label="Text input with dropdown button" 
        onChange={()=>{}}
        type="text"
        value={main_category}
        />
      </InputGroup>
      
      
      
{
main_category==="PC"?

      <InputGroup className="mb-3">
        <SplitButton
          variant="outline-secondary"
          title="Category"
          id="segmented-button-dropdown-1"
          onSelect={handelcategory}
        >
          <Dropdown.Item eventKey="MotherBoard">MotherBoard</Dropdown.Item>
          <Dropdown.Item eventKey="Ram"> Ram</Dropdown.Item>
          <Dropdown.Item eventKey="Processor">Processor</Dropdown.Item>
          <Dropdown.Item eventKey="PowerSupply">PowerSupply</Dropdown.Item>
          <Dropdown.Item eventKey="Cases">Cases</Dropdown.Item>

        </SplitButton>
        <Form.Control aria-label="Text input with dropdown button" 
        type='text'
        value={category}
        onChange={()=>{}}
        
        />
     
      
      </InputGroup>
      :main_category==="Laptop"?
      <InputGroup className="mb-3">
      <SplitButton
        variant="outline-secondary"
        title="Category"
        id="segmented-button-dropdown-1"
        onSelect={handelcategory}
      >
        <Dropdown.Item eventKey="Dell">Dell</Dropdown.Item>
        <Dropdown.Item eventKey="Asus"> Asus</Dropdown.Item>
        <Dropdown.Item eventKey="HP">HP</Dropdown.Item>
        <Dropdown.Item eventKey="Lenovo">Lenovo</Dropdown.Item>
        <Dropdown.Item eventKey="Msi">Msi</Dropdown.Item>

      </SplitButton>
      <Form.Control aria-label="Text input with dropdown button"
       onChange={()=>{}}
       type="text"
       value={category}
      
      />
      </InputGroup>
      :main_category==="Phone"?
      <InputGroup className="mb-3">
      <SplitButton
        variant="outline-secondary"
        title="Category"
        id="segmented-button-dropdown-1"
        onSelect={handelcategory}
      >
        <Dropdown.Item eventKey="Samsung">Samsung</Dropdown.Item>
        <Dropdown.Item eventKey="Infnix"> Infnix</Dropdown.Item>
        <Dropdown.Item eventKey="Xiaomi">Xiaomi</Dropdown.Item>
        <Dropdown.Item eventKey="Huawei">Huawei</Dropdown.Item>
        <Dropdown.Item eventKey="Oppo">Oppo</Dropdown.Item>

      </SplitButton>
      <Form.Control aria-label="Text input with dropdown button" 
       onChange={()=>{}}
       type="text"
       value={category}
      />
      </InputGroup>
      :<></>
    
}
      <InputGroup className="mb-3" style={category==='MotherBoard'?{display:"flex"}:{display:"none"}}>
        <SplitButton
          variant="outline-secondary"
          title="typemotherboard"
          id="segmented-button-dropdown-1"
          onSelect={(e)=>{settypemotherboard(e)}}
        >
          <Dropdown.Item eventKey="MSI">MSI</Dropdown.Item>
          <Dropdown.Item eventKey="ASUS"> Asus</Dropdown.Item>
          <Dropdown.Item eventKey="GiGABYTE">GiGABYTE</Dropdown.Item>
         
        </SplitButton>
        <Form.Control aria-label="Text input with dropdown button" 
       onChange={()=>{}}
       type="text"
       value={typemotherboard}
      />
      </InputGroup>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control onChange={onImageChange}
         type="file"
         />
      </Form.Group>
      <Button variant="success"  onClick={handeladditem} onKeyPress={handleEnter}>Add</Button>{' '}
      <img  src={image} />

        </div>
  

    </div>
    );
}
 
export default AddTool;