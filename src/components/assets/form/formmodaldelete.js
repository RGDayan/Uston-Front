import React from "react";
import GetImgByFormat from "../../../controllers/imgcontroller";
import ReactDOM from "react-dom";
import FormDelete from "./formdelete";

export default function FormModalDelete({ open, project, onclose}){
    if (!open)
        return null;
    const imgSignalement = GetImgByFormat("signalement", 32);
    let img = "";
    if (imgSignalement != null)
        img = (<img src={imgSignalement} alt={"ico-signalement"}/>)
    return ReactDOM.createPortal(
        <>
            <div className={"fixed top-0 left-0 right-0 bottom-0 bg-cst-darkgray-700 bg-opacity-40 z-40"}>

            </div>
            <div className={"fixed " +
                "flex flex-col " +
                "w-1/2 " +
                "top-1/4 left-1/4 " +
                "p-5 " +
                "bg-cst-darkgray-700 " +
                "rounded-lg z-50"}>
                <div className={"flex flex-row " +
                    "w-full " +
                    "justify-between"}>
                    <h2 className={"flex flex-row w-full"}>
                        {img}
                        Confirmer la suppression du projet
                    </h2>
                    <button onClick={onclose} className={" px-3 py-2 " +
                        "bg-red-600 hover:bg-red-500 active:bg-red-700 " +
                        "rounded-md"}>X</button>

                </div>
                <div className={"p-3"}>
                    Êtes-vous réellement certain de vouloir supprimer le projet "{project.titre}"
                </div>
                <FormDelete id={project} object={project}/>
            </div>
        </>,
        document.getElementById("portal")
    );
}