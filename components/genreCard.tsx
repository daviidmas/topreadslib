
import Link from "next/link";


type GenreCardProps = {
    key: number;
    name: string;
    description: string;
}

export default function GenreCard(props: GenreCardProps ) {
    const { name } = props
    return(
        <Link href={`/browse/${name.toLowerCase()}`}>
            {name}
        </Link>
    )
}