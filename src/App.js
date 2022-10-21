import './App.css';
import logo from './imgs/jim-logo.png';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className='app-tareas'>
      <div className='logo-contenedor'>
        <img 
          src={logo} 
          className='logo-img'
        />      
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;

/* separar el logo otra vez en un componente */

/*
RETOS: 
1) almacenar tareas para que cuando se vuelva a abrir a la app sigan estando alli.
2) desarrollar app con otro enfoque:
incluir formulario y lista de tareas (components) DIRECTAMENTE en la app principal, sin el componente intermedio (lista de tareas).
s
*/