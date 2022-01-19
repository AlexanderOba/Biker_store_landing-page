import React from "react";
import "./home.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import "aos/dist/aos.css";
import helmet from "../../images/helmet.gif";
import bigbikeimg from "../../images/bigbikeimg.png";
import left_arr from "../../images/left_arr.png";
import right_arr from "../../images/right_arr.png";
import Smallbike1 from "../../images/Smallbike1.png";
import Smallbike2 from "../../images/Smallbike2.png";
import rider from "../../images/rider.gif";
import edward from "../../images/edward.png";
import indicatorleftarr from "../../images/indicatorleftarr.png";
import indicatorrightarr from "../../images/indicatorrightarr.png";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="lngpg_section-1">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="lngpg_section-1_heading">
                Your Bike Electric Update
              </h1>
              <p className="lngpg_section-1_paragraph">
                Dummy text progressive, and affordable healthcare, accessible on
                mobile and online for everyone
              </p>
              <Form className="sctn_search_wrap">
                <Col md={8}>
                  <input
                    type="search"
                    size={50}
                    className="cnfimmailinpt form-control"
                    placeholder="Search Bike or anything"
                  />
                </Col>
                <Col md={4} className="confirmtn-btn">
                  Find
                </Col>
              </Form>
            </Col>
            <Col md={6}>
              <div>
                <img src={helmet} alt="" className="img-fluid sction-gif" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="lngpg_section-2">
        <div className="lngpg_section-cardwraper">
          <div className="lngpg_section-2-cards ">
            <h5>Universal eBike Kit</h5>
            <img src={bigbikeimg} alt="" className="img-fluid" />
            <div className="lngpg_section-2card-footer">
              <div>
                <p className="card_priceheader">Price</p>
                <p className="card_price">$250.00</p>
              </div>
              <div className="cardbtnwrap">
                <span className="card_btn">Order</span>
              </div>
            </div>
          </div>
          <div className="lngpg_section-2-cards">
            <h5>Brampoton eBike Kit</h5>
            <img src={bigbikeimg} alt="" className="img-fluid" />
            <div className="lngpg_section-2card-footer">
              <div>
                <p className="card_priceheader">Price</p>
                <p className="card_price">$750.00</p>
              </div>
              <div className="cardbtnwrap">
                <span className="card_btn">Order</span>
              </div>
            </div>
          </div>
          <div className="lngpg_section-2-cards faded_card">
            <h5>Universal eBike Kit</h5>
            <img src={bigbikeimg} alt="" className="img-fluid" />
            <div className="lngpg_section-2card-footer faded_card">
              <div>
                <p className="card_priceheader">Price</p>
                <p className="card_price">$750.00</p>
              </div>
              <div className="cardbtnwrap">
                <span className="card_btn">Order</span>
              </div>
            </div>
          </div>
        </div>
        <div className="arrdivwrap">
          <div className="arrdv1">
            <span className="spanarrw leftarrspn">
              <img src={left_arr} alt="" />
            </span>
          </div>
          <div className="arrdv2">
            <span className="spanarrw rightarrspn">
              <img src={right_arr} alt="" />
            </span>
          </div>
        </div>
      </section>
      <section className="lngpg_section-3">
        <h5>Other Type Of Bikes</h5>
        <div className="otherbikecardwraper">
          <div className="otherbikecard">
            <div className="otherbikesimgwrap">
              <img src={Smallbike1} alt="" />
            </div>
            <p className="cardcoloredtext">Hybrid Bikes</p>
          </div>
          <div className="otherbikecard">
            <div className="otherbikesimgwrap borderless_card">
              <img src={Smallbike2} alt="" />
            </div>
            <p>Fixie Bikes</p>
          </div>
          <div className="otherbikecard">
            <div className="otherbikesimgwrap borderless_card">
              <img src={Smallbike2} alt="" />
            </div>
            <p>Folding Bikes</p>
          </div>
          <div className="otherbikecard">
            <div className="otherbikesimgwrap borderless_card">
              <img src={Smallbike2} alt="" />
            </div>
            <p>Mount Bikes</p>
          </div>
          <div className="otherbikecard">
            <div className="otherbikesimgwrap borderless_card faded_card">
              <img src={Smallbike2} alt="" />
            </div>
            <p>City Bikes</p>
          </div>
        </div>
      </section>
      <section className="lngpg_section-4">
        <Container>
          <Row>
            <Col md={4}>
              <div className="lngpg_section-2-cards sctn4ridercard">
                <div className="riderimgwrap">
                  <img src={rider} alt="" className="img-fluid" />
                </div>
                <div className="lngpg_section-2card-footer">
                  <div>
                    <p className="card_priceheader">Price</p>
                    <p className="card_price">$750.00</p>
                  </div>
                  <div className="cardbtnwrap">
                    <span className="card_btn">Order</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div className="sect4col2wrap">
                <h2>Hybrid Bikes</h2>
                <p>
                  Dummy Text progressive, and affordable healthcare, accessible
                  on mobile and online for everyone. To us, it’s not just work.
                  We take pride <br /> in the solutions we deliver
                </p>
                <span>Learn more</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="lngpg_section-5">
        <Container>
          <Row className="lngpg_section-5_row">
            <Col md={10}>
              <div className="contentwraper">
                <h2>What our customer are saying</h2>
                <div className="headngunderline"></div>
                <div className="edwardcontentwrap">
                  <div className="edwardimgwrap">
                    <img src={edward} alt="" />
                    <h6>Edward Newgate</h6>
                    <p>Pro-Cycler</p>
                  </div>
                  <div className="edwardcommentwrap">
                    <p>
                      Dummy Text patient engagement app and web portal allow you
                      to access information instantaneously (no tedeous form,
                      long calls, or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </div>
              <div className="indicatorwrap">
                <div className="leftindicatorarrdiv">
                  <img src={indicatorleftarr} alt="" />
                </div>
                <div>
                  <span className="indicators unfadedindi"></span>
                </div>
                <div>
                  <span className="indicators"></span>
                </div>
                <div>
                  <span className="indicators"></span>
                </div>
                <div>
                  <span className="indicators"></span>
                </div>
                <div className="rightindicatorarrdiv">
                  <img src={indicatorrightarr} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
