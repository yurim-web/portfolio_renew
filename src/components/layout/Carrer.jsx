import EductionBox from "../common/box/EductionBox";
import ExperienceBox from "../common/box/ExperienceBox";
import "../../css/Carrer.css";


const Carrer = () => {
  return (
    <section
      className="carrer">
      <article
        className="exp">
        <div className="carrer_left_line">
          <div className="carrer_left_arrow"></div>

          <ExperienceBox
            title={"(주)쇼엠"}
            date={"2024.01 ~ 2024.08"}
            detail={"플랫폼 운영팀 - 웹 페이지, 앱 디자인 및 기획"}
          />
          <ExperienceBox
            title={"(주)오라코퍼레이션"}
            date={"2022.03 ~ 2023.06"}
            detail={"콘텐츠팀 - 콘텐츠 기획 및 디자인 등"}
          />
        </div>
        <div className="carrer_title">
          EXPERIENCE
        </div>
      </article>

      <article
        className="exp2">
        <divn className="carrer_right_line">
          <div className="carrer_right_arrow"></div>

          <EductionBox
            title={
              "웹(퍼블리셔) 프론트엔드 (javascript, React) 양성과정 350시간 수료"
            }
            date={"2024.10 ~ 2024.12"}
          />
          <EductionBox title={"컴퓨터그래픽스운용기능사"} date={"2023.09"} />
          <EductionBox title={"TOEIC Speaking Test(120)"} date={"2023.09"} />
          <EductionBox title={"GTQ포토샵1급"} date={"2020.09"} />
          <EductionBox
            title={"디지털정보활용능력(DIAT) 스프레드시트 고급"}
            date={"2012.03"}
          />
          <EductionBox
            title={"디지털정보활용능력(DIAT) 워드프로세서 초급"}
            date={"2011.07"}
          />
          <EductionBox
            title={"정보기술자격(ITQ) 한글파워포인트"}
            date={"2010.03"}
          />
        </divn>
        <div className="carrer_title">
          LICENSE & EDUCATION
        </div>
      </article>
    </section>
  );
};

export default Carrer;
