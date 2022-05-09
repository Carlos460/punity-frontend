import React from "react";

function Footer() {
  return (
    <div>
      <footer className="site-section bg-light footer">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-3">
              <h3 className="footer-title"><b><a href="/">P'Unity</a></b></h3>
              <p>An unique new type of a Online Community around Computer Science. </p>
              <p><span className="d-inline-block d-md-block">Developed specifically for performance, live comments, an intelligent code engine and more.</span></p>
            </div>
            <div className="col-md-5 mx-auto">
              <div className="row">
                <div className="col-lg-4">
                  <h3 className="footer-title">Product</h3>
                  <ul className="list-unstyled">
                    <li><a href="/#features">Features</a></li>
                    <li><a href="/#pricing">Pricing</a></li>
                    <li><a href="#">More</a></li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h3 className="footer-title">Resources</h3>
                  <ul className="list-unstyled">
                    <li><a href="#">More</a></li>
                    <li><a href="#">More</a></li>
                    <li><a href="#">More</a></li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h3 className="footer-title">Feedback</h3>
                  <ul className="list-unstyled">
                    <li><a href="#">More</a></li>
                    <li><a href="#">More</a></li>
                    <li><a href="#">More</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h3 className="footer-title">Contact</h3>
              <ul className="list-unstyled">
                    <li><a href="#">More</a></li>
                    <li><a href="#">More</a></li>
                    <li><a href="#">More</a></li>
                  </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p>Copyright &copy; All rights reserved | P'Unity</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
