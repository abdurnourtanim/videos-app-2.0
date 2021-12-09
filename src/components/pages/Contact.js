import React from "react";
import { Link } from "react-router-dom";
import classes from "../../style/Contact.module.css";
import Nav from "../Nav";

const Contact = () => {
  return (
    <>
      <Nav />
      <section id={classes.contact} className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-6">
                  <div className="contact-info">
                    <h2 className="text-uppercase">Rapid</h2>
                    <p>
                      Cras fermentum odio eu feugiat lide par naso tierra. Justo
                      eget nada terra videa magna derita valies darta donna mare
                      fermentum iaculis eu non diam phasellus. Scelerisque felis
                      imperdiet proin fermentum leo. Amet volutpat consequat
                      mauris nunc congue
                    </p>
                  </div>
                  <div className="contact-details mt-5">
                    <h5>OUR NEWSLETTER</h5>
                    <p className="text-muted">
                      Tamen quem nulla quae legam multos aute sint culpa legam
                      noster magna veniam enim veniam illum dolore legam minim
                      quorum culpa amet magna export quem.
                    </p>
                  </div>
                  <div className="contact-subscribe">
                    <div className="input-group input-group-inline">
                      <input className="form-control" type="email" />
                      <Link to="/contact" className="btn subscribe">
                        Subscribe
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="contact-list mt-3 mt-md-0">
                    <h6>USEFUL LINKS</h6>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/contact">home</Link>
                      </li>
                      <li>
                        <Link to="/contact">about us</Link>
                      </li>
                      <li>
                        <Link to="/contact">services</Link>
                      </li>
                      <li>
                        <Link to="/contact">Terms of service</Link>
                      </li>
                      <li>
                        <Link to="/contact">Privacy policy</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="contact-address pt-0 pt-lg-4">
                    <h5>Contact us</h5>
                    <p>
                      A108 Agrabad <br />
                      Chattogram, Bangladesh <br />
                      United States <br />
                      Phone: +88 0130879**** <br />
                      Email: something@gamil.com
                    </p>
                  </div>
                  <div className="contact-social-icons mt-4 pt-0 pt-lg-1">
                    <ul className="list-unstyled">
                      <li className="d-inline">
                        <Link to="https://twitter.com/tanim_abdur">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li className="d-inline">
                        <Link to="https://web.facebook.com/abdurnurtanim11?_rdc=1&amp;_rdr">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li className="d-inline">
                        <Link to="https://www.instagram.com/abdur_nur_tanim/">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li className="d-inline">
                        <Link to="/contact">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <h6>SEND US A MESSAGE</h6>
              <p className="text-muted mt-0 mt-md-3">
                Eos ipsa est voluptates. Nostrum nam libero ipsa vero. Debitis
                quasi sit eaque numquam similique commodi harum aut temporibus.
              </p>
              <form className="text-center">
                <div className="input-group mt-3 mt-lg-5">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="input-group mt-3">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="input-group mt-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <textarea
                  className="form-control mt-3"
                  placeholder="Massage"
                  cols="30"
                  rows="5"
                ></textarea>
                <button className="btn mt-3 px-3">Send Massage</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
