import { useState } from 'react';
function TodoApp() {

  const [nuevaTarea, setNuevaTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {

    if (nuevaTarea.trim() === '') {
      return;
    }

    const tarea = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false
    };

    setTareas([...tareas, tarea]);

    setNuevaTarea('');
  };

  const completarTarea = (id) => {

    const nuevasTareas = tareas.map((t) => {

      if (t.id === id) {
        return {
          ...t,
          completada: !t.completada
        };
      }

      return t;

    });

    setTareas(nuevasTareas);

  };

  const eliminarTarea = (id) => {

    const nuevasTareas =
      tareas.filter((t) => t.id !== id);

    setTareas(nuevasTareas);

  };


  const pendientes =
    tareas.filter(
      (t) => !t.completada
    ).length;


  let contenido;

  if (tareas.length === 0) {

    contenido = <p>No hay tareas</p>;

  } else {
    contenido = (
      <ul>
        {tareas.map((t) => {
          let clase = '';
          if (t.completada) {
            clase = 'completada';
          }
          return (
            <li key={t.id}>
              <span className={clase}>
                {t.texto}
              </span>
              <button
                onClick={() =>
                  completarTarea(t.id)
                }
              >
                ✔
              </button>

              <button
                onClick={() =>
                  eliminarTarea(t.id)
                }
              >
                X
              </button>
            </li>

          );

        })}

      </ul>

    );
  }


  return (

    <div className="todo">
      <h1>Lista de tareas</h1>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) =>
          setNuevaTarea(e.target.value)
        }
        placeholder="Escribí una tarea"
      />

      <button onClick={agregarTarea}>
        Agregar
      </button>
      <h3>
        Pendientes: {pendientes}
      </h3>
      {contenido}
    </div>

  );
}

export default TodoApp;