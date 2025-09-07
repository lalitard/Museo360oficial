import { Routes, Route, useParams } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import './App.css';

// --- Componente genérico para una SALA ---
function Sala() {
  const { id } = useParams();

  return (
    <main style={{ marginTop: '80px', padding: '2rem' }}>
      <h2>Estás en la Sala {id}</h2>
      <p>Aquí se mostrará la vista panorámica de la sala {id}.</p>
      {/* En el futuro, aquí irá el componente del visor 360 */}
    </main>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sala/:id" element={<Sala />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
