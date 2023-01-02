import React from "react";
import NavBtn from "../../assets/navigation/navbtn";
import HorizontalSeparator from "../../assets/miscellaneous/horizontalseparator";
import {Outlet} from "react-router-dom";
import IndexProject from "../../assets/navigation/indexproject";

export default function BriqueProject(){
    let projects = [
        {
            id: 1,
            titre: "Uston",
            besoin: "un besoinun besoinun besoinun besoinun besoinun besoinun besoin",
            description: "une description",
            technologies: [
                {
                    id: 1,
                    libelle: "react",
                    documentation: "un lien https",
                    code_couleur: "#DFDFDF"
                }
            ],
            categorie: [
                {
                    id: 1,
                    libelle: "brique projet",
                    code_couleur : "#09e2ff"
                }
            ],
            timestamp: "jj/MM/YYYY"
        },
        {
            id: 2,
            titre: "DraCoffee",
            timestamp: "jj/MM/YYYY"
        },
        {
            id: 3,
            titre: "TAPIS",
            timestamp: "jj/MM/YYYY"
        }
    ];

    return (
        <div className={
            "flex flex-row " +
            "h-full " +
            "overflow-x-hidden"}>
            <nav className={
                "flex flex-col " +
                "w-fit min-w-52 h-full " +
                "shadow-md shadow-cst-darkgray-800"}>

                <NavBtn url={"/index-projects/create-project"}
                        text={"Créer un projet"}
                        imgSrc={"plus_dark"}
                        alt={"icon-plus"}/>

                <HorizontalSeparator />

                <div className={
                    "max-w-xs h-full " +
                    "overflow-y-auto"}>
                    <IndexProject projects={projects} />
                </div>

            </nav>

            <Outlet context={projects} />
        </div >
    )
}