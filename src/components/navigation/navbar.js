import React from 'react';
import NavBtn from "./navbtn";

export default function NavBar(){
    return (
        <div className={
            "flex flex-col " +
            "w-fit "}>
            <NavBtn text={"Projets"}
                    urlNav={"/index_projet"}
                    imgSrc={"project"}
                    alt={"ico"}/>
            <NavBtn text={"Récits utilisateur"}
                    urlNav={"/index_story"}
                    imgSrc={"user_story"}
                    alt={"ico"}/>
            <NavBtn text={"Suggestions"}
                    urlNav={"/index_suggestion"}
                    imgSrc={"suggestion_dark"}
                    alt={"ico"}/>
        </div>
    )
}