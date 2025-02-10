const OutlineText = ({ text }) => {
  return (
    <h1
      style={{
        fontSize: "8vw",
        color: "transparent",
        webkitTextStroke: "3px   #00adb4",
        fontFamily: "Bold",
      }}
    >
      {text}
    </h1>
  );
};

export default OutlineText;
