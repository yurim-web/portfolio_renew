import React, { useState } from "react";
import "../../../css/Strength.css";


const StrengthToggle = ({ strength }) => {
 
  return (
    <div className="strength_toggle">
      {strength}
    </div>
  );
};

export default StrengthToggle;
