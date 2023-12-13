import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { TabunganPage } from './Pages/TabunganPage';
import { Suspense } from 'react';
import Loader from './Components/Loader';
import('./index.css');

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/tabungan"
          element={
            <Suspense fallback={<Loader />}>
              <TabunganPage />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
