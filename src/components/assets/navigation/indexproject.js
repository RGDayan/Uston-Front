import React from "react";
import NavBtn from "./navbtn";

export default function IndexProject({projects}){
    let list = [];
    projects.map(
        function (project) {
            list.push(
                <NavBtn
                    url={"/index-projects/show-project/" + project.id}
                    imgSrc={"plus_dark"}
                    alt={"icon_plus"}
                    text={project.titre}/>
            )
            return null;
        }
    );
    return list;
}