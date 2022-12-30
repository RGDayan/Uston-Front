import React from "react";
import ChampSaisie from "../miscellaneous/champsaisie";

export default function FormProject({project}){
    return (
        <form className={
            "flex flex-col " +
            "w-full " +
            "m-5"}>
            <ChampSaisie id={"title"}
                         label={"Titre"}
                         value={project.titre}
                         type={"text"}
                         size={"min-w-64"}/>
            <ChampSaisie id={"need"}
                         label={"Besoin"}
                         value={project.besoin}
                         type={"text"}
                         size={"w-1/2"}/>
            <ChampSaisie id={"technologies"}
                         label={"Technologies"}
                         value={project.technologies}
                         type={"text"}
                         size={"w-1/2"}/>
            <ChampSaisie id={"categories"}
                         label={"Categories"}
                         value={project.categorie}
                         type={"text"}
                         size={"w-1/2"}/>
            <ChampSaisie id={"description"}
                         label={"Description"}
                         value={project.description}
                         type={"textarea"}
                         size={"min-w-96 min-h-32 w-2/3"}/>
        </form>
    )
}