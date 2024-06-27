import Image from "next/image"

/**
 * Renders two background images of a telescope and a galaxy for the landing page. The galaxy image is visible only with dark mode on.
 *
 * @return {JSX.Element} The rendered component.
 */
export default function BGImages(): JSX.Element {
    return (
        <>
            <div className='absolute -z-10 bottom-0 right-[40%] dark:whitish-colour'>
                <Image
                src={"/telescope.png"}
                alt='telescope image'
                width={180}
                height={0}
                />
            </div>
            <div className='absolute w-[45%] h-[70%] top-[15%] right-0 -z-20 invisible dark:visible'>
                <Image
                src={"/night-sky.jpg"}
                alt='galaxy image'
                fill={true}
                />
                <div className="img-fade"></div>
            </div>
        </>
    )
}