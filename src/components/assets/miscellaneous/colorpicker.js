import React, {useState} from "react";
import ColorController from "../../../controllers/colorcontroller";

export default function ColorPicker({size}){

    const [colorControllerState, setColorControllerState] = useState(ColorController());
    colorControllerState.initColor();

    function OpenColorPicker(){
        let picker = document.getElementById("color-picker");
        picker.classList.toggle("hidden");
    }

    function handleChangeColor(color, variant) {
        setColorControllerState(() => {
            colorControllerState.selectColor(color, variant);
            return {
                ...colorControllerState
            }
        })
    }


    const colors = colorControllerState.colors.map((color) => {
        return (
            <div key={color} className={"flex"}>
                {colorControllerState.variants.map((variant) => {
                    return (
                        <div key={color + "-"+ variant} onClick={() => handleChangeColor(color, variant)}
                            className={"cursor-pointer w-6 h-6 rounded-full m-1 bg-" + color + "-" + variant }/>
                    )
                })}
            </div>
        )
    })

    return(
        <div >
            <div id={"color-label"}
                 className={
                     "ml-3 " +
                     size +
                     "bg-" + colorControllerState.currentColor + " " +
                     "rounded-md " +
                     "shadow-lg " +
                     "shadow-red-700 " +
                     "cursor-pointer "}
                 onClick={OpenColorPicker}>

                <div id={"color-picker"}
                     className={"hidden absolute"}>
                    <div className={
                        "ml-5 mt-2 " +
                        "w-fit h-fit " +
                        "bg-input-txt " +
                        "rounded-md " +
                        "shadow-lg " +
                        "shadow-red-700"}>
                        <h3 className="px-2 pt-2 text-sm font-semibold">Selection d'une couleur</h3>
                        <div className={"p-2"}>
                            {colors}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

