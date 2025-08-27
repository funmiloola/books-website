import { BrowserRouter,Route,Routes,Links } from 'react-router-dom'
import BookListing from './container/BooksList.jsx'
import BookDetails from './container/BooksDetails.jsx'
import Input from './container/Input.jsx'
import FilteredBook from './container/FilteredBook.jsx'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Input/>
      </div>
      <Routes>
        <Route path='/' element={<BookListing/> } />
        <Route path="/books/:booksKey" element={<BookDetails />} />
        <Route path="/results" element={<FilteredBook />} />
        <Route>404 Not Found!</Route>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
