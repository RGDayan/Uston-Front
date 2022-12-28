import React from "react";
import NavBtn from "../../navigation/navbtn";
import Separator from "../../miscellaneous/separator";
import NavProject from "./navproject";

export default function IndexProject(){
    let projects = [
        {
            id: 1,
            titre: "Uston",
            besoin: "Dans le cadre du live sur la chaîne twitch.tv/RG_Dayan,  " +
                "j’ai besoin de créer une application publique permettant aux spectateurs de communiquer des suggestions, " +
                "des récits utilisateurs sur des projets informatiques qu’ils seront amenés à tester. Ces projets peuvent être des sites web, " +
                "des logiciels lourds avec un accès par Git ou des jeux vidéo."
        },
        {
            id: 2,
            titre: "Dracofee",
            besoin: "En BTS SIO, mes professeurs m'ont demandé de développer une application web permettant de gérer le stock de café d'une entreprise."
        },
        {
            id: 3,
            titre: "TAPIS",
            besoin: "Aux Autoroutes Paris-Rhin-Rhone (APRR), mon n+1 m'a demandé de développer une application de test et de surveillance des APIs. " +
                "Cela permet de s'assurer du maintien en condition opérationnel de la plateforme ASA."
        }
    ];
    console.log(projects)
    return (
        <div className={"h-full"}>
            <nav className={
                "flex flex-col " +
                "w-fit min-w-32 h-full " +
                "shadow-md shadow-cst-darkgray-800"}>

                <NavBtn urlNav={"/index-projects/create-project"}
                        text={"Créer un projet"}
                        imgSrc={"plus_dark"}
                        alt={"icon-plus"}/>

                <Separator />

                <NavProject projects={projects}/>

            </nav>
        </div >
    )
}