import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import RemoveItem from "./removeItem";


export const runtime = "edge";

interface ItemCardProps {
    key: number;
    bookId: number;
    pagesRead: number;
    reading: boolean;
    email: string;
}


const ItemCard = async (props: ItemCardProps) => {
    const supabase = createClient()

    const {data: book} = await supabase.from("book").select().eq("id",props.bookId).single()
    
    return(
        <div className={`max-w-5xl flex gap-2  p-4 rounded-md ${props.reading ? "bg-indigo-900" : "bg-amber-900"}`}>
            <Image className="rounded-lg" src={book.image} alt={book.name} width={350} height={350}></Image>
            <div className="flex flex-col gap-6 p-3">
                <div className="border-b border-gray-300 text-center p-3">
                    <h1 className="text-xl font-bold">{book.name}</h1>
                </div>
                <h2 className="">{book.description}</h2>
                <h3 className="font-light italic text-slate-500">Pages read: {props.pagesRead}/{book.num_pages}</h3>
                <div className="items-center justify-center flex">
                    <RemoveItem email={props.email} bookId={props.bookId}></RemoveItem>
                </div>
            </div>
        </div>
    )
}

export default ItemCard