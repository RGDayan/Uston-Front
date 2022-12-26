import React from "react";
import {Route, Routes} from "react-router-dom";
import IndexProject from "./projects/indexproject";
import Footer from "./overlay/footer";

export default function CurrentPage(){
    return (
        <section className={
            "flex flex-col " +
            "justify-between " +
            "w-full h-full min-h-screen " +
            "pt-2 " +
            "bg-background text-white " +
            "overflow-auto"}>
            <Routes>
                <Route path={"/"} element={<IndexProject />} />
                <Route path={"/index_projet"} element={<IndexProject />} />
                <Route path={"/index_story"} element={<></>} />
                <Route path={"/index_suggestion"} element={<></>} />
                <Route path={"/index_signalement"} element={<></>} />
                <Route path={"/index_user"} element={<></>} />
                <Route path={"/configuration"} element={<></>} />
            </Routes>

            <Footer />
        </section>
    )
}