import Link from 'next/link'
import BGImages from './bgImages'

/**
 * Renders the section of the page first seen on the landing page. It includes the background images and two buttons - one for 
 * downloading the resume, another for directing the user to the contact section.
 *
 * @return {JSX.Element} The JSX element representing the landing main section.
 */
export default function LandingMain(): JSX.Element {
    return (
        <section className="section-template min-h-[100vh]
        px-[10%] pb-20 flex-col
        ">
            <p>Hi, I am</p>
            <h1 className='my-2'>Anton Belov</h1>
            <h3 className='my-1'>Physicist by degree, developer by choice.</h3>
            <div className='font-bold text-lg my-8
            flex gap-6
            '>
                <Link href="/Anton_Belov_CV.pdf" download className="px-6 py-4 landing-btn custom-border shadow-menu-shadow bg-orange-xtra 
                pressed-btn
                ">
                    Resume
                </Link>
                <Link href="/#contact" className="px-6 py-4 landing-btn custom-border shadow-menu-shadow 
                pressed-btn
                ">Contact</Link>
            </div>
            <BGImages />
        </section>
    )
}