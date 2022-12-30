import React from "react";
import ColorPicker from "./colorpicker";

export default function ChampSaisie({id, label, value, type, size}){
    let input = [];
    let classByDefault = "p-1 pl-2 bg-input-txt border-2 border-border rounded-md ";

    switch (type){
        case "text":
            input.push(
                <input id={"input-"+id}
                       type={type}
                       name={id}
                       defaultValue={value}
                       className={classByDefault + size}/>
            );
            break;
        case "textarea":
            input.push(
                <textarea id={"textarea-"+id}
                          name={id}
                          defaultValue={value}
                          className={classByDefault + size}/>
            );
            break;
        case "color-picker":
            input.push(
                <ColorPicker />
            );
            break;
        default:
            break;
    }

    return (
        <div id={id} className={
            "flex flex-row " +
            "w-full min-w-96 h-fit " +
            "m-1 " +
            "items-center "
        }>
            <label className={
                "w-32 h-full " +
                "pr-5 " +
                "text-right "
            }>
                {label}
            </label>

            {input}

        </div>
    )
}