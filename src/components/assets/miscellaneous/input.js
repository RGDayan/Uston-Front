import React from "react";

export default function Input({id, type, value, classByDefault, size}){
    return(
        <input id={"input-"+id}
               type={type}
               name={id}
               defaultValue={value}
               className={classByDefault + size}/>
    )
}