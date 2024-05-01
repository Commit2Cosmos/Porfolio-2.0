import Link from "next/link";
import paths from "paths";




export default function FrontEndSection() {
    return (
        <div className="flex-1">
            <Link href={paths.frontend}>
                Frontend
            </Link>
        </div>
    )
}