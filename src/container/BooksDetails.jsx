
import axios from "axios"
import { useEffect,useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectedBooks,removeSelectedBooks } from "./redux/actions/bookActions"
export default function BookDetails() {
    const books = useSelector((state) => state.books)
    const [error, setError] = useState()
    const dispatch = useDispatch()
    console.log(books)
    const { booksKey } = useParams()
    const fetchBooksDetails = async () => {
    const response = await axios.get(`https://api.itbook.store/1.0/books/${booksKey}`).catch((err) => {
    setError(err);
  })
    dispatch(selectedBooks(response.data));
  } 
       
    
    useEffect(() => {
      if (booksKey && booksKey !== '') fetchBooksDetails()
      return () => {
        dispatch(removeSelectedBooks())
    }
        },[booksKey])
        if (error) {
        <p>Something went wrong </p>
    }    

    return (
        <>
            <h1 className="text-center font-semibold text-xl lg:text-4xl text-blue-600">Book Details</h1>
            <div>
                {Object.keys(books).length === 0 ? (
                    <p className="text-center text-lg lg:text-2xl text-blue-600 pt-2">Loading...</p>
                ) : (
              <div className="flex flex-col items-center justify-center 
                lg:flex-row lg:items-center lg:justify-center
                border border-gray-300 mx-8 lg:mx-48 mt-6 mb-6 lg:mb-0
                lg:px-12 px-8 pb-6 lg:py-6 rounded-lg ">   
                <div className="w-[100%] lg:w-[25%]" >
                  <img src={books.image} alt="" className="w-50 md:w-100 lg:w-150"/>
                </div>
                <div className="w-[100%] lg:w-[75%] ">
                <h2 className="text-blue-600 font-bold text-base">Title:<span className="text-sm font-semibold">{ books.title}</span></h2>
                <p  className="text-blue-600 font-bold text-base">Author:<span className="text-sm font-semibold ">{books.authors}</span></p>  
              <p  className="text-blue-600 font-bold text-base">Pages:<span className="text-sm font-semibold">{books.pages}</span></p>
          <p  className="text-blue-600 font-bold text-base">Year of Publication:<span className="text-sm font-semibold">{books.year}</span></p>
          <p  className="text-blue-600 font-bold text-base">Book Description:<span className="text-sm font-semibold ">{books.desc}</span></p>
                  <p  className="text-blue-600 font-bold text-base">Price:<span className="text-sm font-semibold">{books.price}</span></p>
                  </div>
              </div>
          )}
            </div>

</>
    )}