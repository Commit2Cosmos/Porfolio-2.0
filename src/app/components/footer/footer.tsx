import Circles from './circles'


export default function Footer() {
    return (
        <footer className="h-[40vh] border-t border-black mx-[4%] relative pt-10
        flex justify-between items-start
        ">
            <div className="flex flex-col">
                <h2 className="text-5xl tracking-normal font-black">Anton Belov</h2>
                <p className="my-1">Software developer</p>
                <Circles />
            </div>
            <div className="flex flex-col items-end">
                <p>Phone: +44 7999 874 226</p>
                <p>Email: anton.belov.al7@gmail.com</p>
            </div>
            <div className='absolute right-0 bottom-3 text-sm font-semibold'>
                <p className='text-orange-xtra'>2024@ All rights reserved | Anton Belov.</p>
            </div>
        </footer>
    )
}