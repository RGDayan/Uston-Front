import React from "react";
import NavBtn from "../../navigation/navbtn";

export default function NavProject({projects}){
    let list = [];
    projects.map(
        function (project) {
            list.push(
                <NavBtn
                    urlNav={"/index-projects/show-project/" + project.id}
                    imgSrc={"plus_dark"}
                    alt={"icon_plus"}
                    text={project.titre}/>
            )
        }
    );
    return list;
}