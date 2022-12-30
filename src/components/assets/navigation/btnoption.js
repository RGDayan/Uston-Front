import React from "react";
import {NavLink} from "react-router-dom";

export default function BtnOption({ id, text, url}){
    return (
        <NavLink id={id}
                 to={url}
                 className={({ isActive }) => {
                     return (
                        "px-10 py-2 " +
                        "bg-cst-darkgray-700 " +
                        (isActive
                            ? "bg-btn-select text-black"
                            : "hover:bg-btn-hover")
                    )}} >
            {text}
        </NavLink>
    )
}