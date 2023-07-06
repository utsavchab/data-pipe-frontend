import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx";
import ProjectTitle from "./components/ProjectTitle.jsx";
import ProjectSlideShow from "./components/ProjectSlideShow.jsx"
import ProjectData from "./components/ProjectData.jsx";
import ProjectReadMe from "./components/ProjectReadMe.jsx"
import Footer from "./components/Footer.jsx";
// import {fas , faBars} from '@fortawesome/free-brands-svg-icons'

// import "react-bootstrap/dist/react-bootstrap.min.js";
function App() {
  const slides = [
    {
        url : './user_pipeline.jpg',
        title : "User Pipeline"
    }, 
    {
        url : './transaction_pipeline.jpg',
        title : "Transaction Pipeline"
    },
    {
        url : './refund_pipeline.jpg',
        title : "Refund Pipeline"
    },{
        url : './all_pipeline_processing.jpg',
        title : "Parallel Processing"

    },{
        url : './all_tables.jpg',
        title : "Databset"
    },{
        url : './user_table_data.jpg',
        title : "User Table"
    },{
        url : './user_summary_table.jpg',
        title : "User Summary Table"
    }
]

  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <ProjectTitle />
      <div className="container">
        <ProjectSlideShow slides = {slides}/>
      </div>
      <ProjectData/>
      <ProjectReadMe />
      <Footer/>  
    </div>
   </BrowserRouter>
  );
  
}

export default App;
