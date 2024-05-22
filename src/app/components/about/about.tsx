import Stacks from "./stacks"
import Image from "next/image"


export default function About() {
    return (
        <section className="section-template">
            <div className="pl-[7%] py-[13%] relative
            ">
                <Image src="/uni_photo_cutout.png"
                alt={"anton photo"}
                width={450}
                height={1}
                className="-z-20 rounded-4xl"
                />
            </div>
            <div className="basis-7/12 pl-[3%] pr-[8%] grow
            flex flex-col items-start justify-center gap-5">
                <h2>I am</h2>
                <p className="text-xl font-normal tracking-tight leading-snug">lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus error cum corrupti consequatur doloribus nostrum eum porro, iure sit voluptatum, iste officiis tempore vel illum temporibus magni cupiditate laboriosam reprehenderit possimus? Molestiae maxime nihil tenetur nostrum pariatur voluptatem voluptates expedita laudantium itaque? Labore, velit vero iste repellat harum dolores eius deleniti expedita culpa iusto minima molestias hic eum perferendis, non fugiat amet corporis similique. Aut nisi doloribus labore, deserunt expedita minus! Aut ab commodi praesentium.</p>
                <p className="text-xl font-normal tracking-tight">I&apos;m good with</p>
                <Stacks />
            </div>
        </section>
    )
}