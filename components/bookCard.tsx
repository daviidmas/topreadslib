'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface BookCardProps {
    key: number;
    id: number
    image: string;
    name: string;
    numPages: string;
}

export default function BookCard(props: BookCardProps) {
    const { id, image, name, numPages: numPages} = props;
    const router = useRouter()
    
    const handleClick = () => {
        router.push(`/book/${id}`)
    }

    return (
        <div className="border-4 p-4 bg-slate-400 border-blue-950 w-64">
            <Image src={image} alt={name} width={200} height={200} ></Image>
            <h1 className="text-2xl">{name}</h1>
            <p className="text-xs">{numPages} pages.</p>
            <button onClick={handleClick}>See more</button>
        </div>
    )
}