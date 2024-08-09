'use client'

import { logout } from "@/app/login/actions"
import Link from "next/link"

const LoginButton = (props :
    {text: string}
) => {
    
    const loginText = props.text

    const handleClick = async () => {
        logout()
    }

    if(loginText==="Logout") {
        return(
            <button onClick={handleClick} className="hover:text-blue-700">{loginText}</button>
        )
    } else {
        return(
            <Link href="/login" className="flex-none hover:text-blue-700">{loginText}</Link>
        )
    }
}

export default LoginButton