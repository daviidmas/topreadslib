import BookList from "@/components/bookList";

export default  function Browse() {   
    return (
      <div className="flex min-h-screen">
        <section className="gap-6 bg-slate-700 p-8 text-slate-100">
          <h2>Genres</h2>
          <hr />
          <ul>
            <li>Action</li>
            <li>Drama</li>
            <li>Terror</li>
          </ul>
        </section>
        <BookList />
      </div>
    );
  }
  