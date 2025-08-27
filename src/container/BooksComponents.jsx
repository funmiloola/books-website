import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function BookComponent() {
  const books = useSelector((state) => state.allBooks.books);
  const renderList = books.map((book) => {
    const { title, image, price, isbn13, subtitle } = book;
    return (
      <div
        key={isbn13}
        className="h-[450px] md:h-[470px] px-8 w-full flex flex-col items-center justify-center text-center border border-gray-300 rounded-lg shadow-md"
      >
        <Link to={`/books/${isbn13}`}>
          <div className="flex flex-col items-center w-full">
            <img src={image} alt="" className="w-full h-45 object-contain" />
            <h2 className="text-xs md:text-sm font-semibold text-blue-600">
            {title}
            </h2>
            <p className="md:text-sm text-xs  font-semibold text-blue-600">
                {subtitle ? subtitle : "No Subtitle"}
            </p>
            <p className="text-sm  md:text-base font-semibold text-blue-600">
              Price: <span className="md:text-sm text-xs font-semibold ">{price}</span>
            </p>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 justify-items-center place-items-center px-6 pb-8 ">
      {renderList}
    </div>
  );
}
