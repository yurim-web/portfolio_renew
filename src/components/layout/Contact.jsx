import { useState } from "react";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoHappySharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <article
      className="contact_detail"
      style={{
        width: "100%",
        maxWidth: "950px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        opacity: 0,
        transform: "translateY(100px)",
      }}
    >
      <h1 style={{ color: "white", fontSize: "50px", fontFamily: "Bold" }}>
        Contact.
      </h1>
      <h1 style={{ color: "#FFEDBD" }}>I HOPE YOU ENJOY MY PROJECT</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <div
            style={{
              color: "white",
              alignItems: "center",
              display: "flex",
              fontSize: "25px",
            }}
          >
            <FaPhoneAlt />
            <span style={{ marginLeft: "15px" }}>010-4054-5152</span>
          </div>
          <div
            style={{
              color: "white",
              alignItems: "center",
              display: "flex",
              fontSize: "25PX",
            }}
          >
            <MdEmail />

            <span style={{ marginLeft: "15px" }}>lyl5152@naver.com</span>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="https://github.com/yurim-web" target="_blank">
              <FaGithub color="white" size={70} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaSquareInstagram color="white" size={70} />
            </a>
          </div>
        </div>

        <img
          style={{ width: "200px", borderRadius: "10PX" }}
          src="sns.jpg"
          alt=""
        />
      </div>

      <div
        style={{
          color: "white",
          alignItems: "end",
          display: "flex",
          fontSize: "50PX",
          justifyContent: "flex-end",
          marginTop: "100px",
        }}
      >
        <h1 style={{ color: "white" }}>Thank you </h1>
        <IoHappySharp />
      </div>
    </article>
  );
};

export default Contact;
