'use client'

import { createClient } from "@/utils/supabase/client"


export const runtime = "edge";

interface RemoveitemProps {
    email: string;
    bookId: number;
}

const RemoveItem = (props: RemoveitemProps) => {
    const supabase = createClient()
    
    const handleClick = async () => {
        const {error} = await supabase.from("list").delete().eq("email",props.email).eq("book_id",props.bookId)
        window.location.reload();
        console.log(error)
    }
    
    return(
        <button className="p-3 w-52 bg-red-700 text-whiteself-center rounded-md mt-8" onClick={handleClick}>Remove from my list</button>
    )
}

export default RemoveItem