import Image from "next/image"

export default function() {
    return (
        <div className='absolute z-10 bottom-0 right-[40%]'>
            <Image
            src={"/telescope.png"}
            alt='telescope image'
            width={140}
            height={1}
            />
        </div>
    )
}