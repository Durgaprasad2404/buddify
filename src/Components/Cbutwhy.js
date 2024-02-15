import React from "react";

function Butwhy() {
  return (
    <div className="butwhy-container py-3" id="butWhy">
      <h1 className="heading-main my-3">But Why?</h1>
      <div className="butwhy-con1">
        <div className="sub">
          <div>
            <p className="digit">8,00,000</p>
          </div>
          <p>No.of Sucides</p>
          <p className="digit">28%</p>
          <p className="mx-3">
            The percentage of world's population facing Depression.It means 246
            million People are into depression in the world.
          </p>
        </div>
        <div className="butwhyimg-con">
          <img src="./images/butwhy1.png" alt="#" className="butwhy-img" />
        </div>
        <div className="sub-end">
          <p>
            The People who were depressed and feels like there's no one to talk
            to.
          </p>
        </div>
      </div>
      <div className="butwhy-con2">
        <div className="butwhy-con2sub">
          <p className="mx-3 px-3">
            The percentage of world's population facing Depression.It means 246
            million People are into depression in the world.
          </p>
        </div>
        <div className="butwhyimg-con m-4">
          <img src="./images/butwhy2.png" alt="#" className="butwhy-img" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Butwhy;
