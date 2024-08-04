import BookList from "@/components/bookList";
import GenreFilter from "@/components/genreFilter";

export default  function Browse({searchParams} :
  {searchParams? :
    {
      genre?: string;
    }
  }
) {   
  const genre = searchParams?.genre || '';
  
  return (
      <div className="flex min-h-screen">
        <GenreFilter />
        <BookList genre={genre} />
      </div>
    );
  }
  