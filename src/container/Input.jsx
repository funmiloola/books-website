import {useEffect, useRef,useState} from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { searchBooks } from "./redux/actions/bookActions"
export default function Input() {
    const Input = useRef();
    const [error, setError] = useState()
    const [loading, setIsLoading] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
  const handleSubmit = async () => {
   if (!Input.current.value) return; 
  setIsLoading(true);
  setError(null);

  try {
    const response = await axios.get(
      `https://api.itbook.store/1.0/search/${Input.current.value.replaceAll(' ','-')}`
    );
   if (response.data.total === "0") {
      setError("Book is not available");
            setTimeout(() => {
           setError(null)
       },2000)
      } 
   else {
       dispatch(searchBooks(response.data.books))
        navigate("/results");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
      
    } 
    finally {
      setIsLoading(false);
  }
      Input.current.value = '';
    }
    useEffect(() => {
    handleSubmit()
    }, [])
    return (
        <>
        <div className="flex gap-2 items-center justify-center pt-8 pb-12">
            <input ref={Input} type="text" className=" outline-none border border-gray-400 w-1/3 rounded-lg text-gray-400" placeholder=" Search For Available Books" />
            <button onClick={handleSubmit} className="border border-blue-400 bg-blue-400 rounded-lg px-6 py-0.5 text-white ">Search</button>
        </div>
        <div className="pb-4 pt-[-4px]">
                {loading && <p className="text-blue-600 font-semibold text-base md:text-lg">Searching...</p>}
            {error && <p className="text-blue-600 text-base font-semibold md:text-lg">{error}</p>}
            </div>
        </>
        
    )
}