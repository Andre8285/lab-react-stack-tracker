import "./App.css";
import React, { useState } from 'react'; // Import useState

import technologiesData from "./technologies.json"
import companiesData from "./companies.json"
import{Routes,Route} from "react-router-dom"


import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import CompanyPage from "./pages/CompanyPage";



function App() {

  const [companies, setCompanies] = useState(companiesData);
  const [technologies, setTechnologies] = useState(technologiesData);

  return (
    <div className="App">
      
      <Navbar/>

      <Routes>
          <Route path = "/" element = {<HomePage companies = {companies}/>} />
          <Route path = "/company/:companySlug" element={<CompanyPage companies ={companies}/>} />
          <Route path = "/tech/:slug" element={<TechnologyPage technologies={technologies}/>} />

          <Route path="/tech/:slug" element={<TechnologyPage technology={technologiesData}/>}/>


      </Routes>


    </div>
  );
}

export default App;
