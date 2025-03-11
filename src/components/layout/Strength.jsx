import StrengthContentsBox from "../common/box/StrengthContentsBox";
import StrenthToggleBox from "../common/box/StrenthToggleBox";
import "../../css/Strength.css";


const Strength = () => {
  return (
    <article
      className="strength">
      <h1 className="strength_title">
        Strength.
      </h1>
      <StrenthToggleBox />
      <StrengthContentsBox />
    </article>
  );
};

export default Strength;
