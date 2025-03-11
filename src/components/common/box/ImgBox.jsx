import "../../../css/Portfolio.css";

const ImgBox = ({ img }) => {
  return (
    <div className="port_img_box">
      <img className="port_img" src={img} alt="" />
    </div>
  );
};

export default ImgBox;
