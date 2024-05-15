"use client"

import Link from "next/link";
import { useEffect } from "react";


interface SectionTemplateProps {
    vid_name: string;
    section_path: string;
    title: string;
}

export default function SectionTemplate({ vid_name, section_path, title }: SectionTemplateProps) {

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
    }, [vid_name]);


    return (
        <div className="flex-1 relative group">
            <Link href={section_path}>
                <video id={`${vid_name}`} autoPlay={false} muted loop className="object-cover h-full -z-10 duration-300 grayscale">
                    <source src={`${vid_name}.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h2 className="absolute bottom-[10%] center-btn text-center opacity-0 text-gray-300 group-hover:opacity-100 duration-300 custom-drop-shadow pointer-events-none">{title}</h2>
            </Link>
        </div>
    )
}