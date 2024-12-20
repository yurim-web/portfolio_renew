const EductionBox = ({ title, date }) => {
  return (
    <div style={{ perspective: "1000px" }}>
      <div
        className="para2"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          textAlign: "end",
          transform: "rotateX(90deg)",
        }}
      >
        <p>
          <span
            style={{
              fontSize: "24px",
              fontWeight: 700,
              marginRight: "15px",
            }}
          >
            {title}
          </span>
        </p>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default EductionBox;
