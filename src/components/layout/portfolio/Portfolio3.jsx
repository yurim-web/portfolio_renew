import ImgBox from "../../common/box/ImgBox";
import PortfolioBox from "../../common/box/PortfolioBox";
import Stack from "../../common/button/Stack";
import "../../../css/Portfolio.css";

// TODOLIST 포트폴리오

const Portfolio3 = () => {
  return (
    <section className="port3">
      <article className="port_container">
        <h1 className="port_title">PORTFOLIO.</h1>
        <div className="port_content_box">
          <ImgBox img={"todolist4.png"} />
          <div className="port_content" s>
            <h1 className="port_name">ToDo List</h1>
            <div className="port_line"></div>
            <PortfolioBox
              title={"제작기간"}
              value={"2024.11.02 ~ 2024.11.05"}
            />
            <PortfolioBox title={"참여도"} value={"개인 100%"} />
            <PortfolioBox
              title={"내용"}
              value={
                "이 웹사이트는 할 일 목록을 관리할 수 있는 간단한 To-Do 리스트 웹입니다.React를 사용하여 구현되었으며, 직관적인 UI로 사용자가 할 일을 쉽게 추가, 수정, 삭제할 수 있습니다."
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
              href="https://yurim-web.github.io/TODOLIST_page/"
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

export default Portfolio3;
