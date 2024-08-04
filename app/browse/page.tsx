import BookList from "@/components/bookList";
import GenreFilter from "@/components/genreFilter";

export default  function Browse() {   
    return (
      <div className="flex min-h-screen">
        <GenreFilter />
        <BookList />
      </div>
    );
  }
  