import "../../../css/Portfolio.css";

const PortfolioBox = ({ value, title }) => {
  return (
    <div className="port_text_box">
      <h3 className="port_text_title">{title}</h3>
      <p className="port_text_value">{value}</p>
    </div>
  );
};

export default PortfolioBox;
