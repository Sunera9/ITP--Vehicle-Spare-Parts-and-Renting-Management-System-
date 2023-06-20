import React, { useEffect, useState } from 'react'
//import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
//import 'react-quill/dist/quill.snow.css';
import { Helmet } from 'react-helmet'
//import CurrencyInput from 'react-currency-input-field';
import axios from 'axios';

import './addnew-item.css'

function AddnewItem() {
 // const navigate = useNavigate()
  const [name,setName] =useState('')
  const [category,setCategory] = useState('')
  const [quantity,setQuantity] = useState('')
  const [price,setPrice] = useState('')
  const [description,setDescription] = useState('')
  const [image,setImage] = useState('')
  console.log(image)

 // const [imagePreview, setImagePreview] = useState(null);
  useEffect(() => {
    
  })

  const handleChangeName = (e) => {
      setName(e.target.value)
  }
  const handleChangeCategory = (e) => {
    setCategory(e.target.value)
}
const handleChangeQuantity= (e) => {
  setQuantity(e.target.value)
}
const handleChangePrice= (e) => {
  setPrice(e.target.value)
}
const handleChangeDesc= (e) => {
  setDescription(e.target.value)
}
const handleChangeImage = (e) => {
  setImage(e.target.value)

 
}

const handleClick = ()=> {
  console.log(name,category,quantity,price,description,image)

  const formData = new FormData
  formData.append('name',name)
  formData.append('category',category)
  formData.append('quantity',quantity)
  formData.append('price',price)
  formData.append('description',description)
  formData.append('image',image)
  axios.post('http://localhost:5000/api/products/addProduct',
  formData,{
    headers: {'Authorization': localStorage.getItem('token')}
  }
  )
  .then ((res) => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err,"err")
  })
}

//view product
const handleviewProduct = (productToView) => {
  //navigate to update product page
  history.push({
    pathname:`/view-item/${productToView._id}`,
    state: {productToView}
  });
}



return (
  <div className="addnew-item-container">
    <Helmet>
      <title>Add New Item</title>
    </Helmet>
    <div className="addnew-item-addnew-item">
      <img
        src="/playground_assets/blurredbackground1672-k0j-1600w.png"
        alt="blurredBackground1672"
        className="addnew-item-blurred-background1"
      />
      <img
        src="/playground_assets/rectangle21145-urb-200h.png"
        alt="Rectangle21145"
        className="addnew-item-rectangle2"
      />
      <img
        src="/playground_assets/rectangle31146-r454-1100h.png"
        alt="Rectangle31146"
        className="addnew-item-rectangle3"
      />
      <img
        src="/playground_assets/pnglogoimage11147-1frv-200h.png"
        alt="PNGLogoimage11147"
        className="addnew-item-pn-logoimage1"
      />
      <img
        src="/playground_assets/rectangle10button1156-mb7q-200h.png"
        alt="Rectangle10button1156"
        className="addnew-item-rectangle10button"
      />
      <img
        src="/playground_assets/rectangle15button1157-kwe-200h.png"
        alt="Rectangle15button1157"
        className="addnew-item-rectangle15button"
      />
      <img
        src="/playground_assets/rectangle16button1158-8cog-200h.png"
        alt="Rectangle16button1158"
        className="addnew-item-rectangle16button"
      />
      <img
        src="/playground_assets/rectangle17button1159-2a8-200h.png"
        alt="Rectangle17button1159"
        className="addnew-item-rectangle17button"
      />
      <img
        src="/playground_assets/rectangle18button1160-7cu8-200h.png"
        alt="Rectangle18button1160"
        className="addnew-item-rectangle18button"
      />
      <img
        src="/playground_assets/rectangle19button1161-0o3-200h.png"
        alt="Rectangle19button1161"
        className="addnew-item-rectangle19button"
      />
      <img
        src="/playground_assets/rectangle20button1162-i0d-200h.png"
        alt="Rectangle20button1162"
        className="addnew-item-rectangle20button"
      />
      <img
        src="/playground_assets/rectangle21button1163-ski8-200h.png"
        alt="Rectangle21button1163"
        className="addnew-item-rectangle21button"
      />
      <span className="addnew-item-text">
        <span><button style={{color: 'black',fontWeight: 'bold'}}>
        <Link to= '/'>Employee</Link>
        </button></span>
      </span>
      <span className="addnew-item-text02">
        <span><button style={{color:'black',fontWeight: 'bold'}}>
        <Link to= '/'>Customer
        </Link></button></span>
      </span>
      <span className="addnew-item-text04">
        <span><button style={{color:'black',fontWeight: 'bold'}}>
        <Link to= '/'>Supplier</Link>
        </button></span>
      </span>
      <span className="addnew-item-text06">
        <span><button style={{color:'black',fontWeight: 'bold'}}>
        <Link to= '/'>Payement</Link>
        </button></span>
      </span>
      <span className="addnew-item-text08">
        <span><button style={{color:'black',fontWeight: 'bold'}}>
        <Link to= '/'> Store Items</Link>
          </button></span>
      </span>
      <span className="addnew-item-text10">
        <span><button style={{color:'black',fontWeight: 'bold'}}>
        <Link to= '/'>Renting</Link>
        </button></span>
      </span>
      <span className="addnew-item-text12">
        <span><button style={{color:'black',fontWeight: 'bold'}}>
        <Link to= '/'>Inventory</Link>
        </button></span>
      </span>
      <span className="addnew-item-text14">
        <span><button style={{color:'black',fontWeight: 'bold'}}>
        <Link to= '/'>Utility Bills</Link>
        </button></span>
      </span>
      <img
        src="/playground_assets/rectangle14button1172-c8e6-200h.png"
        alt="Rectangle14button1172"
        className="addnew-item-rectangle14button"
      />
      <span className="addnew-item-text16">
        <span><button style={{color:'black',fontWeight: 'bold'}}>
        <Link to= '/'>Log Out</Link>
        </button></span>
      </span>
      <img
        src="/playground_assets/mdiaccount1174-u5i.svg"
        alt="mdiaccount1174"
        className="addnew-item-mdiaccount"
      />
      <img
        src="/playground_assets/josepintoyempsqf8z8unsplash2537-cjpp-1200w.png"
        alt="josepintoyeMpSqF8Z8unsplash2537"
        className="addnew-item-josepintoye-mp-sq-f8z8unsplash2"
      />
     
      <img
        src="/playground_assets/rectangle281257-7c0o-200h.png"
        alt="Rectangle281257"
        className="addnew-item-rectangle28"
      />
    
      <img
        src="/playground_assets/materialsymbolsadd1176-njch.svg"
        alt="materialsymbolsadd1176"
        className="addnew-item-materialsymbolsadd"
      />
      <img
        src="/playground_assets/rectangle261255-4nmh-700h.png"
        alt="Rectangle261255"
        className="addnew-item-rectangle26"
      />
      <img
        src="/playground_assets/line11258-onb.svg"
        alt="Line11258"
        className="addnew-item-line1"
      />
     
      <div className="addnew-item-uilimageupload"></div>
      //img
        src="/playground_assets/vector1260-c6vl.svg"
        alt="Vector1260"
        className="addnew-item-vector"
     // 
      <form  >
      <span className="addnew-item-text22" style={{ left:"550px" }}>
        <span>Item Name</span>
      </span>
 
      <span>
      <input type='text' placeholder='Item Name' name='name' 
       className ='addnew-item-rectangle29input' onChange={handleChangeName} style={{ left:"550px" }}></input>
      </span>
      <span className="addnew-item-text24" style={{ left:"550px" }}>
        <span>Item Description</span>
      </span>
      
      <span>
      <textarea type='text' name='description' placeholder='Item Description'
     onChange={handleChangeDesc} style={{ left:"550px" }}
      className ='addnew-item-rectangle32input'></textarea>
     </span>
      <span className="addnew-item-text26" style={{ left:"550px" }}>
        <span>Item Category</span>
      </span>
     
      <span>
      <input type='text' placeholder='Item Category'name='category'
       className ='addnew-item-rectangle31input' onChange={handleChangeCategory} style={{ left:"550px" }}></input>
       </span>
      
      <span className="addnew-item-text28" style={{ left:"550px" }} >
        <span>Item Price</span>
      </span>
      
    <input type='number' placeholder='price' name='price' className='addnew-item-rectangle30input' style={{ left:"550px" }}
     onChange={handleChangePrice}/>
       
      <span className="addnew-item-text32" style={{ left:"800px" }}>
        <span>Item Quantity</span>
      </span>
     
      <span> 
      <input type='text' placeholder='Item Quantity' name='quantity' className ='addnew-item-rectangle33input'
      onChange={handleChangeQuantity} style={{ left:"800px" }}></input>
      </span>
      <span className="addnew-item-text34">
        <span>ADD NEW ITEM</span>
      </span>
      <img
        src="/playground_assets/ellipse1694-i1t-200h.png"
        alt="Ellipse1694"
        className="addnew-item-ellipse1"
      />
       
      <img
        src="/playground_assets/rectangle58button695-v1v-200h.png"
        alt="Rectangle58button695"
        className="addnew-item-rectangle58button"
        style={{top:"825px", height:"40px"}}
      />
      /input
      //src="/playground_assets/rectangle271256-745-400h.png"
      alt="Rectangle271256"
      className="addnew-item-rectangle27"
      
      //input
     

     
      <span className="addnew-item-text36" style={{top:"825px"}} >
     
      <label htmlFor='select-image'  >
      
      <input type="file"  name  ="image" onChange={(e) => setImage(e.target.files[0])}  />
     



     
        </label>
      
      </span>
      <img
        src="/playground_assets/rectangle59button696-uqxa-200h.png"
        alt="Rectangle59button696"
        className="addnew-item-rectangle59button"
      />
     
      <span className="addnew-item-text38">
        <span>
          
          <button onClick= {handleClick} style={{color:'white',fontWeight: 'bold'}}>
          <Link to= '/store-items'> Save Item</Link>
          </button></span>
      </span>
      <img
        src="/playground_assets/materialsymbolsaddnotesrounded699-x67t.svg"
        alt="materialsymbolsaddnotesrounded699"
        className="addnew-item-materialsymbolsaddnotesrounded"
      />
      </form>
    </div>
  </div>
)
}

export default AddnewItem



