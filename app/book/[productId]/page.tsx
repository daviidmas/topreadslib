import AddToList from "@/components/addToList";
import { createClient } from "@/utils/supabase/server";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import Image from "next/image";
import { redirect } from "next/navigation";

interface BookPageProps {
    params: {
        productId: string;
    }
}

const BookPage: React.FC<BookPageProps> = async ({params}) => {
    const supabase = createClient()
    const {data: book}: PostgrestSingleResponse<{ id: number, name: string, image: string, description: string, num_pages: string }> = await supabase.from("book").select().eq("id",params.productId).returns<{name: string, image: string, description: string, num_pages: string}>().single()
    
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }
    const { email } = data.user
    
    if(book && email)

    

    return(
        <main className="min-h-screen">
            <div className="flex p-5">
                <Image src={book?.image} alt={book?.name} width={400} height={400}></Image>
                <div className="p-5 gap-7 flex flex-col">
                    <h1 className="text-3xl font-bold">{book?.name}</h1>
                    <p>{book?.description}</p>
                    <h3 className="text-xl">{book?.num_pages} pages.</h3>
                    <AddToList book_id={book.id} pages_read={123} reading={true} email={email} ></AddToList>
                </div>
            </div>
        </main>
    )
}

export default BookPage;