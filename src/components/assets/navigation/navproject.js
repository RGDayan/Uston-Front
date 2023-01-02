import React, {useState} from "react";
import BtnOption from "./btnoption";
import FormModalDelete from "../form/formmodaldelete";

export default function NavProject({project}) {
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

    return (
        <nav className={
            "flex flex-row " +
            "w-full " +
            "justify-between"}>
            <div className={"flex flex-row items-center h-fit"}>
                <BtnOption id={"Resume"}
                           text={"Résumé"}
                           url={"/index-projects/show-project/" + project.id + "/resume"}/>
                <BtnOption id={"UserStories"}
                           text={"Récits Utilisateur"}
                           url={"/index-projects/show-project/" + project.id + "/user-stories"}/>
                <BtnOption id={"Suggestions"}
                           text={"Suggestions"}
                           url={"/index-projects/show-project/" + project.id + "/suggestions"}/>
                <BtnOption id={"Files"}
                           text={"Fichiers"}
                           url={"/index-projects/show-project/" + project.id + "/files"}/>
            </div>

            <button id={"btn-delete-project"}
                    className={
                        "px-3 py-2 " +
                        "bg-red-600 hover:bg-red-500 active:bg-red-700 " +
                        "rounded-bl-md"}
                    onClick={() => setIsModalDeleteOpen(true)}>
                Supprimer
            </button>

            <FormModalDelete open={isModalDeleteOpen}
                             project={project}
                             onclose={() => setIsModalDeleteOpen(false)}/>
        </nav>
    )
}