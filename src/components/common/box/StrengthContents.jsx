import React, { useState } from "react";
import "../../../css/Strength.css";


const StrengthContents = ({ contents, skill, img }) => {
  return (
    <div
      className="three">
      <div className="content-container">
        <div className="content_box">
          <img className="content_img"
            src={img}
            alt=""
          />
          {contents}
        </div>

        <div className="content_title">
          {skill}
        </div>
      </div>
    </div>
  );
};

export default StrengthContents;
