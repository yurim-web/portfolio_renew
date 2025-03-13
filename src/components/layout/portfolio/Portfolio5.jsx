import ImgBox from "../../common/box/ImgBox";
import PortfolioBox from "../../common/box/PortfolioBox";
import Stack from "../../common/button/Stack";
import "../../../css/Portfolio.css";

// Wavvey 포트폴리오

const Portfolio5 = () => {
  return (
    <section className="port5">
      <article className="port_container">
        <h1 className="port_title">PORTFOLIO.</h1>
        <div className="port_content_box">
          <ImgBox img={"waveyy.png"} />
          <div className="port_content">
            <h1 className="port_name">Waveyy</h1>
            <div
              className="port_line"
              style={{ backgroundColor: "black" }}
            ></div>
            <PortfolioBox
              title={"제작기간"}
              value={"2024.12.01 ~ 2024.12.12"}
            />
            <PortfolioBox title={"참여도"} value={"개인 100%"} />
            <PortfolioBox
              title={"내용"}
              value={
                "이 웹사이트는 Next.js와 영화·드라마 API를 활용해 기획하고 만든 영화,드라마 정보 사이트입니다."
              }
            />

            <div className="port_stack_box">
              <h3>기술스텍</h3>
              <div className="port_stack_content">
                <Stack stack={"HTML"} bgcolor={"#FFC0C1"} />
                <Stack stack={"CSS"} bgcolor={"#C0D6FF"} />
                <Stack stack={"Javascript"} bgcolor={"#C3FFC0"} />
                <Stack stack={"Next.js"} bgcolor={"#FFDDC0"} />
              </div>
            </div>
            <a href="https://movie-api-portfolio.vercel.app/" target="_blank">
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

export default Portfolio5;
