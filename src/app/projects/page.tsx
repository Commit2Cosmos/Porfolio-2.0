import type { Metadata } from 'next';
import Link from 'next/link';
import { HiChevronDoubleUp } from 'react-icons/hi';
import paths from 'paths';


export const metadata: Metadata = {
    title: 'Projects'
};


export default function Projects() {
    return (
        <main>
            <Link href={paths.about}>
                <HiChevronDoubleUp size='55' className='bg-red-400 dark:bg-red-500 text-white p-2' />
            </Link>
        </main>
    );
}