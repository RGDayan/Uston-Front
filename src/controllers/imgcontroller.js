import {useLayoutEffect, useState} from "react";
import project16 from "../resources/project/project16.png";
import project32 from "../resources/project/project32.png";
import project64 from "../resources/project/project64.png";
import user_story16 from "../resources/user_story/user_story16.png";
import user_story32 from "../resources/user_story/user_story32.png";
import user_story64 from "../resources/user_story/user_story64.png";
import suggestion_dark16 from "../resources/suggestion/suggestion_dark16.png";
import suggestion_dark32 from "../resources/suggestion/suggestion_dark32.png";
import suggestion_dark64 from "../resources/suggestion/suggestion_dark64.png";
import logo_uston from "../resources/logo/logo_uston.png"
import logo_sans_font from "../resources/logo/logo_sans_font.png"
import logo_sans_font16 from "../resources/logo/logo_sans_font16.png"
import logo_sans_font32 from "../resources/logo/logo_sans_font32.png"
import logo_sans_font64 from "../resources/logo/logo_sans_font64.png"
import signalement16 from "../resources/signalement/signalement16.png";
import signalement32 from "../resources/signalement/signalement32.png";
import signalement64 from "../resources/signalement/signalement64.png";
import admin_users16 from "../resources/admin_users/admin_users16.png";
import admin_users32 from "../resources/admin_users/admin_users32.png";
import admin_users64 from "../resources/admin_users/admin_users64.png";
import settings16 from "../resources/settings/settings16.png";
import settings32 from "../resources/settings/settings32.png";
import settings64 from "../resources/settings/settings64.png";
import user16 from "../resources/user/user16.png";
import user32 from "../resources/user/user32.png";
import user64 from "../resources/user/user64.png";

import user96 from "../resources/user/user96.png";

const images = {
    project16,
    project32,
    project64,
    user_story16,
    user_story32,
    user_story64,
    suggestion_dark16,
    suggestion_dark32,
    suggestion_dark64,
    logo_uston,
    logo_sans_font,
    logo_sans_font16,
    logo_sans_font32,
    logo_sans_font64,
    signalement16,
    signalement32,
    signalement64,
    admin_users16,
    admin_users32,
    admin_users64,
    settings16,
    settings32,
    settings64,
    user16,
    user32,
    user64,
    user96
};

/**
 * Retourne une image correspondant aux param??tres.
 * N??cessite d'avoir d??j?? ajout?? les images au tableau images[] dans cette fonction
 * @param imgName String : Nom de l'image
 * @param format Int : Format de l'image voulu
 * @returns {*} String : Chemin vers l'image d??sir??e
 */
export default function GetImgByFormat(imgName, format){
    return images[imgName+format];
}

/**
 * R??cup??ration de l'image au format correspondant ?? la taille de la fen??tre (exemple avec le Logo)
 * @param imgName String : nom de l'image
 * @param formatByDefault Int : format ?? retourner par d??faut (si vide, retourne l'image sans format pr??d??fini)
 * @returns {*} String : chemin menant ?? l'image.
 */
export function GetImgByWindowSize(imgName, formatByDefault){
    const [width] = useWindowsSize();

    return !width || width <= 640 ? images[imgName + "16"]
        : width <= 1024 ? images[imgName + "32"]
        : images[imgName + formatByDefault];
}

/**
 * Controller des dimensions de la fen??tre du navigateur
 * @returns {number[]} Array[int, int] : Dimensions de la fen??tre du navigateur
 */
function useWindowsSize(){
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize(){
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}
