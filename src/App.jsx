import { useState } from "react";
import CicloDeVida from "./components/CicloDeVida";
import AccesoDatos from "./components/AccesoDatos";
import "./App.css";

function App() {
  const [mostrarCicloDeVida, setMostrarCicloDeVida] = useState(false);

  return (
    <div className="app">
      <h1>Ejemplos React: Ciclo de Vida y Axios</h1>

      <div className="controles">
        <button onClick={() => setMostrarCicloDeVida(!mostrarCicloDeVida)}>
          {mostrarCicloDeVida ? "Desmontar" : "Montar"} Componente
        </button>
      </div>

      <div className="ejemplos">
        {mostrarCicloDeVida && <CicloDeVida />}
        <AccesoDatos />
      </div>
    </div>
  );
}

export default App;
