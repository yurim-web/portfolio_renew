import {IoIosArrowDroprightCircle} from "react-icons/io";
import "../../css/Infobox.css";

const Infobox = () => {
  return (
    <article className="infobox">
    
        <h1 className="info_title">
          PROFILE.
        </h1>
     
      <div className="info_inner1">
        <img
          src="myimg.png"
          alt=""
        />
        <div>
        <strong className="info_introduction" >
          "사용자 경험을 최우선으로 생각하는 웹
          퍼블리셔 입니다!"
        </strong>
        <div className="info_introduction_content">
          <p>
            HTML, CSS, JavaScript, Figma등 다양한 툴을 활용하여 웹사이트의 레이아웃과 디자인을 구성하고,<br /> 
            웹 표준과 웹 접근성을 준수하여  사용자들이 웹사이트를 손쉽게 이용할 수 있도록 합니다.<br /> <br /> 
            디자인과 개발의 경계를 넘나들며 직관적이고 세련된 웹을 구현합니다.
            <br /> <br /> 
            항상 새로운 것을 배우는 데 열려 있습니다!
            <br /> <br /> 

            맡은 일에 애정을 가지고 책임감 있게 업무를 수행합니다.<br />
            주어진 역할에서 가치를 창출하며, 제 역량을 충분히 발휘하고자 합니다.
          </p>
          <div className="info_btn">자기소개 더보기<IoIosArrowDroprightCircle className="info_icon" />
          
          </div>
        </div>
        </div>
      </div>
      <div className="info_profile">
        <div className="profile_container">
              <h1>
                ABOUT ME
              </h1>
              <div className="profile_content">
                <p>NAME : 이유림<br />
                BIRTH : 2000.11.04
                </p>
                <p>PHONE : 010.4054.5152<br />
                  EMAIL : lyl5152@naver.com</p>
              </div>
          </div>

            <div className="profile_container">
              <h1>
                EDUCATION
              </h1>
              <div className="profile_content">
                <p>웹(퍼블리셔) 프론트엔드(Javascript,React) 양성과정 350시간 수료<br />청운대학교(인천캠) 멀티미디어학과 졸업
               
                </p>
              
              </div>
              
            </div>
      </div>
            
    </article>
  );
};

export default Infobox;

