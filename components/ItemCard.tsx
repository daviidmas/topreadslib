import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

interface ItemCardProps {
    key: number;
    bookId: number;
    pagesRead: number;
    reading: boolean;
    email: string;
}

type Book = {
    name: string;
    description: string;
    num_pages: string;
    author: string;
    genre: string;
}

const ItemCard = async (props: ItemCardProps) => {
    const supabase = createClient()

    const {data: book} = await supabase.from("book").select().eq("id",props.bookId).single()
    
    return(
        <div className="flex gap-2 bg-indigo-900 p-4 rounded-md">
            <Image src={book.image} alt={book.name} width={200} height={200}></Image>
            <div className="flex flex-col gap-3">
                <h1 className="text-xl font-bold">{book.name}</h1>
                <h2 className="">{book.description}</h2>
                <h3>Pages read: {props.pagesRead}/{book.num_pages}</h3>
            </div>
        </div>
    )
}

export default ItemCard