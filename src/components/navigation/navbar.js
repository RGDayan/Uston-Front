import React from 'react';
import NavBtn from "./navbtn";

export default function NavBar(){
    return (
        <div className={
            "flex flex-col " +
            "w-fit "}>
            <NavBtn text={"Projets"}
                    urlNav={"/index-projects"}
                    imgSrc={"project"}
                    alt={"ico"}/>
            <NavBtn text={"Récits utilisateur"}
                    urlNav={"/index-stories"}
                    imgSrc={"user_story"}
                    alt={"ico"}/>
            <NavBtn text={"Suggestions"}
                    urlNav={"/index-suggestions"}
                    imgSrc={"suggestion_dark"}
                    alt={"ico"}/>
        </div>
    )
}