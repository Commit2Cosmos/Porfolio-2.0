import type { Metadata } from 'next';
import { HiChevronDoubleUp } from 'react-icons/hi';
import paths from 'paths';
import Link from 'next/link';
import ProjectsSections from './components/section_template'


export const metadata: Metadata = {
    title: 'Projects'
};


export default function Projects() {
    return (
        <main className="relative w-screen h-screen overflow-hidden">
            <section className="w-full h-full
            flex
            ">
                <ProjectsSections />
            </section>
            <div className='absolute center-btn bottom-0'>
                <div className='outline-all'>
                    <HiChevronDoubleUp size='55' className='chevron-btn hover:grayscale-0 duration-200' />
                    <Link href={paths.other} className='text-center min-w-20 absolute center-btn'>
                        <p>Other</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}