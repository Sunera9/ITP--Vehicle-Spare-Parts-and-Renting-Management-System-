import React, {useState} from 'react'

import { Helmet } from 'react-helmet'

import './addnew-supply.css'
import { toast } from 'react-toastify'
import { addsupply,loginSupplier } from '../services/supplierService'
import { useDispatch } from 'react-redux'
import { Link, useHistory, useNavigate } from 'react-router-dom'
import { SET_LOGIN, SET_NAME } from '../redux/features/auth/supplySlice'


const initialState = {
  company_name : "",
  item_name: "",
  quantity:"",
  price:"",
  Order_status:"",
  date:"",  
} 

const AddnewSupply = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setformData] = useState(initialState)

  const dispatch2 = useDispatch();

  //logout
  const logout = async () => {
    await logoutEmployee();
    await dispatch2(SET_LOGIN(false));
    history.push("/supplier-login");
}

  //destructuring form data
  const {company_name, item_name, quantity, price, Order_status, date} = formData

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setformData({...formData, [name]: value});
};


const addsup =async (e) => {
 e.preventDefault()

  if(!company_name  || !item_name || !quantity || !price || !Order_status || !date){
    return toast.error("All fields are  required")
  }

  const userData = {
    company_name, item_name, quantity, price, Order_status, date
  }


  setIsLoading(true)
  try{
    const data = await addsupply(userData)
    //console.log(data)
    dispatch(SET_NAME(data.company_name));
    history.push("/supply-dashboard2");
    setIsLoading(false);

  }catch(error) {
    setIsLoading(false);
    console.log(error.message);
  }
};
 

  return (
    <div className="addnew-supply-container">
      <Helmet>
        <title>Shantha Motors®- Add new supply</title>
      </Helmet>
      <div className="addnew-supply-addnew-supply">
        <img
          src="/playground_assets_AddSupply/blurredbackground11svg592-k268-900h.png"
          alt="blurredBackground11svg592"
          className="addnew-supply-blurred-background11svg"
        />
        <div className="addnew-supply-group27">
          <img
            src="/playground_assets_AddSupply/rectangle26svg1940-4vbb-500h.png"
            alt="Rectangle26svg1940"
            className="addnew-supply-rectangle26svg"
          />
          <img
            src="/playground_assets_AddSupply/rectangle2svg199-tzo7-200h.png"
            alt="Rectangle2svg199"
            className="addnew-supply-rectangle2svg"
          />
          <img
            src="/playground_assets_AddSupply/rectangle3svg1910-a1qf-800h.png"
            alt="Rectangle3svg1910"
            className="addnew-supply-rectangle3svg"
          />

        </div>
        <img
          src="/playground_assets_AddSupply/pnglogoimage1svg1911-shbl-200h.png"
          alt="PNGLogoimage1svg1911"
          className="addnew-supply-pn-logoimage1svg"
        />

        {/*Add Supply Form */}
        <form onSubmit={ addsup }>
          <span className="addnew-supply-text88">
          </span>

        <div className="addnew-supply-group26">
          <span className="addnew-supply-text">
          <span><button type="submit" style={{ color: 'white',fontWeight: 'bold',textAlign:'center' }}> Add Supply </button></span>
          </span>
        </div>
        <div className="addnew-supply-group25">
          <img
            src="/playground_assets_AddSupply/rectangle10button1918-40ye-200h.png"
            alt="Rectangle10button1918"
            className="addnew-supply-rectangle10button"
          />
          <img
            src="/playground_assets_AddSupply/rectangle15button1919-9yr8-200h.png"
            alt="Rectangle15button1919"
            className="addnew-supply-rectangle15button"
          />
          <img
            src="/playground_assets_AddSupply/rectangle16button1920-rzn8-200h.png"
            alt="Rectangle16button1920"
            className="addnew-supply-rectangle16button"
          />
          <img
            src="/playground_assets_AddSupply/rectangle17button1921-h7t-200h.png"
            alt="Rectangle17button1921"
            className="addnew-supply-rectangle17button"
          />
          <img
            src="/playground_assets_AddSupply/rectangle18button1922-o0o-200h.png"
            alt="Rectangle18button1922"
            className="addnew-supply-rectangle18button"
          />
          <img
            src="/playground_assets_AddSupply/rectangle19button1923-wnii-200h.png"
            alt="Rectangle19button1923"
            className="addnew-supply-rectangle19button"
          />
          <img
            src="/playground_assets_AddSupply/rectangle20button1924-sdz9-200h.png"
            alt="Rectangle20button1924"
            className="addnew-supply-rectangle20button"
          />
          <img
            src="/playground_assets_AddSupply/rectangle21button1925-0lzj-200h.png"
            alt="Rectangle21button1925"
            className="addnew-supply-rectangle21button"
          />
        </div>
        <div className="addnew-supply-group24">
          <span className="addnew-supply-text02">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Employee</button></span>
          </span>
          <span className="addnew-supply-text04">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Customer</button></span>
          </span>
          <span className="addnew-supply-text06">
            <span><Link to="/supply-dashboard2">Supplier</Link></span>
          </span>
          <span className="addnew-supply-text08">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Payment</button></span>
          </span>
          <span className="addnew-supply-text10">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Store Items</button></span>
            </span>
          <span className="addnew-supply-text11">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Renting</button></span>
          </span>
          <span className="addnew-supply-text13">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Inventory</button></span>
          </span>
          <span className="addnew-supply-text15">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Utility Bills</button></span>
          </span>
        </div>
        <div className="addnew-supply-group23">
          <img
            src="/playground_assets_AddSupply/rectangle14button1934-3s3-200h.png"
            alt="Rectangle14button1934"
            className="addnew-supply-rectangle14button"
          />
          <span className="addnew-supply-text17">
            <span>Log Out</span>
          </span>
        </div>

        <img
          src="/playground_assets_AddSupply/mdiaccount1936-as5u.svg"
          alt="mdiaccount1936"
          className="addnew-supply-mdiaccount"
        />


          {/**group 21 */}
          <div className="addnew-supply-group21">
            <img
              src="/playground_assets_AddSupply/rectangle29input1946-4z2-200h.png"
              alt="Rectangle29input1946"
              className="addnew-supply-rectangle29input"
            />

            <input className='addnew-supply-rectangle29input' placeholder='Company Name' type="text" name="company_name"
             value={company_name} onChange={handleInputChange}
             style={{textAlign:'center', fontWeight:'bold'}}/>

            <img
              src="/playground_assets_AddSupply/rectangle49input1455-xe1-200h.png"
              alt="Rectangle49input1455"
              className="addnew-supply-rectangle49input"
            />

            <input className='addnew-supply-rectangle49input' placeholder='Order Status' type="text" name="Order_status"
            value={Order_status} onChange={handleInputChange}
            style={{textAlign:'center', fontWeight:'bold'}}
               />

            <img
              src="/playground_assets_AddSupply/rectangle50input1455-fsdc-200h.png"
              alt="Rectangle50input1455"
              className="addnew-supply-rectangle50input"
            />

            <input className='addnew-supply-rectangle50input' placeholder='Date' type="date" name="date"
              value={date} onChange={handleInputChange}
              style={{textAlign:'center', fontWeight:'bold'}} />
          </div>
        

        {/**group 20 */}
        <div className="addnew-supply-group20">
          

          


          <img
            src="/playground_assets_AddSupply/rectangle54input1455-dqul-200h.png"
            alt="Rectangle54input1455"
            className="addnew-supply-rectangle54input"
          />
          <input className='addnew-supply-rectangle54input' placeholder='item name' type="text" name="item_name"
             value={item_name} onChange={handleInputChange}
             style={{textAlign:'center', fontWeight:'bold'}} />


        </div>


        {/**group 19 */}
        <div className="addnew-supply-group19">
          <span className="addnew-supply-text19">
            <span>Item Name</span>
          </span>
          <span className="addnew-supply-text21">
            <span>Item Quantity</span>
          </span>
          <span className="addnew-supply-text23">
            <span>Unit Price(Rs.)</span>
          </span>
        </div>

        <img
          src="/playground_assets_AddSupply/rectangle55input1456-c7ff-200h.png"
          alt="Rectangle55input1456"
          className="addnew-supply-rectangle55input"
        />
        <input className='addnew-supply-rectangle55input' placeholder='qty' type="text" name="quantity"
            value={quantity} onChange={handleInputChange}
            style={{textAlign:'center', fontWeight:'bold'}} />


        <img
          src="/playground_assets_AddSupply/rectangle56input1456-xiwa-200h.png"
          alt="Rectangle56input1456"
          className="addnew-supply-rectangle56input"
        />
        <input className='addnew-supply-rectangle56input' placeholder='price' type="text" name="price"
             value={price} onChange={handleInputChange}
             style={{textAlign:'center', fontWeight:'bold'}} />

        <div className="addnew-supply-group22">
          <span className="addnew-supply-text25">
            <span>Company Name:</span>
          </span>
          <span className="addnew-supply-text27">
            <span>Order Status:</span>
          </span>
          <span className="addnew-supply-text29">
            <span>Date:</span>
          </span>
        </div>
        <div className="addnew-supply-group18">
          <span className="addnew-supply-text31">
            <span>ADD NEW SUPPLY</span>
          </span>
        </div>
        </form>
      </div>
    </div>
  )
}

export default AddnewSupply
