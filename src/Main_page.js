import React from "react";
import "./Main_page.css";
import vector from "./images/Vector.png";

const Main_page = () => {
  return (
    <div>
      <div class="innerContainer">
        <div class="leftDiv">
          <h1>An inspiring design delivered to your inbox every morning</h1>
          <p>
            Our team scouts the internet for the best designs, illustrations and
            art and delivers a truly inspiring one every day to your inbox
          </p>
          <h3>Show me how it looks</h3>
          <div class="inpbtn">
            <input type="text" placeholder="Your e-mail address" />
            <button>Registerd Now</button>
          </div>
          <p>Free - No Spam - No Data Sharing</p>
        </div>
        <div class="rightDiv">
          <img src={vector} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main_page;
