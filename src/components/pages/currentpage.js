import React from "react";
import {Route, Routes} from "react-router-dom";
import BriqueProject from "./projects/briqueproject";
import ShowProject from "./projects/showproject";
import ResumeProject from "./projects/resumeproject";

export default function CurrentPage(){
    return (
        <section className={
            "flex flex-col " +
            "justify-between " +
            "w-full h-full min-h-screen " +
            "bg-background text-white " +
            "overflow-auto"}>
            <Routes>

                {/*#region ROUTES DES PROJETS*/}
                <Route path={"/"} element={<BriqueProject />} />
                <Route path={"/index-projects/*"} element={<BriqueProject />} />
                <Route path={"/index-projects"} element={<BriqueProject />} >
                    <Route path={"/index-projects/create-project"} element={<></>} />
                    <Route path={"/index-projects/show-project/:id"} element={<ShowProject />}>
                        <Route path={"/index-projects/show-project/:id/resume"} element={<ResumeProject />} />
                        <Route path={"/index-projects/show-project/:id/user-stories"} element={<></>} />
                        <Route path={"/index-projects/show-project/:id/suggestions"} element={<></>} />
                        <Route path={"/index-projects/show-project/:id/files"} element={<></>} />
                    </Route>
                </Route>
                {/*#endregion*/}

                <Route path={"/index-stories"} element={<></>} />
                <Route path={"/index-suggestions"} element={<></>} />
                <Route path={"/index-signalement"} element={<></>} />
                <Route path={"/index-user"} element={<></>} />
                <Route path={"/configuration"} element={<></>} />
            </Routes>
        </section>
    )
}