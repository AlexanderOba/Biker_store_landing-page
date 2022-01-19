import React from "react";
import "./footer.css";
import { Container } from "react-bootstrap";


const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <Container className="footer_conatiner" fluid>
          <div className="footer-wrapper">
            <div className="fter-cmpny-dscrtn">
              <div className="footer-logodv">
                <span className="footlogospan">B</span><span className="logotxt">eBike</span>
              </div>
              <p className="">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <p>©eBike 2021. All rights reserved</p>
            </div>
            <div>
              <h4 className="footer-title">Company</h4>
                <p className="footer-links">Product</p>
                <p className="footer-links">Bike Type</p>
                <p className="footer-links">About us</p>
                <p className="footer-links">Contact</p>
            </div>
            <div>
              <h4 className="footer-title">Help</h4>
              <p className="footer-links">Help center</p>
              <p className="footer-links">Contact support</p>
              <p className="footer-links">Instructions</p>
              <p className="footer-links">How it works</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Footer;
