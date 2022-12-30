import React from "react";
import ColorPicker from "./colorpicker";
import Input from "./input";

export default function ChampSaisie({id, label, value, type, size}){
    let input = [];
    let classByDefault = "p-1 pl-2 bg-input-txt border-2 border-border rounded-md ";
    let inputTest = <Input id={id} type={type} value={value} classByDefault={classByDefault} size={size}/>;

    switch (type){
        case "text":
            input.push(
                inputTest
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
                <div className={
                    "flex flex-row " +
                    "items-center"
                }>
                    {inputTest}
                    <ColorPicker size={"w-16 h-16 "}/>
                </div>
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