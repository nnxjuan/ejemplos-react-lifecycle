import React, { useState, useEffect } from 'react';

const CicloDeVida = () => {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState('');

  // 1. Montaje (equivalente a componentDidMount)
  useEffect(() => {
    console.log('🟢 Componente montado - Solo se ejecuta una vez');
    setMensaje('¡Componente listo!');

    // 3. Desmontaje (equivalente a componentWillUnmount)
    return () => {
      console.log('🔴 Componente desmontado - Limpieza');
    };
  }, []); // Array vacío = solo en montaje

  // 2. Actualización (equivalente a componentDidUpdate)
  useEffect(() => {
    if (contador > 0) { // Evitamos el log en el montaje inicial
      console.log('🔄 Componente actualizado - Se ejecuta cuando contador cambia');
    }
  }, [contador]); // Se ejecuta cuando contador cambia

  return (
    <div className="ejemplo-container">
      <h2>Ejemplo de Ciclo de Vida</h2>
      <p>{mensaje}</p>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(prev => prev + 1)}>
        Incrementar Contador
      </button>
      <div className="explicacion">
        <h3>Explicación:</h3>
        <ul>
          <li>🟢 Montaje: useEffect con array vacío []</li>
          <li>🔄 Actualización: useEffect con dependencias [contador]</li>
          <li>🔴 Desmontaje: función return en useEffect</li>
        </ul>
        <p>Abre la consola del navegador para ver los logs</p>
      </div>
    </div>
  );
};

export default CicloDeVida;
