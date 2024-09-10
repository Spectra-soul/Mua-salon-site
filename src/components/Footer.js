import React from 'react';
import { FooterContainer } from '../styles/FooterStyles';

const Footer = () => {
  return (
    <FooterContainer >
      <div >
        <div>
          <div>
            <div className="fcontent">
              <div className="footer-div1">
                <h4 className="footer-title">Contact us</h4>
                <div className="footer_info">
								  <p>If you are looking for the one of the best makeup artist in Kolkata then you can contact Priyanka Paul. Being one of the top makeup artist in Kolkata she can help you to get most attractive look. </p>	
							  </div>
                <ul className="footer-points">
                  <li>
                    <i className=""></i>HA323.1st Floor, Flat - C. Salt lake. Sector - 3. PIN - 700106. (WB) Beside HA Community Hall. Near GD Island. Salt lake. 						
                  </li>
                  <li className="">
                    <i className=""></i>Email: <a href="mailto:info@priyankasbeautybox.com">info@priyankasbeautybox.com</a> 								
                  </li>
                  <li>
                    <i className=""></i>Phone : <a href="tel:+917980204962"> +91 7980204962 / +91 7059410438 </a>									
                  </li>
							  </ul> 
              </div>

              <div className='footer-div2'>
                <aside>
                  <h4 className="footer-title">Important Links</h4>
                  <div className="footer_info">
                    <ul id="" className="menu">
                      <li id="" className="">
                        <a href="">Home</a>
                      </li>
                      <li id="" className="">
                        <a href="">Terms of Usage</a>
                      </li>
                      <li id="" className="">
                        <a href="">Contact</a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>

              <div className='footer-div2'>
                <aside>
                  <h4 className="footer-title">Quick Links</h4>
                  <div className="footer_info">
                    <ul id="" className="menu">
                      <li id="" className="">
                        <a href="">About</a>
                      </li>
                      <li id="" className="">
                        <a href="">Blog</a>
                      </li>
                      <li id="" className="">
                        <a href="">Our Services</a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>

              <div className='footer-div2'>
                <aside>
                  <h4 className="footer-title">Important Info</h4>
                  <div className="footer_info">
                    <ul id="" className="menu">
                      <li id="" className="">
                        <a href="">Terms & Conditions</a>
                      </li>
                      <li id="" className="">
                        <a href="">Response on COVID-19</a>
                      </li>
                      <li id="" className="">
                        <a href="">FAQS</a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div className='copylinks'>
          <div className=''>
            <div className='f-bottom'>
              <div className='footer-links'>
                <div className='socials'>
                  <ul>
                  <li>
                  <a href="https://www.facebook.com" data-toggle="tooltip" title="facebook">
                    <i className="fa fa-facebook" ></i>
                  </a> 
                  </li>      
                  <li>           
                  <a href="https://g.page/" data-toggle="tooltip" title="google">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </a> 
                  </li>
                  <li>                 
                  <a href="https://www.instagram.com" data-toggle="tooltip" title="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                  </li>  
                  <li>               
                  <a href="https://in.pinterest.com/" data-toggle="tooltip" title="pinterest plus">
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                  </a>
                  </li> 

                  </ul>  
                </div>
              </div>
              <div className="footer-copyright">
		            <div className="copyright">
						      <p> © 2024 Beauty Box. All Rights Reserved. </p>
							  </div>
						  </div>	
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
