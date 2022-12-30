import React from "react";

export default function Title({ text }){
    return (
        <h2 className={
            "p-4 text-2xl font-bold"}>
            {text}
        </h2>
    )
}