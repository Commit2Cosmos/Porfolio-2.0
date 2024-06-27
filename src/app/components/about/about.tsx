import Stacks from "./stacks"
import Image from "next/image"


/**
 * Renders the About component, which contains my image, a short description of my journey to become a developer, and my skills.
 *
 * @return {JSX.Element} The rendered About component.
 */
export default function About(): JSX.Element {
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
                <p className="text-xl font-normal tracking-tight leading-snug">
                    an <span className="font-medium text-sky-500">astrophysicist</span> who loves <span className="font-medium text-orange-xtra">coding</span>. It began with simple simulations of systems that interested me and
                    solving LeetCode problems, slowly evolving into a passion for <span className="font-medium text-orange-xtra">technology</span>. Over the years, I narrowed down
                    my focus to <span className="font-medium text-sky-500">web development</span> - exploring and expressing my creativity - and <span className="font-medium text-sky-500">deep learning</span>, following a
                    Masters project employing Capsule Networks. Currently I work on personal projects, participate in hacking competitions and contribute to open source.
                </p>
                <p className="text-xl font-normal tracking-tight">I&apos;m good with</p>
                <Stacks />
            </div>
        </section>
    )
}