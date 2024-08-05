import { createClient } from "@/utils/supabase/server";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import Image from "next/image";

interface BookPageProps {
    params: {
        productId: string;
    }
}

const BookPage: React.FC<BookPageProps> = async ({params}) => {
    const supabase = createClient()
    const {data: book}: PostgrestSingleResponse<{ name: string, image: string, description: string, num_pages: string }> = await supabase.from("book").select().eq("id",params.productId).returns<{name: string, image: string, description: string, num_pages: string}>().single()
    if(book)

    return(
        <main className="min-h-screen">
            <div className="flex p-5">
                <Image src={book?.image} alt={book?.name} width={400} height={400}></Image>
                <div className="p-5 gap-7 flex flex-col">
                    <h1 className="text-3xl font-bold">{book?.name}</h1>
                    <p>{book?.description}</p>
                    <h3 className="text-xl">{book?.num_pages} pages.</h3>
                </div>
            </div>
        </main>
    )
}

export default BookPage;