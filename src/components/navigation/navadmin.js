import React from "react";
import NavBtn from "./navbtn";

export default function NavAdmin(){
    return(
        <div className={
            "flex flex-col " +
            "w-fit "}>
            <NavBtn text={"Signalements"}
                    urlNav={"/index_signalement"}
                    imgSrc={"signalement"}
                    alt={"ico"}/>
            <NavBtn text={"Utilisateurs"}
                    urlNav={"/index_user"}
                    imgSrc={"admin_users"}
                    alt={"ico"}/>
            <NavBtn text={"Configuration"}
                    urlNav={"/configuration"}
                    imgSrc={"settings"}
                    alt={"ico"}/>
        </div>
    )
}