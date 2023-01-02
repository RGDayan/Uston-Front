import React from "react";
import Title from "../../assets/miscellaneous/title";
import FormProject from "../../assets/form/formproject";

export default function CreateProject(){

    return (
        <section className={"w-full"}>
            <Title text={"Créer un nouveau projet"} />
            <FormProject project={""}
                         mode={"create"} />
        </section>
    )
}