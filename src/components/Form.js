import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../imgs/headerlogo.png";
import icon1 from "../imgs/icon1.png";
import icon2 from "../imgs/icon2.png";
import icon3 from "../imgs/asala social-12.png";
import icon4 from "../imgs/asala social-10.png";
import icon5 from "../imgs/asala social-13.png";
import icon6 from "../imgs/asala social-19.png";
import last from "../imgs/asala social-09.png";
import Thankyou from "./Thankyou";
export default function Form() {
  const cities = [
    { id: "1", name: "الرياض" },
    { id: "2", name: "جدة" },
  ];
  const payrange = [
    { id: "1", name: "850,000-950,000" },
    { id: "2", name: "1,000,000-1,200,000" },
    { id: "3", name: "1,200,000 واعلى" },
  ];
  const payment = [
    { id: "1", name: "نقدًا" },
    { id: "2", name: "بنك/غير مدعوم" },
    { id: "3", name: "بنك/ مدعوم" },
  ];

  const projects = [
    { id: "1", cityID: "1", name: "مشروع الملقا" },
    { id: "2", cityID: "1", name: "مشروع الجزيرة" },
    { id: "3", cityID: "1", name: "مشروع الروضة 1" },
    { id: "4", cityID: "1", name: "مشروع الروضة 2" },
    { id: "5", cityID: "1", name: "مشروع الروضة 3" },
    { id: "6", cityID: "1", name: "مشروع الحمراء" },
    { id: "7", cityID: "1", name: "مشروع النهضة" },
    { id: "8", cityID: "1", name: "مشروع الصفا" },
    { id: "9", cityID: "1", name: "مشروع المونسية" },
    { id: "10", cityID: "2", name: "مشروع اللؤلؤ" },
    { id: "11", cityID: "2", name: "مشروع النهضة" },
  ];
  const [city, setCity] = useState([]);
  const [project, setProject] = useState([]);
  const [payop, setPayop] = useState([]);
  const [paym, setPaym] = useState([]);
  useEffect(() => {
    setCity(cities);
  }, []);

  useEffect(() => {
    setPayop(payrange);
  }, []);

  useEffect(() => {
    setPaym(payment);
  }, []);

  const handleCity = (id) => {
    const dt = projects.filter((x) => x.cityID === id);
    setProject(dt);
  };
  const url = "https://api.sheetmonkey.io/form/5w15hkvusngDHVgaZ3Kdyn";

  const data = {
    FirstName: "",
    LastName: "",
    Phone: "",
    Email: "",
    City: "",
    Project: "",
    Created: "x-sheetmonkey-current-date-time",
  };

  const [send, setSend] = useState(data);
  const handleChange = (e) => {
    setSend({
      ...send,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(send);
    Axios.post(url, send);
    routeChange();
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/thankyou`;
    navigate(path);
  };

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
        <form className="formcont" onSubmit={handleSubmit}>
          <p>
            سجل اهتمامك
            <br />
            <span className="transparent">بإحدى مشاريعنا</span>
          </p>
          <div className="input-container n">
            {" "}
            <input
              name="LastName"
              type="text"
              placeholder="الاسم الاخير"
              required
              onChange={handleChange}
            />{" "}
            <input
              name="FirstName"
              type="text"
              placeholder="الاسم الاول"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            {" "}
            <input
              name="Phone"
              type="number"
              placeholder="رقم الجوال"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            {" "}
            <input
              name="Email"
              type="text"
              placeholder="البريد الالكتروني"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <select
              name="City"
              id="optcities"
              className="citymenu"
              onChange={(e) => {
                handleCity(e.target.value);
                handleChange(e);
              }}
              required
            >
              <option value="0">اختر المدينة</option>
              {city && city !== undefined
                ? city.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.id}>
                        {ctr.name}
                      </option>
                    );
                  })
                : "no city"}
            </select>
          </div>
          <div className="input-container">
            <select
              name="Project"
              id="optprojects"
              className="citymenu"
              required
              onChange={handleChange}
            >
              <option value="" disabled selected>
                اختر المشروع
              </option>
              {project && project !== undefined
                ? project.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.name}>
                        {ctr.name}
                      </option>
                    );
                  })
                : "no city"}
            </select>
          </div>
          <div className="input-container">
            <select
              name="Payrange"
              id="optprojects"
              className="citymenu"
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>القدرة الشرائية</option>
              {payop && payop !== undefined
                ? payop.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.value}>
                        {ctr.name}
                      </option>
                    );
                  })
                : "no city"}
            </select>
          </div>
          <div className="input-container">
            <select
              name="Payment"
              id="optprojects"
              className="citymenu"
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>طريقة الدفع</option>
              {paym && paym !== undefined
                ? paym.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.value}>
                        {ctr.name}
                      </option>
                    );
                  })
                : "no city"}
            </select>
          </div>
          <div className="input-container">
            <input
              type="hidden"
              name="Created"
              value="x-sheetmonkey-current-date-time"
            ></input>
          </div>
          <button className="btn" type="submit">
            ارسل طلبك
          </button>{" "}
          <div className="info">
            <p>
              للتواصل
              <br />
              <a
                href="tel:+966920033608"
                className="transparent i"
                target="_blank"
                rel="noreferrer"
              >
                tel:920033608
              </a>{" "}
            </p>
            <div className="circle">
              <img src={icon1} alt="" />
            </div>
          </div>
          <div className="info">
            <p style={{ marginLeft: "5.7rem" }}>
              البريد الالكتروني
              <br />
              <a
                href="mailto:info@asalaresidence.com"
                className="transparent o"
              >
                info@asalaresidence.com
              </a>
            </p>
            <div className="circle">
              <img src={icon2} alt="" />
            </div>
          </div>
          <div className="info">
            <p style={{ marginLeft: "7.5rem" }}>
              الموقع الالكتروني
              <br />
              <a
                href="https://www.asalaresidence.com"
                className="transparent o"
              >
                asalaresidence.com
              </a>
            </p>
            <div className="circle">
              <img src={icon3} alt="" />
            </div>
          </div>
          <div className="info">
            <p style={{ marginLeft: "8.5rem" }}>
              Instagram
              <br />
              <a
                href="https://www.instagram.com/asalaresidence"
                className="transparent o"
              >
                AsalaResidence
              </a>
            </p>
            <div className="circle">
              <img src={icon4} alt="" />
            </div>
          </div>
          <div className="info">
            <p style={{ marginLeft: "8.5rem" }}>
              Twitter
              <br />
              <a
                href="https://www.twitter.com/AsalaResidence"
                className="transparent o"
              >
                AsalaResidence
              </a>
            </p>
            <div className="circle">
              <img src={icon5} alt="" />
            </div>
          </div>
          <div className="info">
            <p style={{ marginLeft: "8.5rem" }}>
             Snapchat
              <br />
              <a
                href="https://www.snapchat.com/add/asalaresidence"
                className="transparent o"
              >
                AsalaResidence
              </a>
            </p>
            <div className="circle">
              <img src={icon6} alt="" />
            </div>
          </div>
          <img className="last" src={last} alt="" />
        </form>
      </div>
    </div>
  );
}
