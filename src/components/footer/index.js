import React from 'react';
import './style.scss';
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import behance from "../../assets/behance.svg";
import dribbble from "../../assets/dribbble.svg";
import footerleafe from "../../assets/footer-leafe.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={footerleafe} className="footer__leafe-1"></img>
      <img src={footerleafe} className="footer__leafe-2"></img>
      <div className="container">
        <div className=" footer__row row">
          <div className="footer__left row">
            <div className="footer__column">
              <h6 className="footer__title">Shop</h6>
              <ul>
                <li><a href="#" className="footer__column__link">New In</a></li>
                <li><a href="#" className="footer__column__link">Women product</a></li>
                <li><a href="#" className="footer__column__link">Men Product</a></li>
                <li><a href="#" className="footer__column__link">Harbal Oil</a></li>
                <li><a href="#" className="footer__column__link">Natarul Product </a></li>
                <li><a href="#" className="footer__column__link">Top Brands</a></li>
                <li><a href="#" className="footer__column__link">Special Offers</a></li>
                <li><a href="#" className="footer__column__link">Lookbook</a></li>
              </ul>
            </div>
            <div className="footer__column">
              <h6 className="footer__title">Information</h6>
              <ul>
                <li><a href="#" className="footer__column__link">About us</a></li>
                <li><a href="#" className="footer__column__link">Customers</a></li>
                <li><a href="#" className="footer__column__link">Service</a></li>
                <li><a href="#" className="footer__column__link">Collection</a></li>
                <li><a href="#" className="footer__column__link">Best</a></li>
                <li><a href="#" className="footer__column__link">Sellers</a></li>
                <li><a href="#" className="footer__column__link">Blog</a></li>
              </ul>
            </div>
            <div className="footer__column">
              <h6 className="footer__title">Legal</h6>
              <ul>
                <li><a href="#" className="footer__column__link">Manufacturers</a></li>
                <li><a href="#" className="footer__column__link">Privacy Policy</a></li>
                <li><a href="#" className="footer__column__link">Terms & Condition</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__right">
            <div className="footer__social">
              <h6 className="footer__title">Follow Us</h6>
              <div className="footer__social__row">
                <img src={facebook} className="footer__social__img"/>
                <img src={twitter}className="footer__social__img"/>
                <img src={dribbble} className="footer__social__img"/>
                <img src={behance}className="footer__social__img"/>
              </div >

            </div>
            <div className="footer__instagramm">
              <h6 className="footer__title">Instagram</h6>
              <div className="footer__instagramm__row row">
                <img className="footer__instagramm__img"/>
                <img className="footer__instagramm__img"/>
                <img className="footer__instagramm__img"/>
                <img className="footer__instagramm__img"/>
                <img className="footer__instagramm__img"/>
                <img className="footer__instagramm__img"/>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
