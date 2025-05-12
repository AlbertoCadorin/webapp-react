import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/movies" element={<h1>Elenco film</h1>} />
        <Route path="/movies/:id" element={<h1>Dettaglio film</h1>} />
        <Route path="/contact" element={<h1>Contatti</h1>} />
        <Route path="/about" element={<h1>Chi siamo</h1>} />
        <Route path="*" element={<h1>404</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
