import React from "react";
import {Outlet, useOutletContext, useParams} from "react-router-dom";
import GetImgByFormat from "../../../controllers/imgcontroller";
import NavProject from "../../assets/navigation/navproject";

export default function ShowProject(){
    const projects = useOutletContext();
    const param = useParams();

    const project = projects.find(x => parseInt(x.id) === parseInt(param.id));
    const img = GetImgByFormat("signalement", 64);

    if (project != null){
        return (
            <section className={"w-full"}>
                <NavProject project={project}/>
                <Outlet context={project}/>
            </section>
        )
    }else{
        return (
            <div className={"flex flex-row h-fit p-5"}>
                <div className={"mr-5 min-w-fit flex items-center"}>
                    <img src={img} alt={"ico_signalement"}/>
                </div>
                <div className={"p-5"}>
                    <h3 className={
                        "text-2xl font-bold mb-2"}>
                        Le project correspondant à l'id {param.id} n'existe pas.
                    </h3>
                    <p>
                        Vous pouvez accéder aux projets existant à partir de la barre de navigation des projets.
                    </p>
                </div>
            </div>
        )
    }
}