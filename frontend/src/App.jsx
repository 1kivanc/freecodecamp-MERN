import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook /> } />
      <Route path='/books/details/:id' element={<showBook />} />
      <Route path='/books/edit/:id' element={<editBook />} />
      <Route path='books/delete/:id' element={<deleteBook />} />

    </Routes>
  )
}

export default App
  