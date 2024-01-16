import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages
import Home from './pages/Home';
import Authors from './pages/authors/Authors';
import Books from './pages/books/Books';
import Bookshelves from './pages/bookshelves/Bookshelves';
import Rents from './pages/rents/Rents';
import Customers from './pages/customers/Customers';

// components
import Navbar from './components/Navbar';


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/authors" element={<Authors />} />
        {/* <Route path="/authors/:id" element={<View />} /> */}

        <Route path="/books" element={<Books />} />
        {/* <Route path="/books/:id" element={<View />} /> */}

        <Route path="/bookshelves" element={<Bookshelves />} />
        {/* <Route path="/bookshelves/:id" element={<View />} /> */}

        <Route path="/customers" element={<Customers />} />
        {/* <Route path="/customers/:id" element={<View />} /> */}

        <Route path="/rents" element={<Rents />} />
        {/* <Route path="/rents/:id" element={<View />} /> */}

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App