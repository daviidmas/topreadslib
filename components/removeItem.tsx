'use client'

import { createClient } from "@/utils/supabase/client"

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
        <button className="p-3 bg-red-700 text-white w-64 self-center" onClick={handleClick}>Remove from my list</button>
    )
}

export default RemoveItem