"use client"

import Link from "next/link";
import paths from "paths";
import { useEffect } from "react";


interface SectionTemplateProps {
    vid_name: string,
    section_path: string
}

function SectionTemplate({ vid_name, section_path }: SectionTemplateProps) {

    useEffect(() => {
        const video = document.getElementById(`${vid_name}`) as HTMLVideoElement;
        video.addEventListener('mouseover', () => {
            video.play();
            video.style.filter = "grayscale(0%)"
        });
        
        video.addEventListener('mouseleave', () => {
            video.pause();
            video.style.filter = "grayscale(100%)"
        });
    }, []);


    return (
        <div className="flex-1">
            <Link href={section_path}>
                <video id={`${vid_name}`} autoPlay={false} muted loop className="object-cover h-full -z-10 duration-200 grayscale">
                    <source src={`${vid_name}.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Link>
        </div>
    )
}


export default function ProjectsSections() {
    return (
        <>
            <SectionTemplate vid_name={"wallpapers/wallpaper"} section_path={paths.ml} />
            <SectionTemplate vid_name={"wallpapers/wallpaper_2"} section_path={paths.frontend} />
        </>
    )
}