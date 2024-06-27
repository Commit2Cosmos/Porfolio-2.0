import Circles from './circles'


/**
 * Renders the footer component with contact information and copyright details.
 *
 * @return {JSX.Element} The JSX element representing the footer component.
 */
export default function Footer(): JSX.Element {
    return (
        <footer className="h-[40vh] fade-border dark:fade-border-dark px-[4%] relative pt-10
        flex justify-between items-start
        ">
            <div className="flex flex-col">
                <h2 className="text-5xl tracking-normal font-black">Anton Belov</h2>
                <p className="my-1">Software developer</p>
                <Circles />
            </div>
            <div className="flex flex-col items-end gap-1">
                <p>Phone: <u className="text-orange-xtra">+44 7999 874 226</u></p>
                <p>Email: <u className="text-orange-xtra">anton.belov.al7@gmail.com</u></p>
            </div>
            <div className='absolute right-[4%] bottom-3 text-sm font-semibold'>
                <p>2024&copy; All rights reserved | Anton Belov</p>
            </div>
        </footer>
    )
}