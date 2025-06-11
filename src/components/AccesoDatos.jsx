import { useState, useEffect } from 'react';
import axios from 'axios';

const AccesoDatos = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const obtenerPosts = async () => {
    try {
      setLoading(true);
      // Usamos JSONPlaceholder como API de ejemplo
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3');
      setPosts(response.data);
      setError(null);
    } catch (err) {
      setError('Error al cargar los datos: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Efecto para cargar datos al montar el componente
  useEffect(() => {
    obtenerPosts();
  }, []);

  return (
    <div className="ejemplo-container">
      <h2>Ejemplo de Acceso a Datos con Axios</h2>
      
      {/* Manejo de estados de carga */}
      {loading && <p>Cargando datos...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {/* Lista de posts */}
      {!loading && !error && (
        <div>
          <button onClick={obtenerPosts}>Recargar Datos</button>
          <div className="posts-list">
            {posts.map(post => (
              <div key={post.id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="explicacion">
        <h3>Explicación:</h3>
        <ul>
          <li>🔄 useState: Manejo de estado para posts, loading y error</li>
          <li>🌐 axios: Realizar peticiones HTTP</li>
          <li>⚡ useEffect: Cargar datos al montar el componente</li>
          <li>🎯 async/await: Manejo asíncrono de datos</li>
        </ul>
      </div>
    </div>
  );
};

export default AccesoDatos;
