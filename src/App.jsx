import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext'; // <--- IMPORTANT
import { Navbar } from './components/sections/Navbar';
import { Home } from './pages/Home';
import { Nocturnes2026 } from './pages/Nocturnes2026';
import { Event2027 } from './pages/Event2027';
import { Equipe } from './pages/Equipe';

function App() {
  return (
    <LanguageProvider> {/* <--- DOIT ÊTRE ICI */}
      <Router>
        <div className="min-h-screen bg-bal-noir text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nocturnes-2026" element={<Nocturnes2026 />} />
              <Route path="/evenement-2027" element={<Event2027 />} />
              <Route path="/equipe" element={<Equipe />} />
            </Routes>
          </main>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;