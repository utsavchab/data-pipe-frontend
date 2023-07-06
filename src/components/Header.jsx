import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { faBars ,faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialButtons from "./SocialButtons.jsx";

function Header() {
    const [menuToggle,setMenuToggle] = useState(false);

    return(
        <div className="header">
            <div className="name"><a href="/"><span className="f-name"> <span style={{color:"#27a769"}}>U</span>tsav</span>&nbsp;<span className="s-name"><span style={{color:"#27a769"}}>C</span>habhadiya</span></a></div>
            <div className="nav">
                <nav>
                    <ul>
                        <li><a href="https://utsavchab.me" target="_blank" rel="noreferrer">Home</a></li>
                        <li><a href="https://utsavchab.me/#about" target="_blank" rel="noreferrer">About</a></li>
                        <li><a href="https://utsavchab.me/#projects" target="_blank" rel="noreferrer">Projects</a></li>
                    </ul>
                </nav>
            </div>
            <div className="menu-social">
                
                <SocialButtons />
                <div className="menu">
                <div className="menu-button">
                <button onClick={()=>setMenuToggle((prev)=>!prev)} className="btn btn-dark  ml-0">
                    {menuToggle?<FontAwesomeIcon beatFade icon={faXmark} style={{color: "#ffffff",}} />:<FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />}
                </button>
                </div>
                {console.log(menuToggle)}
                {menuToggle && <div className="menu-items">
                <nav>
                    <ul>
                        <li><a href="https://utsavchab.me" target="_blank" rel="noreferrer" onClick={()=>setMenuToggle((prev)=>!prev)}>Home</a></li>
                        <li><a href="https://utsavchab.me/#about" target="_blank"  rel="noreferrer" onClick={()=>setMenuToggle((prev)=>!prev)} >About</a></li>
                        <li><a href="https://utsavchab.me/#projects" target="_blank" rel="noreferrer" onClick={()=>setMenuToggle((prev)=>!prev)} >Projects</a></li>
                        <li><SocialButtons show = {true} /></li>
                    </ul>
                </nav>

                </div>}
            </div>
            </div>
            
            
       </div>

    )

}

export default Header