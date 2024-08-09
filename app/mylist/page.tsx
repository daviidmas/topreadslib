import ItemCard from "@/components/ItemCard"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

const ListPage = async () => {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    const { email } = data.user
    const { data: list } = await supabase.from("list").select().eq("email", email)
    let emptyList = false
    if(list && list.length==0) {
        emptyList = true
    }

    return(
        <div className="min-h-screen bg-slate-700 text-white flex flex-col  p-5">
             <div className="sticky top-0 justify-end bg-slate-700 flex gap-3 p-4 w-15">
                    <div className="bg-indigo-900 w-4 h-4"></div>
                    <h1>Reading</h1>
                    <div className="bg-amber-900 w-4 h-4"></div>
                    <h1>Want to read</h1>
            </div>
            <h1 className="mb-6 text-center">Reading List</h1>
            <div className="flex flex-col items-center gap-6">
                {(list &&!emptyList) &&
                    list.map((item) => (
                        <ItemCard
                            key={item.id}
                            bookId={item.book_id}
                            pagesRead={item.pages_read}
                            reading={item.reading}
                            email={item.email}
                        />
                    ))}
                {emptyList &&
                    <h1 className="text-lg text-red-600">There is not any Book in your list yet</h1>
                }
            </div>
        </div>
    )
}

export default ListPage