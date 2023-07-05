import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

function SocialButtons({show}){
    console.log(show)
    const blockStyle = {
        display: "block",
    }
    return (
        <div className={show?'social-menu':'header-social-links'} >
            <a href="#"  className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
    )
}


export default SocialButtons