import ImgBox from "../../common/box/ImgBox";
import PortfolioBox from "../../common/box/PortfolioBox";
import Stack from "../../common/button/Stack";
import "../../../css/Portfolio.css";

// groundplace 포트폴리오

const Portfolio7 = () => {
  return (
    <section className="port7">
      <article className="port_container">
        <h1 className="port_title">PORTFOLIO.</h1>
        <div className="port_content_box">
          <ImgBox img={"groundplace.png"} />
          <div className="port_content">
            <h1 className="port_name">Groundplace 클론코딩</h1>
            <div className="port_line"></div>
            <PortfolioBox
              title={"제작기간"}
              value={"2024.12.16 ~ 2024.12.20"}
            />
            <PortfolioBox title={"참여도"} value={"개인 100%"} />
            <PortfolioBox
              title={"내용"}
              value={
                "Groundplace 제주도 감성 숙소 공식 홈페이지를 클론 코딩하여, GSAP.js와 React를 활용해 동적인 사용자 경험을 구현했습니다."
              }
            />

            <div className="port_stack_box">
              <h3>기술스텍</h3>
              <div className="port_stack_content">
                <Stack stack={"HTML"} bgcolor={"#FFC0C1"} />
                <Stack stack={"CSS"} bgcolor={"#C0D6FF"} />
                <Stack stack={"Javascript"} bgcolor={"#C3FFC0"} />
                <Stack stack={"Gsap.js"} bgcolor={"#C0FFF0"} />
                <Stack stack={"React"} bgcolor={"#FFF0C0"} />
              </div>
            </div>
            <a
              href="https://yurim-web.github.io/groundplace_clone/"
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

export default Portfolio7;
