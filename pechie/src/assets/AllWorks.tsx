//Luna
import demoLuna from "./workVideos/demo-luna.mp4"
import lofiLuna from "./workVideos/lofi-luna.mp4"
import mockupLuna from "./workVideos/wireframe-luna.mp4"

//Arch
import lofiArch from "./workVideos/wireframe-arch.mp4"
import mockupArch from "./workVideos/mockup-arch.mp4"

//Arch

import lofiOgius from "./workVideos/lofi-ogius.mp4"
import mockupOgius from "./workVideos/mockup-ogius.mp4"

//Arch

import lofiSun from "./workVideos/mockup-sunset.mp4"
import mockupSun from "./workVideos/lofi-sunset.mp4"


const demoArch = "https://res.cloudinary.com/dhlboslsy/video/upload/v1760485751/New_arc_v0obbq.mp4";
const demoMyClover = "https://drive.google.com/file/d/1-LnBJiKhywVO-QPPZiKSKHnXb4t46tjV/preview";


const lofiMyClover = "";
const mockupMyClover = "";



export const works = [
    {   id:1, 
        name:"Luna", 
        deploy:"https://lunacomics-client.vercel.app", 
        tags:["TypeScript", "React", "HTML/CSS", "TailWindCSS", "ExpressJS"], 
        description:"A website to help independent comic authors post their comics, update their fans and sell their merchandise.",
        github:"https://github.com/pixelatedpup/lunacomics",
        figma:"",
        videos:[demoLuna,mockupLuna,lofiLuna]
    
    },

    {   id:2, 
        name:"Arch Arcades", 
        deploy:"https://archredux.vercel.app", 
        tags:["JavaScript", "React", "HTML/CSS", "TailWindCSS"], 
        description:"A website for a local arcade that displays each game using a library API, aswell as the current highscore of each member. Currently in production ,but core features have been implemented..",
        github:"https://github.com/pixelatedpup/archredux",
        figma:"https://www.figma.com/design/BnrdiFaGesFvgOKNbqN135/Arch-Arcades?node-id=2-148&t=h6mjttNQwib45vOQ-1",
        videos:[demoArch,mockupArch,lofiArch]
    
    },

        {   
        id:3, 
        name:"OGIUS", 
        deploy:"https://ogius.net", 
        tags:["TypeScript", "React", "HTML", "TailWindCSS", "MongoDB"], 
        description:"A portfolio website to display my illustrations, commision services and shop items. A prototype has been made in figma, but actual coding has not began implementation.",
        github:"https://github.com/pixelatedpup/ogius",
        figma:"https://www.figma.com/design/ZLceXblPLH4lB0ytC5TLrd/OGIUS?t=h6mjttNQwib45vOQ-1",
        videos:[mockupOgius,lofiOgius, " "]
    
    },

        {   
        id:4, 
        name:"myClover", 
        deploy:"sample", 
        tags:["Figma", "TypeScript", "React Native", "JavaScript", "MongoDB"], 
        description:"A mobile application that tracks reading habits of users and keeps a catalogue of their books. Made in React Native and TypeScript",
        github:"",
        figma:"https://www.figma.com/design/WOFTb63byDA1zXHgfyuEkS/Sunset-Cinemas?node-id=46-194&t=h6mjttNQwib45vOQ-1",
        videos:[demoMyClover,lofiMyClover, mockupMyClover]
    
    },
]

