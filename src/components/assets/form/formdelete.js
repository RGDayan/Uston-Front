import React from "react";

export default function FormDelete({id, object}) {
    return (
        <form method={"DELETE"}
              id={id}>
            <input id={"delete-" + id}
                   type={"submit"}
                   className={""}
                   value={"Supprimer"}/>
        </form>
    )
}