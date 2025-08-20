import './App.css'

function App() {
  return (
    <div className="home-container">
      <header>
        <h1>Museo 360</h1>
        <p>Bienvenido al recorrido virtual</p>
      </header>

      <main>
        <img src="/img/panoramica2.JPG" alt="Vista principal del museo" />
        <p>Selecciona una sala para comenzar el recorrido.</p>
      </main>
      
      <nav>
        {/* Próximamente aquí irán los enlaces a las salas */}
        <a href="#">Sala 1</a>
        <a href="#">Sala 2</a>
        <a href="#">Sala 3</a>
      </nav>

      <footer>
        <p>&copy; 2025 - Proyecto de Prácticas Comunitarias</p>
      </footer>
    </div>
  )
}

export default App
