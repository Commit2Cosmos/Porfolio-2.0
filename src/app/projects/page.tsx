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
        <main className="relative
        w-screen h-screen
        ">
            <section className="outline-all w-full h-full
            flex
            ">
                <ProjectsSections />
            </section>
            <div className='absolute'>
                <HiChevronDoubleUp size='55' className='chevron-btn' />
                <Link href={paths.other}>
                    Other
                </Link>
            </div>
        </main>
    );
}