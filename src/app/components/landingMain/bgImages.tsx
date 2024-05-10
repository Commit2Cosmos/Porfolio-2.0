import Image from "next/image"

export default function() {
    return (
        <>
            <div className='absolute -z-10 bottom-0 right-[40%] dark:whitish-colour'>
                <Image
                src={"/telescope.png"}
                alt='telescope image'
                width={180}
                height={1}
                />
            </div>
            <div className='absolute -z-20 bottom-[5%] right-[5%] invisible dark:visible'>
                <Image
                src={"/night-sky.jpg"}
                alt='galaxy image'
                width={500}
                height={1}
                style={{transform: "rotate(90deg)"}}
                />
                <div className="img-fade" style={{transform: "rotate(90deg)"}}></div>
            </div>
        </>
    )
}