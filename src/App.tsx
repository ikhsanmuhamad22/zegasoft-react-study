import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { TabunganPage } from './Pages/TabunganPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/tabungan' element={<TabunganPage />} />
      </Routes>
    </Router>
  )
}

export default App
