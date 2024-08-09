import Image from "next/image";
import Link from "next/link";


export default function Index() {
  return (
    <div className="min-h-screen  bg-zinc-500">
      <section className="p-5 flex items-center ">
        <div className="flex-1 text-center">  
          <h1 className="text-3xl text-blue-900 font-bold mb-7">Discover your next favourite book</h1>
          <h2 className="text-xl mb-14">Find and track your books for free!</h2>
          <Link href="/browse" className="bg-blue-950 text-white p-3 rounded-md transform transition-transform hover:scale-125 hover:bg-blue-700">Browse</Link>
        </div>
        <Image className="mr-8" src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Books" width={400} height={300}></Image>
      </section>
    </div>
  );
}
