import React from 'react'

import { Helmet } from 'react-helmet'

import './home-page.css'
import Navbar from '../navigationbar/navbar'
import { GoogleMap, Marker } from "@react-google-maps/api";
import Component8 from "../footer"

import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const HomePage = (props) => {

  return (
    <>
      <Navbar />
      <div className="home-page-container">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div className="home-page-home-page">
          <div className="home-page-testimonial">
            <img
              src="/playground_assets/path606521-o8kk.svg"
              alt="Path606521"
              className="home-page-path606"
            />
            <div className="home-page-frame31">
              <img
                src="/playground_assets/line2580-lenw.svg"
                alt="Line2580"
                className="home-page-line2"
              />
              <div className="home-page-clientlogos">
                <img
                  src="/playground_assets/image111114-d1qe-200h.png"
                  alt="image111114"
                  className="home-page-image11"
                />
                <img
                  src="/playground_assets/image121114-z1b-200h.png"
                  alt="image121114"
                  className="home-page-image12"
                />
                <img
                  src="/playground_assets/image131114-lbv-200h.png"
                  alt="image131114"
                  className="home-page-image13"
                />
                <img
                  src="/playground_assets/image151115-9ok6-200h.png"
                  alt="image151115"
                  className="home-page-image15"
                />
                <img
                  src="/playground_assets/image161115-272-200h.png"
                  alt="image161115"
                  className="home-page-image16"
                />
              </div>
            </div>
          </div>
          <img
            src="/playground_assets/path6071116-45q8.svg"
            alt="Path6071116"
            className="home-page-path607"
          />
          <div className="home-page-for-engineering-teams">
            <div className="home-page-frame30">
              <div className="home-page-tag">
                <img
                  src="/playground_assets/rectangle36659-04fq.svg"
                  alt="Rectangle36659"
                  className="home-page-rectangle366"
                />
                <span className="home-page-text">
                  <span>Car Rentals</span>
                </span>
                <div className="home-page-compass">
                  <div className="home-page-group28">
                    <img
                      src="/playground_assets/path681513-6pvi.svg"
                      alt="Path681513"
                      className="home-page-path681"
                    />
                    <img
                      src="/playground_assets/path682514-jqg.svg"
                      alt="Path682514"
                      className="home-page-path682"
                    />
                  </div>
                </div>
              </div>
              <span className="home-page-text02 3232Bold">
                <span>Going for a vacation? Need a car?</span>
              </span>
              <span className="home-page-text04">
                <span>
                  Shnatha Motors is now offering affordable rent-a-car services
                  to its customers in addition to selling products
                </span>
              </span>
            </div>
            <img
              src="/playground_assets/carrentalbro211093-euen-700w.png"
              alt="Carrentalbro211093"
              className="home-page-carrentalbro21"
            />
          </div>
          <div className="home-page-for-product-teams">
            <div className="home-page-content">
              <div className="home-page-tag1">
                <img
                  src="/playground_assets/rectangle3663105-z4l7.svg"
                  alt="Rectangle3663105"
                  className="home-page-rectangle3661"
                />
                <span className="home-page-text06">
                  <span>Online Store</span>
                </span>
                <div className="home-page-electroniccircuit">
                  <div className="home-page-group11">
                    <img
                      src="/playground_assets/path6073109-ky0s.svg"
                      alt="Path6073109"
                      className="home-page-path6071"
                    />
                    <img
                      src="/playground_assets/path6083110-m1wu.svg"
                      alt="Path6083110"
                      className="home-page-path608"
                    />
                    <img
                      src="/playground_assets/path6093111-xrvu.svg"
                      alt="Path6093111"
                      className="home-page-path609"
                    />
                    <img
                      src="/playground_assets/path6103112-y5f.svg"
                      alt="Path6103112"
                      className="home-page-path610"
                    />
                  </div>
                </div>
              </div>
              <span className="home-page-text08 3232Bold">
                <span>Purchase item online</span>
              </span>
              <span className="home-page-text10">
                <span>
                  With the opening of our online store, you will now be able to
                  purchase items online.
                </span>
              </span>
            </div>
            <div className="home-page-group21">
              <img
                src="/playground_assets/innotimeamico11113-cokh-600w.png"
                alt="Innotimeamico11113"
                className="home-page-innotimeamico1"
              />
            </div>
          </div>
          <div className="home-page-why-qubly">
            <div className="home-page-tag2">
              <img
                src="/playground_assets/iconawesomeeye333-7zx.svg"
                alt="Iconawesomeeye333"
                className="home-page-iconawesomeeye"
              />
              <span className="home-page-text12">
                <span>WHY US</span>
              </span>
            </div>
            <span className="home-page-text14 3232Bold">
              <span>
                <span>Authentic products for an affordable price</span>
                <br></br>
                <span></span>
              </span>
            </span>
            <span className="home-page-text19">
              <span>
                Our company is a licensed reseller of many genuine brands, and
                you can browse through our big collection for your own
                preference for a reasonable price
              </span>
            </span>
            <div className="home-page-features">
              <div className="home-page-valuablebusinessinsights">
                <img
                  src="/playground_assets/image81044-yvpd-200w.png"
                  alt="image81044"
                  className="home-page-image8"
                />
                <span className="home-page-text21 1616Bold">
                  <span>Genuine Products</span>
                </span>
                <span className="home-page-text23">
                  <span>100% Authentic products for you vehicle</span>
                </span>
              </div>
              <div className="home-page-powerful-algorithms">
                <img
                  src="/playground_assets/image91041-2k4e-200h.png"
                  alt="image91041"
                  className="home-page-image9"
                />
                <span className="home-page-text25 1616Bold">
                  <span>Affordable</span>
                </span>
                <span className="home-page-text27">
                  <span>
                    <span>Offering affordable, high-quality products</span>
                    <br></br>
                    <span></span>
                  </span>
                </span>
              </div>
              <div className="home-page-datainrealtime">
                <img
                  src="/playground_assets/image101041-hlcp-200h.png"
                  alt="image101041"
                  className="home-page-image10"
                />
                <span className="home-page-text32 1616Bold">
                  <span>24/7 Service</span>
                </span>
                <span className="home-page-text34">
                  <span>
                    Our customer support team is available 24 hours a day, 7
                    days a week
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="home-page-hero">
            <img
              src="/playground_assets/bg1266-4eu.svg"
              alt="BG1266"
              className="home-page-bg"
            />
            <div className="home-page-content1">
              <div className="home-page-tag3">
                <div className="home-page-editbrightness">
                  <img
                    src="/playground_assets/path6031279-zlda.svg"
                    alt="Path6031279"
                    className="home-page-path603"
                  />
                  <img
                    src="/playground_assets/path6041280-ylig.svg"
                    alt="Path6041280"
                    className="home-page-path604"
                  />
                </div>
                <span className="home-page-text36">
                  <span>
                    NO 1 Vehicle Spare parts and Renting providers
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                </span>
              </div>
              <span className="home-page-text38 4848Bold">
                <span>We are the best solutions for your vehicle</span>
              </span>
              <span className="home-page-text40">
                <span>
                  Harness the potential of Big Data Analytics &amp; Cloud
                  Services and become a data-driven organization with Needle
                  tail
                </span>
              </span>
              <div className="home-page-buttons">
                <button className="home-page-button-primarybutton">
                  <span className="home-page-text42">
                    <span>Supplier</span>
                  </span>
                </button>
                <button className="home-page-button-primarybutton1">
                  <span className="home-page-text44">
                    <span>See the store</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <img
            src="/playground_assets/image131-j4xk-500h.png"
            alt="image131"
            className="home-page-image1"
          />
          <button className="home-page-button-primarybutton2">
            <span className="home-page-text46">
              <span>See the Store</span>
            </span>
          </button>
          <img
            src="/playground_assets/image171116-sn4s-600h.png"
            alt="image171116"
            className="home-page-image17"
          />
          <iframe
            className="home-page-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15831.602223339274!2d80.4478682!3d7.2521579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae313a7e221b089%3A0x5a70077a5561f791!2sShantha%20Motors!5e0!3m2!1sen!2slk!4v1684263713767!5m2!1sen!2slk"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="home-page-testimonial1">
            <img
              src="/playground_assets/path6061116-hq5a.svg"
              alt="Path6061116"
              className="home-page-path6061"
            />
            <div className="home-page-frame311">
              <img
                src="/playground_assets/line21116-rhxh.svg"
                alt="Line21116"
                className="home-page-line21"
              />
              <div className="home-page-clientlogos1">
                <img
                  src="/playground_assets/image111116-pnvl-200h.png"
                  alt="image111116"
                  className="home-page-image111"
                />
                <img
                  src="/playground_assets/image121116-6km6-200h.png"
                  alt="image121116"
                  className="home-page-image121"
                />
                <img
                  src="/playground_assets/image131117-sp-200h.png"
                  alt="image131117"
                  className="home-page-image131"
                />
                <img
                  src="/playground_assets/image151117-m6ke-200h.png"
                  alt="image151117"
                  className="home-page-image151"
                />
                <img
                  src="/playground_assets/image161117-2k7l-200h.png"
                  alt="image161117"
                  className="home-page-image161"
                />
              </div>
            </div>
          </div>
          <img
            src="/playground_assets/path6081117-4op5.svg"
            alt="Path6081117"
            className="home-page-path6081"
          />
          <div className="home-page-for-engineering-teams1">
            <div className="home-page-frame301">
              <div className="home-page-tag4">
                <img
                  src="/playground_assets/rectangle3661117-tg8j.svg"
                  alt="Rectangle3661117"
                  className="home-page-rectangle3662"
                />
                <span className="home-page-text48">
                  <span>Car Rentals</span>
                </span>
                <div className="home-page-compass1">
                  <div className="home-page-group281">
                    <img
                      src="/playground_assets/path6811118-9kvk.svg"
                      alt="Path6811118"
                      className="home-page-path6811"
                    />
                    <img
                      src="/playground_assets/path6821118-8kwf.svg"
                      alt="Path6821118"
                      className="home-page-path6821"
                    />
                  </div>
                </div>
              </div>
              <span className="home-page-text50 3232Bold">
                <span>Going for a vacation? Need a car?</span>
              </span>
              <span className="home-page-text52">
                <span>
                  Shnatha Motors is now offering affordable rent-a-car services
                  to its customers in addition to selling products
                </span>
              </span>
            </div>
            <img
              src="/playground_assets/carrentalbro211118-1gf-700w.png"
              alt="Carrentalbro211118"
              className="home-page-carrentalbro211"
            />
          </div>
          <div className="home-page-for-product-teams1">
            <div className="home-page-content2">
              <div className="home-page-tag5">
                <img
                  src="/playground_assets/rectangle3661118-46nl.svg"
                  alt="Rectangle3661118"
                  className="home-page-rectangle3663"
                />
                <span className="home-page-text54">
                  <span>Store</span>
                </span>
                <div className="home-page-electroniccircuit1">
                  <div className="home-page-group111">
                    <img
                      src="/playground_assets/path6071119-4gvp.svg"
                      alt="Path6071119"
                      className="home-page-path6072"
                    />
                    <img
                      src="/playground_assets/path6081119-x18o.svg"
                      alt="Path6081119"
                      className="home-page-path6082"
                    />
                    <img
                      src="/playground_assets/path6091119-9l5w.svg"
                      alt="Path6091119"
                      className="home-page-path6091"
                    />
                    <img
                      src="/playground_assets/path6101119-klud.svg"
                      alt="Path6101119"
                      className="home-page-path6101"
                    />
                  </div>
                </div>
              </div>
              <span className="home-page-text56 3232Bold">
                <span>Purchase item online</span>
              </span>
              <span className="home-page-text58">
                <span>
                  With the opening of our online store, you will now be able to
                  purchase items online.
                </span>
              </span>
            </div>
            <div className="home-page-group211">
              <img
                src="/playground_assets/innotimeamico11111-4hl-600w.png"
                alt="Innotimeamico11111"
                className="home-page-innotimeamico11"
              />
            </div>
          </div>
          <div className="home-page-why-qubly1">
            <div className="home-page-tag6">
              <img
                src="/playground_assets/iconawesomeeye1111-cwwl.svg"
                alt="Iconawesomeeye1111"
                className="home-page-iconawesomeeye1"
              />
              <span className="home-page-text60">
                <span>WHY US</span>
              </span>
            </div>
            <span className="home-page-text62 3232Bold">
              <span>
                <span>Authentic products for an affordable price</span>
                <br></br>
                <span></span>
              </span>
            </span>
            <span className="home-page-text67">
              <span>
                Our company is a licensed reseller of many genuine brands, and
                you can browse through our big collection for your own
                preference for a reasonable price
              </span>
            </span>
            <div className="home-page-features1">
              <div className="home-page-valuablebusinessinsights1">
                <img
                  src="/playground_assets/image81111-4k4-200w.png"
                  alt="image81111"
                  className="home-page-image81"
                />
                <span className="home-page-text69 1616Bold">
                  <span>Genuine Products</span>
                </span>
                <span className="home-page-text71">
                  <span>100% Authentic products for you vehicle</span>
                </span>
              </div>
              <div className="home-page-powerful-algorithms1">
                <img
                  src="/playground_assets/image91111-44al-200h.png"
                  alt="image91111"
                  className="home-page-image91"
                />
                <span className="home-page-text73 1616Bold">
                  <span>Affordable</span>
                </span>
                <span className="home-page-text75">
                  <span>
                    <span>Offering affordable, high-quality products</span>
                    <br></br>
                    <span></span>
                  </span>
                </span>
              </div>
              <div className="home-page-datainrealtime1">
                <img
                  src="/playground_assets/image101111-2mvr-200h.png"
                  alt="image101111"
                  className="home-page-image101"
                />

                <span className="home-page-text80 1616Bold">
                  <span>24/7 Service</span>
                </span>
                <span className="home-page-text82">
                  <span>
                    Our customer support team is available 24 hours a day, 7
                    days a week
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="home-page-hero1">
            <img
              src="/playground_assets/bg1111-un37.svg"
              alt="BG1111"
              className="home-page-bg1"
            />
            <div className="home-page-content3">
              <div className="home-page-tag7">
                <div className="home-page-editbrightness1">
                  <img
                    src="/playground_assets/path6031111-x4ox.svg"
                    alt="Path6031111"
                    className="home-page-path6031"
                  />
                  <img
                    src="/playground_assets/path6041111-5q6c.svg"
                    alt="Path6041111"
                    className="home-page-path6041"
                  />
                </div>
                <span className="home-page-text84">
                  <span>
                    NO 1 Vehicle Spare parts and Renting providers
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                </span>
              </div>

              <span className="home-page-text86 4848Bold">
                <span>We are the best solutions for your vehicle</span>
              </span>
              <span className="home-page-text88">
                <span>
                  Unleash the power of your vehicle with Shantha Motors , Your
                  Trusted destination for genuine motor parts, expert guidance
                  and unmatched customer service.Find the perfect solution to
                  fuel your driving experince
                </span>
              </span>

              <div className="home-page-buttonsbutton">
                <button className="home-page-button-primary">
                  <span className="home-page-text90">
                    <span>Supplier Login</span>
                  </span>
                </button>

                {/* <button className="home-page-button-2">
                  <span className="home-page-text90">
                    <span>?</span>
                  </span>
                </button> */}
                <button className="home-page-button-2">
                  <span className="home-page-text92">
                    <span>Customer Login</span>
                  </span>
                </button>
                <button className="home-page-button-3">
                  <span className="home-page-text92">
                    <Link to="/item-page">Store</Link>

                  
                  </span>
                </button>
              </div>
            </div>
          </div>

          <img
            src="/playground_assets/image181111-37a-500h.png"
            alt="image181111"
            className="home-page-image18"
          />
        </div>
      </div>
      <section id="footer">
        <Component8 />
      </section>
    </>
  );
}

export default HomePage