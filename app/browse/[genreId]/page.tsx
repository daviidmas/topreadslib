import BookList from "@/components/bookList"
import { createClient } from "@/utils/supabase/server"

type Book = {
    id: number;
    name: string;
    description: string;
    num_pages: string;
    author: string;
    image: string;
  };

const GenrePage = async ({params}:
    {
        params : {genreId: string}
    }
) => {
    const supabase = createClient()
    const {data: books} = await supabase.from("book").select().eq("genre", params.genreId).returns<Book[]>()
    if(!books) return null; 

    return(
        <div className="flex min-h-screen">
            <section className="flex-1 p-5 bg-zinc-500">
                <div className="text-center mb-4 p-3 ml-5">
                    <h1 className="text-xl text-blue-200">{params.genreId.charAt(0).toUpperCase() + params.genreId.slice(1).toLowerCase()} Books</h1>
                </div>
                <BookList books={books}></BookList>
            </section>
        </div>
    )
}

export default GenrePage