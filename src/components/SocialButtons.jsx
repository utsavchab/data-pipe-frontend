import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

function SocialButtons({show}){
    console.log(show)
    const blockStyle = {
        display: "block",
    }
    return (
        <div className={show?'social-menu':'header-social-links'} >
            <a href="https://utsavchab.me" target='_blank'  className="globe"><i className="bi bi-globe"></i></a>
            <a href="https://github.com/utsavchab" target='_blank' className="github"><i className="bi bi-github"></i></a>
            <a href="https://www.instagram.com/utsavchab/" target='_blank' className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/utsavchabhadiya/" target='_blank' className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
    )
}


export default SocialButtons