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
        <div className="flex">
            <Image src={book.image} alt={book.name} width={200} height={200}></Image>
            <div>
                <h1>{book.name}</h1>
                <h2>{book.description}</h2>
                <h3>{props.pagesRead}/{book.num_pages}</h3>
            </div>
        </div>
    )
}

export default ItemCard