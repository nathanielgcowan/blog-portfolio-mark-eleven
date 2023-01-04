import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import NotFound from './pages/NotFound';
import { BookRoutes } from './BookRoutes';

function App() {
  return (
    <>
      <Routes location="/books">
        <Route path='/books' element={<h1>Extra Content</h1>} />
      </Routes>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/books'>Books</Link></li>
          <li><Link to='/books/new'>New Book</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookRoutes />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
