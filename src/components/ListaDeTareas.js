import '../stylesheets/ListaDeTareas.css';
import TareaFormulario from './TareaFormulario';
import { useState } from 'react';
import Tarea from './Tarea';

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>  
            <Tarea
              key={tarea.id}
              id={tarea.id} 
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
    </>
  ); 
}

/*
<> </> FRAGMENTOS para no agregar contenedores adicionales

useState([]) = el estado inicial de TAREAS va a ser un ARRAY VACIO []

.map() = método q va a tomar cada una de esas tareas y va a hacer lo q especifiquemos con esa tarea, QUEREMOS CREAR UN COMPONENTE TAREA para CADA UNA DE ESAS TAREAS, Y TOMAMOS LOS DATOS Y CREAMOS UN COMPONENTE NUEVO DE REACT.

(!!) VAMOS A TENER UN ARRAY DE OBJETOS DE JS tareas.map((tarea) => ese último 'tarea' es un OBJETO

.trim(): METODO QUE QUITA LOS ESPACIOS DEL PRINCIPIO Y/O DEL FINAL

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
    Explicacion: 1) verificamos si la cadena esta vacia, luego quitamos espacios innecesarios, generamos un arreglo con las tareas anteriores y la nueva delante y por último actualizamos el ESTADO.

key={tarea.id}
id={tarea.id} 
muy importante esto: cdo mostramos lista, para q react sepa el orden y no lo cambie al actualizar es necesario KEY. es la forma de identificar el elemento en la lista y debe ser UNICO. 
tambien se pasa un prop "id=" para q se pueda acceder al id para llamar al id, por eso se pasa DOBLE. 
*/
export default ListaDeTareas;