import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MoviesPage from './pages/Movies'
import MovieDetailPage from './pages/MovieDetail'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
        <Route path="/contact" element={<h1>Contatti</h1>} />
        <Route path="/about" element={<h1>Chi siamo</h1>} />
        <Route path="*" element={<h1>404</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
