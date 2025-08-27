import { useDispatch, useSelector } from "react-redux"
import { useEffect,useState } from "react"
import { setBooks } from "./redux/actions/bookActions"
import BookComponent from "./BooksComponents"
import axios from "axios"
export default function BookListing() {
    const [error,setError] = useState()
    const books = useSelector((state) => state.allBooks.books)  
    const dispatch = useDispatch();
    const fetchBooks = async () => {
        const response = await axios.get('https://api.itbook.store/1.0/new').catch((err) => {
            setError(err)
        });
    dispatch(setBooks(response.data.books));
    }
    useEffect(() => {
     fetchBooks()
},[])
    if (error) {
       return <p> Something went wrong</p>
    } 
    return (
        <>
            <BookComponent />  
        </>

   ) 
}