import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "../../../css/Carrer.css";


gsap.registerPlugin(ScrollTrigger);
const ExperienceBox = ({ title, date, detail }) => {
  return (
    <div style={{ perspective: "1000px" }}>
      <div
        className="para">
        <p>
          <span className="experience_title">
            {title}
          </span>
          <span>{date}</span>
        </p>
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default ExperienceBox;
