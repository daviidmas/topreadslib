'use client'

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

interface AddToListProps {
    book_id: number;
    pages_read: number;
    reading: boolean;
    email: string;
}

const AddToList = (props: AddToListProps) => {
    const supabase = createClient()
    const router = useRouter()
        
    const handleClick = async () => {
        const { error } = await supabase.from("list").insert(
            {
                book_id: props.book_id,
                pages_read: props.pages_read,
                reading: true,
                email: props.email
            }
        )

        if(error) {
            console.log(error)
        }

        
        router.push("/mylist")
    }
        
    
    return(
        <button className="p-3 bg-red-400 w-52" onClick={handleClick}>Add to my list</button>
    )
}

export default AddToList