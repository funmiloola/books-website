import {useEffect, useRef,useState} from "react"
import axios from "axios"
import { useDispatch} from "react-redux"
import { searchBooks } from "./redux/actions/bookActions"
export default function Input() {
    const Input = useRef()
    const [error, setError] = useState()
    const [loading,setIsLoading] = useState(false)
    const dispatch = useDispatch();
  const handleSubmit = async () => {
   if (!Input.current.value) return; 
  setIsLoading(true);
  setError(null);

  try {
    const response = await axios.get(
      `https://api.itbook.store/1.0/search/${Input.current.value}`
    );
   if (response.data.total === "0") {
      setError("Book is not available");
            setTimeout(() => {
           setError(null)
       },2000)
      } else {
       const exactBook = response.data.books.find(
           (book) =>  book.title.toLowerCase() === Input.current.value.toLowerCase() 
       ) 
       if (exactBook) {
          dispatch(searchBooks([exactBook]));
      } 
      else {
           setError("Book is not available");
            
      }
      }
      
    } catch (err) {
      setError(err.message || "Something went wrong");
      
    } 
    finally {
    setIsLoading(false);
  }

    }
    useEffect(() => {
    handleSubmit()
    }, [])
    return (
        <>
        <div className="flex gap-2 items-center justify-center pt-8 pb-12">
            <input ref={Input} type="text" className=" outline-none border border-gray-400 w-1/3 rounded-lg text-gray-400" />
            <button onClick={handleSubmit} className="border border-blue-400 bg-blue-400 rounded-lg px-6 py-1 text-white ">Search</button>
        </div>
        <div className="pb-4 pt-[-4px]">
                {loading && <p className="text-blue-600 font-semibold text-base md:text-lg">Searching...</p>}
            {error && <p className="text-blue-600 text-base font-semibold md:text-lg">{error}</p>}
            </div>
            </>
    )
}