import React from "react";
import {useOutletContext} from "react-router-dom";
import FormProject from "../../assets/form/formproject";
import HorizontalSeparator from "../../assets/miscellaneous/horizontalseparator";
import Title from "../../assets/miscellaneous/title";
import FormCategorie from "../../assets/form/formcategorie";
import VerticalSeparator from "../../assets/miscellaneous/verticalseparator";
import FormTechnologie from "../../assets/form/formtechnologie";

export default function ResumeProject(){
    const project = useOutletContext();

    return (
        <section className={"w-full"}>
             <Title text={"Informations"}/>

            <FormProject project={project} mode={"read"}/>

            <HorizontalSeparator />

            <div className={
                "flex flex-col xl:flex-row " +
                "justify-evenly"
            }>
                <FormCategorie />
                <VerticalSeparator />
                <FormTechnologie />
            </div>

            <HorizontalSeparator />

            <div className={
                "flex flex-row " +
                "w-full"}>
            </div>

        </section>
    )
}