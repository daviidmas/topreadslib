'use client'

import { createClient } from "@/utils/supabase/client";
import { pages } from "next/dist/build/templates/app-page";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface AddModalProps {
    onClose: Function;
    book_id: number;
    email: string | undefined;
}

const AddModal = (props: AddModalProps) => {
    const supabase = createClient()
    const router = useRouter()
    const [isReading, setIsReading] = useState<boolean>(false)
    const [pagesRead, setPagesRead] = useState<number | ''>('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const { error } = await supabase.from("list").insert(
            {
                book_id: props.book_id,
                pages_read: pagesRead,
                reading: isReading,
                email: props.email
            }
        )

        if(error) {
            console.log(error)
        }

        
        router.push("/mylist")
    }

    const handleCloseClick = () => {
        props.onClose()
    }
    
    return(
        <form onSubmit={handleSubmit} className="p-20 px-44 flex flex-col gap-5 absolute justify-center items-center bg-slate-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md">
            <h1 className="text-lg font-bold">Add Form</h1>
            <hr />
            <div className="flex gap-3">
                <label htmlFor="isReading">Reading?</label>
                <input type="checkbox" name="isReading" onChange={(e) => setIsReading(e.target.checked)}  />
            </div>
            <label htmlFor="pageRead">How many pages?</label>
            <input type="text" name="pageRead" onChange={(e) => setPagesRead(+(e.target.value))}/>
            <button type="submit" className="p-3 bg-blue-700 rounded-md">Add to My List</button>
            <button type="button" onClick={handleCloseClick} className="p-3 bg-red-700 rounded-md">Close</button>
        </form>
    )
}

export default AddModal