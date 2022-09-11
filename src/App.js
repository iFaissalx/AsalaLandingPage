
import './App.css';
import Form from './components/Form';
import Thankyou from './components/Thankyou';
import {Route, Routes} from "react-router-dom";
import React, { useEffect } from "react";
import ReactGA from 'react-ga';
  const TRACKING_ID = "UA-240329461-1"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);


// const showForm = ()=>{
//   if (window.location.pathname === "/") {
//     return <Form />
//   }
// }

// const showThank = ()=>{
//   if (window.location.pathname === "/thankyou") {
//     return <Thankyou />
//   }
// }

function App() {
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
     {/* {showForm()}
     {showThank()} */}

<Routes>
        
        <Route path="/" element={<Form />} />
        <Route path="/thankyou" element={<Thankyou />} />
 </Routes>
    </div>
  );
}

export default App;
 