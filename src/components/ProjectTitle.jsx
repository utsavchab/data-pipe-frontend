import React from "react";

function ProjectTile(){
    
    const routeChange = () =>{ 
        window.open(
            'https://github.com/utsavchab/DataPipe-ETL/',
            '_blank'
        )
      }
return (
    <div className="project-title">
        <div>
            <h1 className="title-head">Data Pipe</h1>
        </div>
        <div>
        <p className="title-para">Dynamic ETL Pipeline for E-Commerce Backend Data</p>
        </div>
        <div>
            <button className="title-button" onClick={routeChange}>Github Repo</button>
        </div>
    </div>
)
}

export default ProjectTile