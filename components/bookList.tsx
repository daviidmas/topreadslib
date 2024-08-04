'use client'

import BookCard from "@/components/bookCard";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
//import { cookies } from "next/headers";

type BookListProps = {
    genre: string;
}

type Book = {
    id: number;
    name: string;
    description: string;
    num_pages: string;
    author: string;
    image: string;
}

export default function BookList(props: BookListProps) {
    const supabase = createClient();
    const {genre} = props
    const [books, setBooks] = useState<Book[]>([]);
 
    useEffect(() => {
        getBooks()
    }, [])

    let getBooks = async () => {
        if(genre===''){
            const {data} = await supabase.from("book").select()
            if(data) setBooks(data)
        } else {
            console.log("hola")
            const {data:genreId} = await supabase.from("genre").select("id").eq("name",genre)
            const {data:bookIdGenre} = await supabase.from("book_genre").select("book_id").eq("genre_id", genreId);
            const {data} = await supabase.from("book").select().eq("id", bookIdGenre)
            if(data) setBooks(data)
            console.log(books)
        }
    }

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