import Link from 'next/link';
import { AiFillGithub, AiFillMediumCircle } from 'react-icons/ai';
import Image from 'next/image';
import paths from 'paths';


export default function Circles() {
    return (
        <div className="my-4 h-14
        flex items-stretch gap-3
        ">
            <Link href={paths.github} className='flex items-center justify-center'>
                <AiFillGithub className='w-full h-full' />
            </Link>
            <Link href={paths.medium} className='flex items-center justify-center'>
                <AiFillMediumCircle className="w-full h-full" />
            </Link>
            <Link href={paths.linkedin} className='flex items-center justify-center'>
                <Image
                    src="/linkedin-round-svgrepo-com.svg" 
                    alt={'linkedin logo'}
                    height="15"
                    width="15"
                    className='w-full h-full p-[0.2rem] dark:white-colour'
                />
            </Link>
        </div>
    );
}