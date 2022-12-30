import React from "react";
import GetImgByFormat from "../../../controllers/imgcontroller";
import {NavLink} from "react-router-dom";

export default function NavBtn({text, url, imgSrc, alt}){
    let img = GetImgByFormat(imgSrc, 16);


    return (
        <NavLink to={url}
                 className={({ isActive }) => {
                     return (
                         "flex flex-row " +
                        "items-center " +
                        "p-5 pl-4 text-white " +
                        (isActive
                            ? "bg-btn-hover "
                            : "hover:bg-btn-hover")
                    )}}>
            <div className={"mr-5 min-w-fit"}>
                <img src={img} alt={alt}/>
            </div>
            <p>
                {text}
            </p>
        </NavLink>
    )
}