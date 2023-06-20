import React, { useEffect, useState } from 'react'
//import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
//import 'react-quill/dist/quill.snow.css';
import { Helmet } from 'react-helmet'
//import CurrencyInput from 'react-currency-input-field';



import './view-item.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';



function ViewItem(){
    

    const location = useLocation();
    const productToView = location.state.productToView;
    const [imagePreview] = useState(null);

    useEffect(() => {
        // Fetch item details including the image from the backend
        axios.get(`http://localhost:5000/api/products/${productToView._id}`) // Replace with your API endpoint for fetching item details
          .then(response => {
            setProductToView(response.data);
          })
          .catch(error => {
            console.error('Error fetching item details:', error);
          });
      }, []);
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
      
        reader.onloadend = () => {
          setImagePreview(reader.result);
        }
      
        if (file) {
          reader.readAsDataURL(file);
        }
      }

  return (
    <div className="addnew-item-container">
      <Helmet>
        <title>View Item</title>
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
          <Link to= '/'>Customer</Link>
          </button></span>
        </span>
        <span className="addnew-item-text04">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Supplier
          </Link></button></span>
        </span>
        <span className="addnew-item-text06">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Payement</Link>
          </button></span>
        </span>
        <span className="addnew-item-text08">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Store Items</Link>
          </button></span>
        </span>
        <span className="addnew-item-text10">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'> Renting</Link>
          </button></span>
        </span>
        <span className="addnew-item-text12">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'> Inventory</Link></button></span>
        </span>
        <span className="addnew-item-text14">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Utility Bills</Link></button></span>
        </span>
        <img
          src="/playground_assets/rectangle14button1172-c8e6-200h.png"
          alt="Rectangle14button1172"
          className="addnew-item-rectangle14button"
        />
        <span className="addnew-item-text16">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Log Out</Link></button></span>
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
        
          //src="/playground_assets/rectangle271256-745-400h.png"
          //alt="Rectangle271256"
          <input type="file" onChange={handleImageChange} />
    
     <img src={`http://localhost:5000/${productToView?.image}`} alt={productToView.name} className ='addnew-item-rectangle27' />
          className="addnew-item-rectangle27"
          
        
        //input type='image' placeholder='Item Name' name='name' value={productToView .image}
         className ='addnew-item-rectangle27' ///input
        <div className="addnew-item-uilimageupload"></div>
        //img
          src="/playground_assets/vector1260-c6vl.svg"
          alt="Vector1260"
          className="addnew-item-vector"
        ///
        <form  >
        <span className="addnew-item-text22">
          <span>Item Name</span>
        </span>
        <img
          src="/playground_assets/rectangle29input1263-q5hg-200h.png"
          alt="Rectangle29input1263"
          className="addnew-item-rectangle29input"
          
        />
        <span><input type='text' placeholder='Item Name' name='name' value={productToView .name}
         className ='addnew-item-rectangle29input' ></input></span>
        <span className="addnew-item-text24">
          <span>Item Description</span>
        </span>
       
        <span>
        
          <textarea type='text' name='description' placeholder='Item Description'
       value={productToView .description} 
        className ='addnew-item-rectangle32input'></textarea></span>
        <span className="addnew-item-text26">
          <span>Item Category</span>
        </span>
        <img
          src="/playground_assets/rectangle31input4267-3f9m-200h.png"
          alt="Rectangle31input4267"
          className="addnew-item-rectangle31input"
        />
        <span><input type='text' placeholder='Item Category'name='category' value={productToView .category}
        className ='addnew-item-rectangle31input' ></input></span>
        <img
          src="/playground_assets/rectangle33input4272-ogkl-200h.png"
          alt="Rectangle33input4272"
          className="addnew-item-rectangle33input"
        />
        <span className="addnew-item-text28">
          <span>Item Price</span>
        </span>
        <img
          src="/playground_assets/rectangle30input4265-f39a-200h.png"
          alt="Rectangle30input4265"
          className="addnew-item-rectangle30input"
        />
        <input type='number' placeholder='price' name='price' className='addnew-item-rectangle30input'
         value={productToView .price} />
         
       
        <span className="addnew-item-text32" style={{left:"1000px"}}>
          <span>Item Quantity</span>
        </span>
        <img
          src="/playground_assets/rectangle57673-9evg-200h.png"
          alt="Rectangle57673"
          className="addnew-item-rectangle57input"
        />
        <span><input type='text' placeholder='Item Quantity' name='quantity' className ='addnew-item-rectangle33input'
        value={productToView .quantity} ></input></span>
        <span className="addnew-item-text34">
          <span>VIEW ITEM</span>
        </span>
        <img
          src="/playground_assets/ellipse1694-i1t-200h.png"
          alt="Ellipse1694"
          className="addnew-item-ellipse1"
        />
       
       
        
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


export default ViewItem