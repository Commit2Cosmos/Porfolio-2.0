import Link from "next/link";
import paths from "paths";




export default function MLSection() {
    return (
        <div className="flex-1">
            <Link href={paths.ml}>
                ML
            </Link>
        </div>
    )
}