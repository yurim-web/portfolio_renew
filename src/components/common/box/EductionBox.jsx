import "../../../css/Carrer.css";


const EductionBox = ({ title, date }) => {
  return (
    <div style={{ perspective: "1000px" }}>
      <div
        className="para2">
        <p>
          <span className="education_title">
            {title}
          </span>
        </p>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default EductionBox;
