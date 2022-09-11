import Axios  from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../imgs/headerlogo.png";
import icon1 from "../imgs/icon1.png";
import icon2 from "../imgs/icon2.png";
import last from "../imgs/last.png";
import Thankyou from "./Thankyou";
export default function Form() {
  const cities = [
    { id: "1", name: "الرياض" },
    { id: "2", name: "جدة" },
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
  useEffect(() => {
    setCity(cities);
  }, []);

  const handleCity = (id) => {
    const dt = projects.filter((x) => x.cityID === id);
    setProject(dt);
  
  };
  const url = "https://api.sheetmonkey.io/form/r91o5SghgEb7tvkwEqUnV";

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

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(send);
    Axios.post(url,send);
    routeChange();
  }

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/thankyou`; 
    navigate(path);
  }

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
        <form className="formcont"  onSubmit={handleSubmit}>
       
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
              onChange={(e) =>{handleCity(e.target.value); handleChange(e)}}
            
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
            <input
              type="hidden"
              name="Created"
              value="x-sheetmonkey-current-date-time"
            ></input>
          </div>
    
            <button className="btn" type="submit" >
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

          <img className="last" src={last} alt="" />
        </form>
      </div>
    </div>
  );
}
