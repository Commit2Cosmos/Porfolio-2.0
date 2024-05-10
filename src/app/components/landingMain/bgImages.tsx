import Image from "next/image"

export default function() {
    return (
        <>
            <div className='absolute z-10 bottom-0 right-[40%]'>
                <Image
                src={"/telescope.png"}
                alt='telescope image'
                width={180}
                height={1}
                />
            </div>
            <div className='absolute z-10 bottom-[10%] right-[5%] hidden'>
                <Image
                src={"/night-sky.jpg"}
                alt='galaxy image'
                width={400}
                height={1}
                />
                <div className="img-fade"></div>
            </div>
        </>
    )
}