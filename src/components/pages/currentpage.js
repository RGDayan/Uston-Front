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
            "bg-background text-white " +
            "overflow-auto"}>
            <Routes>
                <Route path={"/"} element={<IndexProject />} />
                <Route path={"/index-projects"} element={<IndexProject />} />
                <Route path={"/index-projects/*"} element={<IndexProject />} />
                <Route path={"/index-stories"} element={<></>} />
                <Route path={"/index-suggestions"} element={<></>} />
                <Route path={"/index-signalement"} element={<></>} />
                <Route path={"/index-user"} element={<></>} />
                <Route path={"/configuration"} element={<></>} />
            </Routes>

            <Footer />
        </section>
    )
}