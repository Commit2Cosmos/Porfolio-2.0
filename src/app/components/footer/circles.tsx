import Link from 'next/link';
import { ImLinkedin2 } from 'react-icons/im';
import { AiFillGithub, AiFillMediumCircle } from 'react-icons/ai';
import { IconType } from 'react-icons'


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
            <Circle Icon={ ImLinkedin2 } link_url='linkedin_url' />
            <Circle Icon={ AiFillGithub } link_url='github_url' />
            <Circle Icon={ AiFillMediumCircle } link_url='medium_url' />
        </>
    );
}