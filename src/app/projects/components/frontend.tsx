import Link from "next/link";
import paths from "paths";




export default function FrontEndSection() {
    return (
        <div>
            <Link href={paths.frontend}>
                Frontend
            </Link>
        </div>
    )
}