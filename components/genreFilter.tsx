import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import GenreCard from "./genreCard"


export default async function GenreFilter() {
    const supabase = createClient()
    const {data: genres, error} = await supabase.from("genre").select("*")
    
    if(error) throw error

    return(
        <section className="gap-6 bg-gray-700 p-7 text-center w-64 text-slate-100">
            <h2 className="text-lg mb-3">Genres</h2>
            <hr />      
            <div className="flex flex-col gap-6 mt-9 items-center">
                {
                    genres.map((genre) => {
                        return(
                            <GenreCard key={genre.id} name={genre.name} description={genre.description} />
                        )
                    })
                }
            </div>
        </section>
    )
}