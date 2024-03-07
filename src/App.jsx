import { Route, Routes } from 'react-router-dom'
import Navigation from './components/navigation/Navigation.jsx'
import Landing from './components/landing/landing.jsx'

function App() {
  return (
    <>
      <Navigation>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<p>ABOUT</p>} />
          <Route path="/education" element={<p>Education</p>} />
          <Route path="/pricing" element={<p>Pricing</p>} />
        </Routes>
      </Navigation>
    </>
  )
}

export default App
