import Link from "next/link";
import paths from "paths";




export default function MLSection() {
    return (
        <div>
            <Link href={paths.ml}>
                ML
            </Link>
        </div>
    )
}