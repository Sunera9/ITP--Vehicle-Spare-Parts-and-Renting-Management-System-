import React from 'react'

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import './chat-section.css'

const ChatSection = (props) => {
  return (
    <div className="chat-section-container">
      <Helmet>
        <title>Shantha Motors®- Chat Section</title>
      </Helmet>
      <div className="chat-section-chat-section">
        <div className="chat-section-group45">
          <img
            src="/playground_assets_chat/blurredbackground12svg5962-03me-800h.png"
            alt="blurredBackground12svg5962"
            className="chat-section-blurred-background12svg"
          />
          <img
            src="/playground_assets_chat/pnglogoimage1svg2890-cbnqn-200h.png"
            alt="PNGLogoimage1svg2890"
            className="chat-section-pn-logoimage1svg"
          />
        </div>
        <img
          src="/playground_assets_chat/rectangle26svg2811-1ivb-500h.png"
          alt="Rectangle26svg2811"
          className="chat-section-rectangle26svg"
        />

        {/*chat section form */}
        <form method='post'>
          <span className="chat-section-text">
          </span>
          
          <div className="chat-section-group44">
            <span className="chat-section-text">
              <span><button type="submit" style={{ color: 'white',fontWeight: 'bold',textAlign:'center' }}> Send Message </button></span>
            </span>
          </div>


          <div className="chat-section-group40">
            <img
              src="/playground_assets_chat/rectangle29input2812-r8o7-200h.png"
              alt="Rectangle29input2812"
              className="chat-section-rectangle29input"
            />

            <input className='chat-section-rectangle29input' placeholder='Enter Subject' type="text" name="subject"
              style={{ textAlign: 'center' }} />

            <img
              src="/playground_assets_chat/rectangle31input2814-51bo-200h.png"
              alt="Rectangle31input2814"
              className="chat-section-rectangle31input"
            />

            <input className='chat-section-rectangle31input' placeholder='Enter Email' type="email" name="email"
              style={{ textAlign: 'center' }} />

            <img
              src="/playground_assets_chat/rectangle30input2814-ewnb-200h.png"
              alt="Rectangle30input2814"
              className="chat-section-rectangle30input"
            />
            <input className='chat-section-rectangle30input' placeholder='Enter Message' type="text" name="message"
              style={{ textAlign: 'center' }} />

          </div>
          <div className="chat-section-group41">
            <span className="chat-section-text02">
              <span>Subject :</span>
            </span>
            <span className="chat-section-text04">
              <span>Email :</span>
            </span>
            <span className="chat-section-text06">
              <span>Meassage :</span>
            </span>
          </div>
          <div className="chat-section-group39">
            <img
              src="/playground_assets_chat/rectangle47svg5964-xhzf-200h.png"
              alt="Rectangle47svg5964"
              className="chat-section-rectangle47svg"
            />
            <span className="chat-section-text08">
              <span>CHAT SECTION</span>
            </span>
          </div>
          <img
            src="/playground_assets_chat/rectangle3svg1852-l6wd-300w.png"
            alt="Rectangle3svg1852"
            className="chat-section-rectangle3svg"
          />
          <img
            src="/playground_assets_chat/rectangle2svg1853-nvl-200h.png"
            alt="Rectangle2svg1853"
            className="chat-section-rectangle2svg"
          />
          <div className="chat-section-group28">
            <img
              src="/playground_assets_chat/rectangle10button1856-vco9-200h.png"
              alt="Rectangle10button1856"
              className="chat-section-rectangle10button"
            />
            <img
              src="/playground_assets_chat/rectangle15button1857-3k-200h.png"
              alt="Rectangle15button1857"
              className="chat-section-rectangle15button"
            />
            <img
              src="/playground_assets_chat/rectangle16button1858-w7xo-200h.png"
              alt="Rectangle16button1858"
              className="chat-section-rectangle16button"
            />
            <img
              src="/playground_assets_chat/rectangle17button1859-h6j-200h.png"
              alt="Rectangle17button1859"
              className="chat-section-rectangle17button"
            />
            <img
              src="/playground_assets_chat/rectangle18button1851-hyk-200h.png"
              alt="Rectangle18button1851"
              className="chat-section-rectangle18button"
            />
            <img
              src="/playground_assets_chat/rectangle19button1851-dae-200h.png"
              alt="Rectangle19button1851"
              className="chat-section-rectangle19button"
            />
            <img
              src="/playground_assets_chat/rectangle20button1851-5ya8-200h.png"
              alt="Rectangle20button1851"
              className="chat-section-rectangle20button"
            />
            <img
              src="/playground_assets_chat/rectangle21button1851-3dpf-200h.png"
              alt="Rectangle21button1851"
              className="chat-section-rectangle21button"
            />
          </div>
          <div className="chat-section-group29">
            <span className="chat-section-text10">
            <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Employee</button></span>
            </span>
            <span className="chat-section-text12">
            <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Customer</button></span>
            </span>
            <span className="chat-section-text14">
            <span><Link to="/supply-dashboard2">Supplier</Link></span>
            </span>
            <span className="chat-section-text16">
            <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Payment</button></span>
            </span>
            <span className="chat-section-text18">
            <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Store Items</button></span>
            </span>
            <span className="chat-section-text20">
            <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Renting</button></span>
            </span>
            <span className="chat-section-text22">
            <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Inventory</button></span>
            </span>
            <span className="chat-section-text24">
            <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Utility Bills</button></span>
            </span>
          </div>
          <img
            src="/playground_assets_chat/pnglogoimage1svg1852-mr6q-200h.png"
            alt="PNGLogoimage1svg1852"
            className="chat-section-pn-logoimage1svg1"
          />
          <div className="chat-section-group281">
            <img
              src="/playground_assets_chat/rectangle14button1852-jned-200h.png"
              alt="Rectangle14button1852"
              className="chat-section-rectangle14button"
            />
            <span className="chat-section-text26">
              <span>Log Out</span>
            </span>
          </div>
          <img
            src="/playground_assets_chat/mdiaccount1852-4ft8.svg"
            alt="mdiaccount1852"
            className="chat-section-mdiaccount"
          />
        </form>
      </div>
    </div>
  )
}

export default ChatSection
