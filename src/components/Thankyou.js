import React from "react";
import logo from "../imgs/headerlogo.png";

export default function Thankyou() {
 
  return (
    <div className="formpage">
      <div className="header">
        <img src={logo} alt="" />
        <h1>عنوان لأصالتك</h1>
      </div>
      <div className="allcont">
        <div className="s">
          <h3>قررت تتملك وحدة سكنية؟</h3>
        </div>
        <form className="formcont" action={url} method="post">
          <p>
            سجل اهتمامك
            <br />
            <span className="transparent">بإحدى مشاريعنا</span>
          </p>

   
   
        </form>
      </div>
    </div>
  );
}
