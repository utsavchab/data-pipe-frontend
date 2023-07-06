import React, { useState } from "react";

import { faChevronLeft , faChevronRight, faCircle, faCircleNotch} from "@fortawesome/free-solid-svg-icons";
// import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ProjectSlideShow ({slides}){
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height : "100%",
        position : "relative",
        minWidth : "100%",
        maxWidth : "100%",
        
    }
    const slideStyles = {
        maxWidth : "100%",
        height : "100%",
        borderRadius : "10px",
        backgroundPosition : "center",
        backgroundSize : "contain",
        // border : "white solid 4px",
        boxShadow : "1px 1px 30px 3px #27a769"
    }

    const leftArrowStyle = {
        
        position : "absolute",
        top : "50%",
        transform : "translate(0,-50%)",
        left : "32px",
        fontSize : "45px",
        color : "#27a769",
        zIndex : 1,
        cursor : "pointer",
        background : "none"
    }

    const rightArrowStyle = {
        position : "absolute",
        top : "50%",
        transform : "translate(0,-50%)",
        right : "32px",
        fontSize : "45px",
        color : "#27a769",
        zIndex : 1,
        cursor : "pointer",
        background : "none"
    }

    const imageStyle = {
        maxWidth : "100%",
        maxHeight : "100%",
        minWidth : "100%",
        minHeight: "100%",
        borderRadius: "10px"

    }
    function leftClick (){
        if(currentIndex === 0){
            setCurrentIndex(slides.length - 1);
        }else{
            setCurrentIndex((prev)=>prev-1);
        }
    }

    function rightClick (){
        if(currentIndex === slides.length - 1){
            setCurrentIndex(0);
        }else{
            setCurrentIndex((prev)=>prev+1);
        }
    }
    function changeCurrentIndex(index){
        setCurrentIndex(index); 
    }
    const styleDots = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        columnGap: "10px",
        alignItems: "center",
        width: "fit-content",
        background: "none",
        margin:  "0 auto",
        marginTop: "20px",
    }
    
    return(
    <div style={sliderStyles}>
        <FontAwesomeIcon onClick={leftClick} icon={faChevronLeft} fade style={leftArrowStyle} />
        <div style = {slideStyles}><img src = {slides[currentIndex].url} alt = {slides[currentIndex].title} style={imageStyle}></img></div>
        <FontAwesomeIcon onClick = {rightClick} icon={faChevronRight} fade style={rightArrowStyle} />
        <div style = {styleDots}>
            {slides.map((slide, index)=>(
                (currentIndex===index)?
                <FontAwesomeIcon icon={faCircleNotch} key = {index} style={{color : "#27a769" , marginBottom : "20px"} } spin/>:
                <FontAwesomeIcon onClick={()=>changeCurrentIndex(index)} icon={faCircle} key = {index} style={{color : "#27a769" , marginBottom : "20px"}  }/>
            ))}
        </div>
    </div>
    )
}
export default ProjectSlideShow