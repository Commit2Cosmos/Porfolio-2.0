import type { Metadata } from 'next';
import { HiChevronDoubleUp } from 'react-icons/hi';
import paths from 'paths';
import Link from 'next/link';
import Navbar from "@/navigation/navbar";
import SectionTemplate from './section_template';


export const metadata: Metadata = {
    title: 'Projects'
};
[]

export default function Projects() {
    return (
        <main className="relative w-screen h-screen overflow-hidden">
            <Navbar />
            <section className="w-full h-full flex">
                <SectionTemplate vid_name={"wallpapers/wallpaper"} section_path={paths.ml} title={"ML"} />
                <SectionTemplate vid_name={"wallpapers/wallpaper_2"} section_path={paths.frontend} title={"Frontend"} />
            </section>

            <div className='absolute center-btn bottom-0'>
                <Link href={paths.other}>
                    <div className='other-btn-text'>
                        <HiChevronDoubleUp size='55' className='chevron-btn' />
                        <div className='text-center absolute center-btn whitespace-nowrap'>
                            <p className='text-whitish-bg'>Click to see other projects!</p>
                        </div>
                    </div>
                </Link>
            </div>
        </main>
    );
}