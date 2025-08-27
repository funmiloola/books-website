import { useSelector } from "react-redux";
export default function SearchResults() {
    const filteredBooks = useSelector(state => state.booksSearch.searchBook);
     return (<div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
  {filteredBooks && filteredBooks.length > 0 && filteredBooks.map((book, index) => (
    <div key={index} className=" border border-gray-300 p-4 rounded-lg shadow-md flex flex-col items-center w-full">
      <img src={book.image} alt={book.title} className="w-full h-48 object-contain" />
      <h3 className="font-semibold text-gray-700">{book.title}</h3>
      <p className="text-sm text-gray-500">{book.subtitle}</p>
    </div>
  ))}
    </div>
     )
}