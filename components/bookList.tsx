
import BookCard from "@/components/bookCard";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function BookList() {
    const supabase = createClient();
    const {data: books} = await supabase.from("book").select()
    
    return (
        <section className="flex-1 p-5 bg-zinc-500">
            <h1 className="text-xl text-slate-950 text-center mb-4">Books</h1>
            <div className="grid-cols-3 grid gap-3">
                {books?.map( 
                    (book) => {
                        return (
                            <BookCard key={book.id} name={book.name} image={book.image} numPages={book.num_pages} />
                        )
                    }
                )}
            </div>
        </section>
    )
}