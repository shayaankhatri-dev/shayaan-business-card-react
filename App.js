import React from "react"
import ProfilePicture from "./components/ProfilePicture.js"
import Body from "./components/Body.js"
import Links from "./components/Links.js"
import NameAndTitle from "./components/NameAndTitle.js"
import Footer from "./components/Footer.js"

export default function App(){
    return (
        <div className="container">
            <ProfilePicture/>
            <NameAndTitle/>
            <Links/>
            <Body/>
            <Footer/>
        </div>
    )
}