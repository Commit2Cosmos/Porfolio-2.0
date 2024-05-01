import type { Metadata } from 'next';
import { HiChevronDoubleUp } from 'react-icons/hi';
import paths from 'paths';
import MLSection from './components/ml';
import FrontEndSection from './components/frontend';
import Link from 'next/link';


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
                <MLSection />
                <FrontEndSection />
            </section>
            <div className='absolute'>
                <HiChevronDoubleUp size='55' className='bg-red-400 dark:bg-red-500 text-white p-2' />
                <Link href={paths.other}>
                    Other
                </Link>
            </div>
        </main>
    );
}