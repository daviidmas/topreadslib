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

    return(
        <div className="min-h-screen bg-slate-700 text-white flex flex-col items-center p-5">
            <h1 className="mb-6">Reading List</h1>
            <div className="flex flex-col gap-6">
                {list?.map(
                    (item) => {
                        return(
                            <ItemCard key={item.id} bookId={item.book_id} pagesRead={item.pages_read} reading={item.reading} email={item.email}></ItemCard>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default ListPage