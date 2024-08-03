import Image from "next/image";

interface BookCardProps {
    image: string;
    name: string;
    numPages: string;
}

export default function BookCard(props: BookCardProps) {
    const { image, name, numPages: numPages} = props;
    
    return (
        <div className="border-4 p-4 bg-slate-400 border-blue-950 w-64">
            <Image src={image} alt={name} width={200} height={200} ></Image>
            <h1 className="text-2xl">{name}</h1>
            <p className="text-xs">{numPages} pages.</p>
        </div>
    )
}