import { login, signup } from "./actions";


export default function LoginPage() {
    return (
    <div className="flex items-center justify-center min-h-screen bg-slate-500 content-center">
        <form className=" flex flex-col items-center bg-slate-700 w-96 h-96 border-4 p-3 gap-3 text-white">
            <label htmlFor="email" className="mt-5">Email:</label>
            <input id="email" name="email" type="email" className="text-black" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" className="text-black" required />
            <button className="p-3 bg-red-500 rounded-lg mt-5" formAction={login}>Log in</button>
            <button className="p-3 bg-red-500 rounded-lg mt-3 mb-3" formAction={signup}>Sign up</button>
        </form>
    </div>
    )
  }