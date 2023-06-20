import React,{ useEffect, useState } from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'


import './update-item.css'
import axios from 'axios'

const UpdateProductPage = (props) => {
  const [product, setProduct] = useState(props.location.state.productToUpdate);
  const history = useHistory();

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  }

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Update product data on backend
      const response = await fetch(`http://localhost:5000/api/products/${product._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
      if (response.ok) {
        const updatedProduct = await response.json();
        // Redirect to product details page after successful update
        history.push(`/store-items`);
      } else {
        console.error('Error updating product:', response.statusText);
      }
    } catch (err) {
      console.error('Error updating product:', err);
    }
  }

  return (
    <div className="update-item-container">
      <Helmet>
        <title>Update Product</title>
      </Helmet>
      <div className="update-item-update-item">
        <img
          src="/playground_assets/blurredbackground26911-vs1w-1600w.png"
          alt="blurredBackground26911"
          className="update-item-blurred-background2"
        />
        <img
          src="/playground_assets/rectangle26131-j5lq-200h.png"
          alt="Rectangle26131"
          className="update-item-rectangle2"
        />
        <img
          src="/playground_assets/rectangle36132-62t-1100h.png"
          alt="Rectangle36132"
          className="update-item-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage16133-gzga-200h.png"
          alt="PNGLogoimage16133"
          className="update-item-pn-logoimage1"
        />
        <img
          src="/playground_assets/rectangle10button6134-gtw9-200h.png"
          alt="Rectangle10button6134"
          className="update-item-rectangle10button"
        />
        <img
          src="/playground_assets/rectangle15button6135-cw13-200h.png"
          alt="Rectangle15button6135"
          className="update-item-rectangle15button"
        />
        <img
          src="/playground_assets/rectangle16button6136-ruqp-200h.png"
          alt="Rectangle16button6136"
          className="update-item-rectangle16button"
        />
        <img
          src="/playground_assets/rectangle17button6137-ky-200h.png"
          alt="Rectangle17button6137"
          className="update-item-rectangle17button"
        />
        <img
          src="/playground_assets/rectangle18button6138-km4-200h.png"
          alt="Rectangle18button6138"
          className="update-item-rectangle18button"
        />
        <img
          src="/playground_assets/rectangle19button6139-31g-200h.png"
          alt="Rectangle19button6139"
          className="update-item-rectangle19button"
        />
        <img
          src="/playground_assets/rectangle20button6140-f32n-200h.png"
          alt="Rectangle20button6140"
          className="update-item-rectangle20button"
        />
        <img
          src="/playground_assets/rectangle21button6141-0nzh-200h.png"
          alt="Rectangle21button6141"
          className="update-item-rectangle21button"
        />
        <span className="update-item-text">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Employee</Link>
          </button></span>
        </span>
        <span className="update-item-text02">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Customer</Link>
          </button></span>
        </span>
        <span className="update-item-text04">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
            <Link to= '/'>Supplier</Link>
            </button></span>
        </span>
        <span className="update-item-text06">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Payement</Link>
          </button></span>
        </span>
        <span className="update-item-text08">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Store Items</Link>
          </button></span>
        </span>
        <span className="update-item-text10">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Renting</Link>
          </button></span>
        </span>
        <span className="update-item-text12">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
            <Link to= '/'>Inventory</Link>
          </button></span>
        </span>
        <span className="update-item-text14">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Utility Bills</Link></button></span>
        </span>
        <img
          src="/playground_assets/rectangle14button6150-e8tm-200h.png"
          alt="Rectangle14button6150"
          className="update-item-rectangle14button"
        />
        <span className="update-item-text16">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
            <Link to= '/'>Log Out</Link>
            </button></span>
        </span>
        <img
          src="/playground_assets/mdiaccount6152-dpd.svg"
          alt="mdiaccount6152"
          className="update-item-mdiaccount"
        />
        <img
          src="/playground_assets/josepintoyempsqf8z8unsplash26154-6poc-1200w.png"
          alt="josepintoyeMpSqF8Z8unsplash26154"
          className="update-item-josepintoye-mp-sq-f8z8unsplash2"
        />
        <img
          src="/playground_assets/josepintoyempsqf8z8unsplash36155-wj1-1200w.png"
          alt="josepintoyeMpSqF8Z8unsplash36155"
          className="update-item-josepintoye-mp-sq-f8z8unsplash3"
        />
        <img
          src="/playground_assets/rectangle266111-pbf4-700h.png"
          alt="Rectangle266111"
          className="update-item-rectangle26"
        />
        <img
          src="/playground_assets/line16112-bpl9.svg"
          alt="Line16112"
          className="update-item-line1"
        />
       
 <img src={`http://localhost:5000/${product.image}`} alt={product.name} className ='update-item-rectangle27' />

<form onSubmit={handleSubmit}>
        <span className="update-item-text18">

          <span>Item Name</span>
        </span>
        <img
          src="/playground_assets/rectangle29input6115-xvb-200h.png"
          alt="Rectangle29input6115"
          className="update-item-rectangle29input"
        />
        <span><input type='text' className='update-item-rectangle29input' id='name' name='name'
         value={product.name} onChange={handleChange} required style={{ textAlign: 'center'}} /></span>
        <span className="update-item-text20">
          <span>Item Discription</span>
        </span>
        <img
          src="/playground_assets/rectangle32input6117-zfm-200h.png"
          alt="Rectangle32input6117"
          className="update-item-rectangle32input"
        />
      
        <span><input type='text' className='update-item-rectangle32input' id='name' name='description'
         value={product.description} onChange={handleChange} required style={{ textAlign: 'center'}} /></span>
        
        <span className="update-item-text24">
          <span>Item Category</span>
        </span>
        <img
          src="/playground_assets/rectangle31input6120-tnjud-200h.png"
          alt="Rectangle31input6120"
          className="update-item-rectangle31input"
        />
        <span><input type='text' className='update-item-rectangle31input' id='name' name='category'
         value={product.category} onChange={handleChange} required style={{ textAlign: 'center'}} /></span>
        <span className="update-item-text28">
          <span>Item Price</span>
        </span>
        <img
          src="/playground_assets/rectangle30input6123-ds3c-200h.png"
          alt="Rectangle30input6123"
          className="update-item-rectangle30input"
        />
        <span><input type='number' className='update-item-rectangle30input' id='name' name='price'
         value={product.price} onChange={handleChange} required style={{ textAlign: 'center'}} /></span>
        <span className="update-item-text34">
          <span>Item Quantity</span>
        </span>
        <img
          src="/playground_assets/rectangle33input6127-g80w-200h.png"
          alt="Rectangle33input6127"
          className="update-item-rectangle33input"
        />
        <span><input type='text' className='update-item-rectangle33input' id='name' name='quantity'
         value={product.quantity} onChange={handleChange} required style={{ textAlign: 'center'}} /></span>
        <span className="update-item-text38">
          
        </span>
        --!img
          src="/playground_assets/rectangle28button616-7io-200h.png"
          alt="Rectangle28button616"
          className="update-item-rectangle28button"
        /!--
        <img
          src="/playground_assets/rectangle7button614-5htb-200h.png"
          alt="Rectangle7button614"
          className="update-item-rectangle7button"
        />
        <span className="update-item-text40">
          <span><button type='submit'  style={{ color: 'white', fontWeight: 'bold' }}>
          Update Item</button></span>
        </span>
        <span className="update-item-text42">
          <span></span>
        </span>
        <img
          src="/playground_assets/ellipse17012-ovfm-200h.png"
          alt="Ellipse17012"
          className="update-item-ellipse1"
        />
        <img
          src="/playground_assets/mdifiledocumentedit7013-yod7.svg"
          alt="mdifiledocumentedit7013"
          className="update-item-mdifiledocumentedit"
        />
        <img
          src="/playground_assets/rectangle577215-xxxg-200h.png"
          alt="Rectangle577215"
          className="update-item-rectangle57"
        />
        <span className="update-item-text44">
          <span>UPDATE ITEM</span>
        </span>
        </form>
      </div>
    </div>
  )
}

export default UpdateProductPage
