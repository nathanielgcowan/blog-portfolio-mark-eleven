import { Route, Routes } from 'react-router-dom'
import { BookLayout } from './BookLayout'
import { Book } from './pages/Book'
import { BookList } from './pages/BookList'
import { NewBook } from './pages/NewBook'

export function BookRoutes() {
    return (
      <>
        <Routes element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<NewBook />} />
        </Routes>
      </>
    )
}