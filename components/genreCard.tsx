
import Link from "next/link";


export const runtime = "edge";

type GenreCardProps = {
    key: number;
    name: string;
    description: string;
}

export default function GenreCard(props: GenreCardProps ) {
    const { name } = props
    return(
        <Link href={`/browse/${name.toLowerCase()}`} className="hover:bg-gray-500 group p-3 rounded-lg w-32">
            {name}
        </Link>
    )
}