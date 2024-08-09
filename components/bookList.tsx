import BookCard from "@/components/bookCard";

type Book = {
    id: number;
    name: string;
    description: string;
    num_pages: string;
    author: string;
    image: string;
}

interface BookListProps {
    books: Book[];
  }
  
  const BookList: React.FC<BookListProps> = ({ books }) => {
    return (
        <div className="grid-cols-3 grid p-3 gap-3">
            {books?.map(  
                (book) => {
                    return (       
                        <BookCard key={book.id} id={book.id} name={book.name} image={book.image} numPages={book.num_pages} />
                    )
                }
            )}
        </div>
    );
  };
  
  export default BookList;