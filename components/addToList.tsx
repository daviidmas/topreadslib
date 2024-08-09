'use client'

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AddModal from "./addModal";

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
        
    const handleClick = async () => {
        // const { error } = await supabase.from("list").insert(
        //     {
        //         book_id: props.book_id,
        //         pages_read: props.pages_read,
        //         reading: true,
        //         email: props.email
        //     }
        // )

        // if(error) {
        //     console.log(error)
        // }

        
        // router.push("/mylist")


    }
        
    
    return(
        <div>
            <button className="p-3 bg-red-400 w-52" onClick={() =>setShowModal(true)}>Add to my list</button>
            {showModal &&
                <AddModal book_id={props.book_id} email={props.email} onClose={() =>setShowModal(false)}></AddModal>
            }
        </div>
    )
}

export default AddToList