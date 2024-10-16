import React from "react"

export default function Links(){
    return (
        <div className="links-container">
            <label className="email-label">
            <img src="./public/email.png"/>
            <a>Email</a>
            </label>
            <label for="linkedin" href="https://www.linkedin.com/in/shayaan-khatri/" className="linkedin-label">
            <img src="./public/linkedin.png"/>
            <a name="linkedin" href="https://www.linkedin.com/in/shayaan-khatri/">LinkedIn</a>
            </label>
        </div>
    )
}