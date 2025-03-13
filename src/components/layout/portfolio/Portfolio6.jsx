import ImgBox from "../../common/box/ImgBox";
import PortfolioBox from "../../common/box/PortfolioBox";
import Stack from "../../common/button/Stack";
import "../../../css/Portfolio.css";

// avengers 포트폴리오

const Portfolio6 = () => {
  return (
    <section className="port6">
      <article className="port_container">
        <h1 className="port_title">PORTFOLIO.</h1>
        <div className="port_content_box">
          <ImgBox img={"avenger.png"} />
          <div className="port_content">
            <h1 className="port_name">AVENGERS.</h1>
            <div className="port_line"></div>
            <PortfolioBox
              title={"제작기간"}
              value={"2024.11.06 ~ 2024.11.13"}
            />
            <PortfolioBox title={"참여도"} value={"개인 100%"} />
            <PortfolioBox
              title={"내용"}
              value={
                "이 웹사이트는 GSAP.js를 활용한 애니메이션 효과를 통해 어벤져스 캐릭터들을 다채롭게 소개하는 포트폴리오 웹사이트입니다."
              }
            />

            <div className="port_stack_box">
              <h3>기술스텍</h3>
              <div className="port_stack_content">
                <Stack stack={"HTML"} bgcolor={"#FFC0C1"} />
                <Stack stack={"CSS"} bgcolor={"#C0D6FF"} />
                <Stack stack={"Javascript"} bgcolor={"#C3FFC0"} />
                <Stack stack={"Gsap.js"} bgcolor={"#C0FFF0"} />
              </div>
            </div>
            <a
              href="https://yurim-web.github.io/avengers_portfolio/"
              target="_blank"
            >
              <button className="port_link_btn">LINK</button>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Portfolio6;
