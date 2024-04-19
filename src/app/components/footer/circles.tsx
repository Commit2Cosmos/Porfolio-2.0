import Link from 'next/link';
import { ImLinkedin2 } from 'react-icons/im';
import { AiFillGithub, AiFillMediumCircle } from 'react-icons/ai';
import type { IconType } from 'react-icons'
import paths from 'paths';


interface CircleProps {
    Icon: IconType,
    link_url: string
}


function Circle(props: CircleProps) {

    const { Icon, link_url } = props;

    return (
        <Link href={link_url}>
            { <Icon size='48' /> }
        </Link>
    );
}


export default function Circles() {
    return (
        <>
            <Circle Icon={ ImLinkedin2 } link_url={paths.linkedin} />
            <Circle Icon={ AiFillGithub } link_url={paths.github} />
            <Circle Icon={ AiFillMediumCircle } link_url={paths.medium} />
        </>
    );
}