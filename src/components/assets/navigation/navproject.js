import React from "react";
import BtnOption from "./btnoption";

export default function NavProject({project}) {
    return (
        <nav className={
            "flex flex-row " +
            "w-full " +
            "justify-start"}>
            <BtnOption id={"Resume"}
                       text={"Résumé"}
                       url={"/index-projects/show-project/" + project.id + "/resume"}/>
            <BtnOption id={"UserStories"}
                       text={"Récits Utilisateur"}
                       url={"/index-projects/show-project/" + project.id + "/user-stories"}/>
            <BtnOption id={"Suggestions"}
                       text={"Suggestions"}
                       url={"/index-projects/show-project/" + project.id + "/suggestions"}/>
            <BtnOption id={"Files"}
                       text={"Fichiers"}
                       url={"/index-projects/show-project/" + project.id + "/files"}/>
        </nav>
    )
}