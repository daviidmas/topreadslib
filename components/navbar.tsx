import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex gap-5 p-2 bg-black text-white">
            <Link href="/" className="flex-1">Top Reads</Link>
            <Link href="/browse">Browse</Link>
            <Link href="/">My List</Link>
        </div>
    )
}