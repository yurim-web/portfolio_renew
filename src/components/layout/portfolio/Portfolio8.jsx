import ImgBox from "../../common/box/ImgBox";
import PortfolioBox from "../../common/box/PortfolioBox";
import Stack from "../../common/button/Stack";

// imele 클론 코딩 포트폴리오

const Portfolio8 = () => {
  return (
    <section
      className="port8"
      style={{
        width: "100%",
        backgroundColor: "#eeece9",
        height: "600px",
        color: "black",
        padding: "100px 0px 250px 0px",
        position: "absolute",
        transform: "translateY(1000px)",
        top: "0px",
      }}
    >
      <article
        style={{
          width: "100%",
          maxWidth: "950px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <h1 style={{ fontSize: "50px", fontFamily: "Bold" }}>PORTFOLIO.</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: "90px",
          }}
        >
          <ImgBox img={"IMELE.png"} />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h1
              style={{
                fontSize: "30px",
                textAlign: "left",
                fontWeight: 700,
              }}
            >
              IMELE 클론 코딩
            </h1>
            <div
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "black",
              }}
            ></div>
            <PortfolioBox
              title={"제작기간"}
              value={"2025.01.02 ~ 2025.01.06"}
            />
            <PortfolioBox title={"참여도"} value={"개인 100%"} />
            <PortfolioBox
              title={"내용"}
              value={
                "이 웹사이트는 IMILE 공식 사이트를 코딩하여 만든 작품입니다. HTML, CSS, JavaScript를 사용하여 웹페이지를 구축하고, 반응형 웹 디자인을 다양한 크기에서 최적화된 사용자 환경을 제공했습니다. 또한 GSAP.js를 활용해 애니메이션적인 효과를 구현했습니다."
              }
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0px",
                padding: "15px 0px",
              }}
            >
              <h3 style={{ fontSize: "20px", width: "40%" }}>기술스텍</h3>
              <div
                style={{
                  width: "80%",
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: "9px",
                }}
              >
                <Stack stack={"HTML"} bgcolor={"#FFC0C1"} />
                <Stack stack={"CSS"} bgcolor={"#C0D6FF"} />
                <Stack stack={"Javascript"} bgcolor={"#C3FFC0"} />
                <Stack stack={"Gsap.js"} bgcolor={"#C0FFF0"} />

              </div>
            </div>
            <a
              style={{ cursor: "hand" }}
              href="https://yurim-web.github.io/imele_clone/" target="_blank"
            >
              {" "}
              <button
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  marginTop: "20px",
                  fontSize: "20PX",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                LINK
              </button>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Portfolio8;
