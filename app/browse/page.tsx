import BookList from "@/components/bookList";
import { createClient } from "@/utils/supabase/server";

export const runtime = "edge";

type Book = {
  id: number;
  name: string;
  description: string;
  num_pages: string;
  author: string;
  image: string;
};

export default async function Browse() {   
  const supabase = createClient();
  const { data: books } = await supabase.from("book").select().returns<Book[]>();
  if (!books) return null; // Handle cases where books might be undefined or null

  return (
    <div className="flex min-h-screen">
        <section className="flex-1 p-5 bg-zinc-500">
          <div className="text-center mb-4 p-3 ml-5">
            <h1 className="text-xl text-blue-200">All Books</h1>
          </div>
          <div className="justify-center flex">
            <BookList books={books} /> 
          </div>
      </section>
    </div>
    
  );
}
