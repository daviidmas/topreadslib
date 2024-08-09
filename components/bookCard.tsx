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
        <div className="max-w-60 bg-gray-800  border border-gray-700 rounded-lg shadow">
            <Image className="rounded-t-lg" src={image} alt={name} width={250} height={250} ></Image>
            <div className="p-5">
                {/* <h1 className="mb-2 text-2xl font-bold tracking-tight text-white">{name}</h1> */}
                <p className="mb-3 font-normal text-gray-400">{numPages} pages</p>
                <button className="inline-flex items-center px-3 py-2 text-sm rounded-lg font-medium text-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" onClick={handleClick}>See more</button>
            </div>
        </div>
    )
}