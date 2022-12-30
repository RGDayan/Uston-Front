import React from "react";
import ChampSaisie from "../miscellaneous/champsaisie";

export default function FormCategorie(){
    return (
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
        </form>
    )
}