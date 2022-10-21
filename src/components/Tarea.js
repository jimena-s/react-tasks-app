import '../stylesheets/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div
        className='tarea-texto'
        onClick={() => completarTarea(id)}
      >
        {texto}
      </div>
      <div
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)} 
      >
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  );
}

export default Tarea;

/*
EL COMPONENTE TAREA TIENE 5 PROPS:
1) ID = identificador unico d c/tarea
2) TEXTO = contenido ingresado por el usuario
3) COMPLETADA = la clase q se le asigna, es un valor booleano(true, false)
4) completarTarea = funcion completar
5) eliminarTarea = funcion eliminar
*/