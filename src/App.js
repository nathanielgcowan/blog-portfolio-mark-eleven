import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Book } from './pages/Book'
import { BookList } from './pages/BookList'
import { NewBook } from './pages/NewBook'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/books'>Books</Link></li>
          <li><Link to='/books/new'>New Book</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<Book />} />
        <Route path='/books/new' element={<NewBook />} />
      </Routes>
    </>
  );
}

export default App;
