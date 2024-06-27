"use client"

import Link from "next/link";
import { useEffect } from "react";


interface SectionTemplateProps {
    vid_name: string;
    section_path: string;
    title: string;
}

/**
 * Renders a template for a wallpaper-link on the Projects page.
 *
 * @param {SectionTemplateProps} props - The props object containing the following properties:
 *   - vid_name: The name of the mp4 wallpaper.
 *   - section_path: The local path to the section.
 *   - title: The name of the section.
 * @return {JSX.Element} The JSX element representing the section template.
 */
export default function SectionTemplate({ vid_name, section_path, title }: SectionTemplateProps): JSX.Element {

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
                <video preload="auto" poster="wallpapers/wallpaper_poster.png" id={`${vid_name}`} autoPlay={false} muted loop className="object-cover h-full -z-10 duration-300 grayscale">
                    <source src={`${vid_name}.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h2 className="absolute bottom-[10%] center-btn text-center opacity-0 text-gray-300 group-hover:opacity-100 duration-300 custom-drop-shadow pointer-events-none">{title}</h2>
            </Link>
        </div>
    )
}