import React from "react";

function Features() {
  return (
    <div>
      <section className="site-section bg-light" id="features">
        <div className="container">
          <div className="row ">
            <div className="col-12 mb-5 position-relative">
              <h2 className="section-title text-center mb-5">Features</h2>
            </div>
            <div className="col-md-6 mb-4">
              <div className="service d-flex h-100">
                <div className="service-number mr-4">
                  <span className="icon-lightbulb-o"></span>
                </div>
                <div className="service-about">
                  <h3>Lightweight</h3>
                  <p>
                    Punity has been optimized for months with new technologies
                    that allow users to access content extremely quickly
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="service d-flex h-100">
                <div className="service-number mr-4">
                  <span className="icon-tachometer"></span>
                </div>
                <div className="service-about">
                  <h3>Fast</h3>
                  <p>It's Fast</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="service d-flex h-100">
                <div className="service-number mr-4">
                  <span className="icon-star"></span>
                </div>
                <div className="service-about">
                  <h3>Unique</h3>
                  <p>
                    Thanks to its in-house developed method, Punity is the only
                    online community in the world that can display live comments
                    without much load
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="service d-flex h-100">
                <div className="service-number mr-4">
                  <span className="icon-tachometer"></span>
                </div>
                <div className="service-about">
                  <h3>Simple</h3>

                  <p>It's Simple</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
