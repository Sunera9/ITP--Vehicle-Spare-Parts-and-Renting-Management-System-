import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import './add-invent-item.css'

import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { toast } from 'react-toastify'


function AddInventItem () {

  const [addItem, setAddItem] = useState({
    itemName: '',
    sku: '',
    recieveDate: '',
    category: '',
    condition: '',
    brand: '',
    initialPrice: '',
    initialQuantity: '',
    totalPrice: '',
    supplier: '',
  });

  const history = useHistory();

  const handleInputChange = (event) => {

    const { name, value } = event.target;

    //frontend validation for input field in sku
    if (name === 'sku') {
      // Check if the value does not start with "SKU"
      if (!value.startsWith('SKU')) {
        // Notify the user about the invalid input
        toast.error('Field Input must start with "SKU"');
        return; // Stop further execution
      }
    }

    //if the condition true, perform these and auto calculate total
    if (name === 'initialPrice' || name === 'initialQuantity') {
      
      const initialPrice = name === 'initialPrice' ? value : addItem.initialPrice;
      const initialQuantity = name === 'initialQuantity' ? value : addItem.initialQuantity;

      const totalPrice = initialPrice * initialQuantity;

      setAddItem((prevState) => ({
        ...prevState,
        initialPrice,
        initialQuantity,
        totalPrice,
      }));
    } else {
      setAddItem ((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }

    
  };

  const saveInventItem = (event) => {
    //to prevent from refreshing
    event.preventDefault();

    //for the tesing purpose
    //console.log(addItem);

    // Send bill object to backend database
    fetch('http://localhost:5000/api/InventoryItems/addInventoryItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addItem)
    })
    .then(response => response.json())
    .then(data => {
      //console.log('Item saved successfully:', data);
      toast.success(`Item saved successfully: ${data}`);
      history.push("/invent-dashboard");
    })
    .catch(error => {
      toast.error('Error saving Item:', error);
    });
  }
  
  




  return (
    <div className="add-invent-item-container">
      <Helmet>
        <title>addInventItem - exported project</title>
        <meta property="og:title" content="addInventItem - exported project" />
      </Helmet>
      <div className="add-invent-item-add-new-inventitem">
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/3c6634f7-15d9-4a18-9244-dc10b127213f?org_if_sml=1329687"
          alt="blurredBackground133"
          className="add-invent-item-blurred-background"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/a6106333-a1ca-4099-8664-900c70dc76a6?org_if_sml=1343"
          alt="Rectangle791527"
          className="add-invent-item-rectangle79"
        />
        <div className="add-invent-item-menubar">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/ef5c0b43-9fee-492e-8e1a-f0d858ca7d31?org_if_sml=13179"
            alt="Rectangle3I134"
            className="add-invent-item-rectangle3"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/b0df27b5-75fb-4968-8884-9920818a1959?org_if_sml=18959"
            alt="PNGLogoimage1I134"
            className="add-invent-item-pn-logoimage1"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/65bfdd84-f880-4193-a6ee-d416678c3747?org_if_sml=1677"
            alt="Rectangle10I134"
            className="add-invent-item-rectangle10"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/380651fb-d635-4731-b341-d2424bedb15d?org_if_sml=1677"
            alt="Rectangle15I134"
            className="add-invent-item-rectangle15"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/b56e997e-39da-4d01-9ef7-8141506a6411?org_if_sml=1677"
            alt="Rectangle16I134"
            className="add-invent-item-rectangle16"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/7daf0173-bc60-4095-b9ca-b7c93cce5866?org_if_sml=1677"
            alt="Rectangle17I134"
            className="add-invent-item-rectangle17"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/fd160a7c-86c7-446c-bb8d-f44f3293b3d5?org_if_sml=1677"
            alt="Rectangle18I134"
            className="add-invent-item-rectangle18"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/a79edaa8-b368-4664-8f1e-5f0e45b65c77?org_if_sml=1677"
            alt="Rectangle19I134"
            className="add-invent-item-rectangle19"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/d1bce8d3-f5c4-40be-8336-884109c7a801?org_if_sml=1677"
            alt="Rectangle20I134"
            className="add-invent-item-rectangle20"
          />
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/e9c81a47-1b7a-4748-8123-94f28fdc4031?org_if_sml=1677"
            alt="Rectangle21I134"
            className="add-invent-item-rectangle21"
          />
          <span className="add-invent-item-text">
            <span>
              <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/'>Employee</Link>
                </button>
              </span>
            </span>
          </span>
          <span className="add-invent-item-text02">
            <span>
              <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/'>Customer</Link>
                </button>
              </span>
            </span>
          </span>
          <span className="add-invent-item-text04">
            <span>
              <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/'>Supplier</Link>
                </button>
              </span>
            </span>
          </span>
          <span className="add-invent-item-text06">
            <span>
              <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/'>Payment</Link>
                </button>
              </span>
            </span>
          </span>
          <span className="add-invent-item-text08">
            <span>
            <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/'>Store Items</Link>
                </button>
              </span>
            </span>
          </span>
          <span className="add-invent-item-text10">
            <span>
            <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/'>Renting</Link>
                </button>
              </span>
            </span>
          </span>
          <span className="add-invent-item-text12">
            <span>
            <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/'>Inventory</Link>
                </button>
              </span>
            </span>
          </span>
          <span className="add-invent-item-text14">
            <span>
            <span>
                <button style={{color:'black',fontWeight: 'bold'}}>
                  <Link to= '/'>Utility Bills</Link>
                </button>
              </span>
            </span>
          </span>
        </div>
        <span className="add-invent-item-text16">
          <span>ADD NEW ITEM</span>
        </span>
        <div className="add-invent-item-add-new-itemform">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/ffe36ec3-0a36-4355-92ab-61052e1dc16b?org_if_sml=1135749"
            alt="Rectangle49149"
            className="add-invent-item-rectangle49"
          />

          <form onSubmit={saveInventItem}>

            <span className="add-invent-item-text22">
              <span>Item Name</span>
            </span>
            <span>
              <input type='text' placeholder='' name='itemName' className ='add-invent-item-rectangle45input03' 
              value={addItem?.itemName} required onChange={handleInputChange}
              /* value={itemName} onChange={handleInputChange}*/
               style={{textAlign:'center',fontWeight:'bold'}}></input>
            </span>

            <span className="add-invent-item-text20">
            <span>Received Date</span>
          </span>
          <span>
            <input type='date'  name='recieveDate' className ='add-invent-item-rectangle45input02'
            value={addItem?.recieveDate} required onChange={handleInputChange}
            /* value={recieveDate}  onChange={handleInputChange}*/
            style={{textAlign:'center',fontWeight:'bold'}}>
            </input>
          </span>

          <span className="add-invent-item-text24">
            <span>SKU Number</span>
          </span>
          <span>
            <input type="text" className="add-invent-item-rectangle45input04" placeholder='' name='sku' 
            value={addItem?.sku} required onChange={handleInputChange}
            /*value={sku}  onChange={handleInputChange}*/
            style={{textAlign:'center',fontWeight:'bold'}}/>
          </span>

          <span className="add-invent-item-text26">
            <span>Item Condition</span>
          </span>
          <select id="condition" type="text"  className="add-invent-item-rectangle45input01"  name='condition' 
          value={addItem?.condition} required onChange={handleInputChange}
          /*value={condition}  onChange={handleInputChange}*/
            style={{textAlign:'center',fontWeight:'bold'}}>
                <option></option>
                <option value="New">New</option>
  	            <option value="Tobe Purchase">To be Purchase</option>
  	            <option value="Purchase">Purchase</option>
  	            <option value="Tobe Sold">To be Sold</option>
                <option value="Sold">Sold</option>    
          </select>

          <span className="add-invent-item-text28">
            <span>Item Category</span>
          </span>
          <select id="category" type="text" className="add-invent-item-rectangle45input"  name='category' 
          value={addItem?.category} required onChange={handleInputChange}
          /*value={category} onChange={handleInputChange}*/
             style={{textAlign:'center',fontWeight:'bold'}}>
                <option></option>
                <option value="EC">Electric Components</option>
  	            <option value="MC">Mechanical Components</option>
  	            <option value="HC">Hydrolic Components</option>
  	            <option value="MG">Motors & Generators</option>
                <option value="Tools">Tools</option>
                <option value="Others">Others</option>    
          </select>

          <span className="add-invent-item-text30">
            <span>Item Brand</span>
          </span>
          <input type="text" className="add-invent-item-rectangle45input05" placeholder='' name='brand' 
          value={addItem?.brand} required onChange={handleInputChange}
          /*value={brand} onChange={handleInputChange}*/
            style={{textAlign:'center',fontWeight:'bold'}}/>
            
          <span className="add-invent-item-text32">
            <span>Initial Price (per item)</span>
          </span>
          <input type="number" className="add-invent-item-rectangle45input06" placeholder='' name='initialPrice' 
          value={addItem?.initialPrice} required onChange={handleInputChange}
          /*value={initialPrice} onChange={handleInputChange}*/
           style={{textAlign:'center',fontWeight:'bold'}}></input>
            
          <span className="add-invent-item-text34">
            <span>Initial Quantity</span>
          </span>
          <input type="number" className="add-invent-item-rectangle45input07" placeholder='' name='initialQuantity' 
          value={addItem?.initialQuantity} required onChange={handleInputChange}
          /*value={initialQuantity} onChange={handleInputChange}*/
          style={{textAlign:'center',fontWeight:'bold'}}/>
            
          <span className="add-invent-item-text36">
            <span>Total Price</span>
          </span>
          <input type="number" className="add-invent-item-rectangle45input08" placeholder='' name='totalPrice'
          value={addItem?.totalPrice} required onChange={handleInputChange}
          /* value={totalPrice} onChange={handleInputChange}*/
           style={{textAlign:'center',fontWeight:'bold'}}/>
          
          <span className="add-invent-item-text18">
            <span>Supplier</span>
          </span>
          <input type="text" className="add-invent-item-rectangle45input09" placeholder='' name='supplier' 
          value={addItem?.supplier} required onChange={handleInputChange}
          /*value={supplier}  onChange={handleInputChange}*/
           style={{textAlign:'center',fontWeight:'bold'}}/>
           
           <div className="add-invent-item-editbutton">
            <span className="add-invent-item-text38">
              <span>
                <button  type='submit' style={{color:'white' , fontWeight:'bold'}}> 
                    ADD
                </button>
              </span>
            </span>
          </div>

          <div className="add-invent-item-savebutton">
            <span className="add-invent-item-text40">
              <span>
                <button  type='submit' style={{color:'white' , fontWeight:'bold'}}> 
                    <Link to='/invent-dashboard'>CANCEL</Link>
                </button>
              </span>
            </span>
          </div>
          </form>


        </div>

        <div className="add-invent-item-topbar">
          <div className="add-invent-item-topbar1">
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/a0bceb53-e15f-46cd-805d-d574c2be4e16?org_if_sml=1557"
              alt="Rectangle2I101"
              className="add-invent-item-rectangle2"
            />
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f1315bf1-bc1c-4019-b06b-79dece0d3671/c141f8c7-c510-40b4-a03a-fbc49f3d29f6?org_if_sml=1523"
              alt="Rectangle14I101"
              className="add-invent-item-rectangle14"
            />
            <span className="add-invent-item-text42">
              <span>Log Out</span>
            </span>
            <img
              src="/playground_assets/mdiaccounti101-dijq.svg"
              alt="mdiaccountI101"
              className="add-invent-item-mdiaccount"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddInventItem
