import "../../../css/Portfolio.css";

const Stack = ({ bgcolor, stack }) => {
  return (
    <div
      className="stack_card"
      style={{ backgroundColor: bgcolor }} 
    >
      {stack}
    </div>
  );
};

export default Stack;
