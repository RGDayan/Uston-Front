import React from "react";
import {GetImgByWindowSize} from "../../controllers/imgcontroller";

export default function Logo(){
    let img = GetImgByWindowSize("logo_sans_font", 64);

    return(
        <div className={
            "flex " +
            "w-full " +
            "justify-center " +
            "py-5"
        }>
            <img src={img} alt={"Logo"}/>
        </div>
    )
}