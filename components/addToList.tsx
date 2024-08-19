'use client'

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AddModal from "./addModal";


export const runtime = "edge";

interface AddToListProps {
    book_id: number;
    pages_read: number;
    reading: boolean;
    email: string | undefined;
}

const AddToList = (props: AddToListProps) => {
    const supabase = createClient()
    const router = useRouter()

    const [showModal, setShowModal] = useState(false)
        
    const handleClick =  () => {
        if(!props.email) router.push("/login")
        setShowModal(true)
    }
        
    
    return(
        <div>
            <button className="p-3 bg-red-400 w-52 rounded-md" onClick={handleClick}>Add to my list</button>
            {showModal &&
                <AddModal book_id={props.book_id} email={props.email} onClose={() =>setShowModal(false)}></AddModal>
            }
        </div>
    )
}

export default AddToList