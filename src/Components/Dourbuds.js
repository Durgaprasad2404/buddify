import React from "react";

function Ourbuds() {
  return (
    <div className="ourbuds-bg-container" id="ourBuds">
      <h1 className="heading-main my-3">Our Buds</h1>
      <div className="ourbuds-container">
        <div className="ourbuds-con1">
          <div className="ourbuds-p1">
            <p className="our-para">
              "Our Buds aren't just people; they're beacons of empathy. trained
              to listen and support. Each Bud is here because they believe in
              the power of listening and the strength it can foster within you."
            </p>
          </div>
          <div className="ourbuds-p2">
            <p className="our-para">
              The human body is a complex, highly organized structure made up of
              unique cells that work together to accomplish the specific
              functions necessary for sustaining life.
            </p>
          </div>
        </div>
        <div className="ourbuds-con2">
          <div className="d-flex ms-4 gap-2">
            <div className="d-flex flex-column gap-2">
              <div className="img1-con">
                <img src="./images/1.png" alt="" className="img1" />
              </div>
              <div className="img2-con">
                <img src="./images/3.png" alt="" className="img2" />
              </div>
            </div>
            <div className="d-flex flex-column gap-2">
              <div className="img3-con">
                <img src="./images/2.png" alt="" className="img3" />
              </div>
              <div className="img4-con">
                <img src="./images/4.png" alt="" className="img4" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="./images/5.png" alt="" className="img5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourbuds;
