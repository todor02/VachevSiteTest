/* Hello, I just wanted to say i know what
   ES6 (arrow functions) is and how to use it,
   but i dont think i had an oportunity to use
   it this type/style that i chose.
   I watched a couple of videos building a site
   with the arrow functions, but i dont think im
   that good for now!      
   This took me 15 hours because i havent coded
   for the wholle summer (i know its slow i hope i 
   can get better).
   5 hours(from 15) got wasted from a bug!
   I hope you like my work!    : )        */

import React from "react";
import ReactDOM from "react-dom";
import "./table.css"
import background from './images/background.png'
import video from './images/video.png'
import workSpace from './images/workSpace.jpeg'
import teacherPoint from './images/teacherPoint.jpg'
import workMeeting from './images/workMeeting.png'


function EvryThing () {
    return (
        <table cellspacing="20">
        <h1 align="center"><font>Managed agency selection</font></h1>
        <p align="center"><font>Stengthen your onboarding process</font></p>
        <img className="body" src={background} />
        <img className="video" src={video} />
            <thead>
            <tr className="treeTables">
                <tr className="tableOne">
                    <td>
                    <img align="left" valign="center" className="workSpace" src={workSpace} />
                    <h2 align="left" valign="top">Brief</h2>
                    <p className="p2">Complete <b>Brief writing or simple guidance</b> on what to include, we've got you covered.</p>
                    </td>
                </tr>
                <tr className="tableTwo">
                    <td>
                    <img align="left" valign="middle" className="teacherPoint" src={teacherPoint} />
                    <h2 align="left" valign="top">Search</h2>
                    <p className="p2">In-depth agency search covering; <b>criteria matching</b>, door knocking and due-dilligence vetting.</p>
                    </td>
                </tr>
                <tr className="tableThree">
                    <td>
                    <img align="left" valign="middle" className="workMeeting" src={workMeeting} />
                   <h2 align="left" valign="top">Pitch</h2>
                   <p className="p2">Comprehensive <b>pitch management</b>, including comms, diary management and pitch hosting.</p>
                    </td>
                </tr>
            </tr>
            </thead>
        </table>
    )
}

ReactDOM.render(<EvryThing  /> , document.getElementById('root'));
