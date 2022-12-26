import React from "react";
import GetImgByFormat from "../../controllers/imgcontroller";
import {Link} from "react-router-dom";

export default function NavBtn({text, urlNav, imgSrc, alt}){
    let img = GetImgByFormat(imgSrc, 16);

    return (
        <Link to={urlNav} className={
            "flex flex-row " +
            "items-center " +
            "p-5 pl-4 " +
            "text-white " +
            "hover:bg-btn-hover"
            }>
            <div className={"mr-5 min-w-fit"}>
                <img src={img} alt={alt}/>
            </div>
            {text}
        </Link>
    )
}