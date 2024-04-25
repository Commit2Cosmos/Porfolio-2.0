import Link from 'next/link'


export default function LandingMain() {
    return (
        <section className="w-screen h-screen 
        px-[10%] pb-20
        flex flex-col justify-center
        ">
            <p>Hi, I am</p>
            <h1 className='my-2'>Anton Belov</h1>
            <h3 className='my-1'>Physicist by degree, developer by choice.</h3>
            <div className='font-bold text-lg my-8
            flex gap-6
            '>
                <button className="px-6 py-4 landing-btn custom-border shadow-menu-shadow bg-orange-xtra">Resume</button>
                <Link className="px-6 py-4 landing-btn custom-border shadow-menu-shadow" href="/#contact">Contact</Link>
            </div>
        </section>
    )
}