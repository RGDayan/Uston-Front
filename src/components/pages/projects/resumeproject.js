import React from "react";
import {useOutletContext} from "react-router-dom";
import FormProject from "../../assets/projects/formproject";
import HorizontalSeparator from "../../assets/miscellaneous/separator";
import Title from "../../assets/miscellaneous/title";
import FormCategorie from "../../assets/categories/formcategorie";

export default function ResumeProject(){
    const project = useOutletContext();

    return (
        <section className={
            "w-full"}>
            <Title text={"Informations"}/>

            <FormProject project={project}/>

            <HorizontalSeparator />

            <Title text={"Ajouter des catégories"}/>

            <FormCategorie />

        </section>
    )
}