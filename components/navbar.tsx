
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function NavBar() {
    const supabase = createClient()
    let loginText = "Logout"

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        loginText = "Login"
    }
    
    return (
        <div className="flex justify-between gap-5 p-4 bg-black text-white">
            <Link href="/" className="flex-none">Top Reads</Link>
            <div className="flex-1 flex justify-center space-x-4 gap-4"> 
                <Link href="/browse">Browse</Link>
                <Link href="/">My List</Link>
            </div>   
            <Link href="/login" className="flex-none">{loginText}</Link>
        </div>
    )
}