import ImgBox from "../../common/box/ImgBox";
import PortfolioBox from "../../common/box/PortfolioBox";
import Stack from "../../common/button/Stack";

// groundplace 포트폴리오

const Portfolio7 = () => {
  return (
    <section
      className="port7"
      style={{
        width: "100%",
        backgroundColor: "#474f6f",
        height: "600px",
        color: "white",
        padding: "100px 0px 250px 0px",
        position: "absolute",

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
          <ImgBox img={"groundplace.png"} />

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
              Groundplace 클론코딩
            </h1>
            <div
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "white",
              }}
            ></div>
            <PortfolioBox
              title={"제작기간"}
              value={"2024.12.16 ~ 2024.12.20"}
            />
            <PortfolioBox title={"참여도"} value={"개인 100%"} />
            <PortfolioBox
              title={"내용"}
              value={
                "Groundplace 제주도 감성 숙소 공식 홈페이지를 클론 코딩하여, GSAP.js와 React를 활용해 동적인 사용자 경험을 구현했습니다. 아름다운 제주도의 분위기를 그대로 담아낸 인터랙티브한 웹사이트를 제작했습니다."
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
                <Stack stack={"React"} bgcolor={"#FFF0C0"} />
              </div>
            </div>
            <a
              style={{ cursor: "hand" }}
              href="https://yurim-web.github.io/groundplace_clone/" target="_blank"
            >
              <button
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  marginTop: "20px",
                  fontSize: "20PX",
                  backgroundColor: "white",
                  color: "black",
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

export default Portfolio7;
