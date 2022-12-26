import React from "react";
import NavProject from "./navproject";

export default function IndexProject(){
    let projects = [
        {id: 1, titre: "Uston", besoin: "Dans le cadre du live sur la chaîne twitch.tv/RG_Dayan,  j’ai besoin de créer une application publique permettant aux spectateurs de communiquer des suggestions, des récits utilisateurs sur des projets informatiques qu’ils seront amenés à tester. Ces projets peuvent être des sites web, des logiciels lourds avec un accès par Git ou des jeux vidéo." }
    ]
    return (
        <div className={
            "px-2"
        }>
            <NavProject items={projects}/>
        </div >
    )
}