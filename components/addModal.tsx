'use client'

import { createClient } from "@/utils/supabase/client";
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
        <form onSubmit={handleSubmit} className="text-white px-10 p-4 flex flex-col gap-5 absolute justify-center items-center rounded-lg shadow bg-gray-700 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="border-b rounded-t p-4 border-gray-200">
                <h1 className="text-xl font-semiboldtext-white">Add to Your List</h1>
            </div>
            <div className="flex gap-3">
                <label htmlFor="isReading">Reading?</label>
                <input className="w-4 h-4 border  rounded  focus:ring-3 bg-gray-600 border-gray-500focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800" type="checkbox" name="isReading" onChange={(e) => setIsReading(e.target.checked)}  />
            </div>
            <label htmlFor="pageRead">How many pages?</label>
            <input className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400text-white" type="text" name="pageRead" onChange={(e) => setPagesRead(+(e.target.value))}/>
            <button type="submit" className="px-5 p-3 bg-blue-700 rounded-md">Add to My List</button>
            <button type="button" onClick={handleCloseClick} className="px-5 p-3 bg-red-700 rounded-md">Close</button>
        </form>
    )
}

export default AddModal