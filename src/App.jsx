import { Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';

// --- Componente para la página de INICIO ---
function Home() {
  return (
    <main>
      <img src="/img/panoramica2.JPG" alt="Vista principal del museo" />
      <p>Selecciona una sala para comenzar el recorrido.</p>
    </main>
  );
}

// --- Componente genérico para una SALA ---
// Usará el ID de la URL para mostrar contenido diferente en el futuro.
function Sala() {
  const { id } = useParams(); // Hook para leer el parámetro :id de la URL

  return (
    <main>
      <h2>Estás en la Sala {id}</h2>
      <p>Aquí se mostrará la vista panorámica de la sala {id}.</p>
      {/* En el futuro, aquí irá el componente del visor 360 */}
    </main>
  );
}

function App() {
  return (
    <div className="home-container">
      <header>
        <h1>Museo 360</h1>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/sala/1">Sala 1</Link>
          <Link to="/sala/2">Sala 2</Link>
          <Link to="/sala/3">Sala 3</Link>
        </nav>
      </header>

      {/* El componente <Routes> renderizará el componente que coincida con la URL actual */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sala/:id" element={<Sala />} />
      </Routes>

      <footer>
        <p>&copy; 2025 - Proyecto de Prácticas Comunitarias</p>
      </footer>
    </div>
  );
}

export default App;
