import React from "react";
import ChampSaisie from "../miscellaneous/champsaisie";
import Title from "../miscellaneous/title";

export default function FormCategorie(){
    return (
        <div>
            <Title text={"Ajouter des catégories"}/>
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
                <ChampSaisie id={"validate-categorie"}
                             label={""}
                             value={"Ajouter"}
                             type={"submit"}/>
            </form>
        </div>
    )
}