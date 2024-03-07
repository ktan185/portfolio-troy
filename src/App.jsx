import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<p>LANDING</p>} />
        <Route path="/about" element={<p>ABOUT</p>} />
      </Routes>
    </>
  )
}

export default App
