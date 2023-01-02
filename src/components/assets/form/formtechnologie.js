import React from "react";
import Title from "../miscellaneous/title";
import ChampSaisie from "../miscellaneous/champsaisie";

export default function FormTechnologie(){
    return(

        <div>
            <Title text={"Ajouter des technologies"}/>
            <form >
                <ChampSaisie id={"libelle"}
                             label={"Libellé"}
                             value={""}
                             type={"text"}
                             size={"min-w-64"}/>
                <ChampSaisie id={"code"}
                             label={"Code couleur"}
                             value={""}
                             type={"color-picker"}
                             size={"max-w-32"}/>
                <ChampSaisie id={"lien"}
                             label={"Lien à la documentation"}
                             value={""}
                             type={"text"}
                             size={"max-w-64"}/>
                <ChampSaisie id={"validate-technologie"}
                             label={""}
                             value={"Ajouter"}
                             type={"submit"}/>
            </form>
        </div>
    )
}