import React from "react";
import logo from "../imgs/headerlogo.png";

export default function Thankyou() {
  return (
    <div className="thankpage">
      <div className="header">
        <img src={logo} alt="" />
        <h1>عنوان لأصالتك</h1>
      </div>
      <div className="allcont">
        <div className="s">
          <h3>!تم تسجيل طلبك</h3>
        </div>
        <form className="formcont">
          <p>
            شكرًا لك
            <br />
            <span className="transparent">سيقوم فريقنا بالتواصل معك</span>
          </p>
        </form>
      </div>
    </div>
  );
}
