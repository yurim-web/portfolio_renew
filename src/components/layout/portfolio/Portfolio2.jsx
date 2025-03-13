import ImgBox from "../../common/box/ImgBox";
import PortfolioBox from "../../common/box/PortfolioBox";
import Stack from "../../common/button/Stack";
import "../../../css/Portfolio.css";

// APPLE 클론 코딩 포트폴리오

const Portfolio2 = () => {
  return (
    <section className="port2">
      <article className="port_container">
        <h1 className="port_title">PORTFOLIO.</h1>
        <div className="port_content_box">
          <ImgBox img={"애플.png"} />
          <div className="port_content">
            <h1 className="port_name">APPLE 클론 코딩</h1>
            <div
              className="port_line"
              style={{ backgroundColor: "black" }}
            ></div>
            <PortfolioBox
              title={"제작기간"}
              value={"2024.10.29 ~ 2024.11.02"}
            />
            <PortfolioBox title={"참여도"} value={"개인 100%"} />
            <PortfolioBox
              title={"내용"}
              value={
                "이 웹사이트는 Apple 공식 사이트의 PC 버전을 클론 코딩하여 만든 작품입니다. React를 활용해 메인페이지를 구성했습니다."
              }
            />

            <div className="port_stack_box">
              <h3>기술스텍</h3>
              <div className="port_stack_content">
                <Stack stack={"HTML"} bgcolor={"#FFC0C1"} />
                <Stack stack={"CSS"} bgcolor={"#C0D6FF"} />
                <Stack stack={"Javascript"} bgcolor={"#C3FFC0"} />
                <Stack stack={"React"} bgcolor={"#FFF0C0"} />
              </div>
            </div>
            <a
              href="https://yurim-web.github.io/apple_clone_page2/"
              target="_blank"
            >
              <button
                className="port_link_btn"
                style={{ backgroundColor: "black", color: "white" }}
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

export default Portfolio2;
