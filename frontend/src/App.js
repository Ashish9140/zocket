import Main from "./Pages/Main";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import React, { useState } from 'react'
import { CompaignsContext } from './CompaignsContext'



function App() {

  const [type, setType] = useState("Get Leads as call");
  const [name, setName] = useState("Chocolate truffle cake");
  const [budget, setBudget] = useState(2000);
  const [startdate, setStartdate] = useState();
  const [enddate, setEnddate] = useState();
  const [allCompaign, setAllcompaign] = useState();
  const [avatar, setAvatar] = useState();

  const [location, setLocation] = useState('');

  return (
    <CompaignsContext.Provider value={{ setType, setName, setBudget, setStartdate, setEnddate, setLocation, type, name, budget, startdate, enddate, location, allCompaign, setAllcompaign, avatar, setAvatar }}>
      <div id="user-home-page-wrapper">
        <Router>
          <Sidebar />
          <Main />
        </Router>
      </div>
    </CompaignsContext.Provider>
  );
}

export default App;
