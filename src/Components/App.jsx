import { useState, useEffect, useRef } from "react";
import { ListOptions } from "./ListOptions";
import { AddTaskButton } from "./AddTaskButton";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

export function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const dropShow = useRef(null);

  const closeDropShow = (event) => {
    // Cierra el dropdown si el clic es fuera del dropdown y del botón
    if (dropShow.current && !dropShow.current.contains(event.target)) {
      setShowForm(false);
    }
  };

  useEffect(() => {
    // Agrega el evento de clic al documento
    document.addEventListener('click', closeDropShow);

    // Limpia el evento al desmontar el componente
    return () => {
      document.removeEventListener('click', closeDropShow);
    };
  }, []);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
    setShowForm(false); // Ocultar el formulario después de agregar la tarea
  };

  const handleToggleForm = (event) => {
    event.stopPropagation(); // Evita el cierre inmediato al hacer clic en el botón
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <img src="https://cdn-icons-png.flaticon.com/512/4345/4345800.png" className="TaskIcon" alt=""></img>
          <h1 className="title">Agenda</h1>
          <ListOptions />
        </header>
        <AddTaskButton onClick={handleToggleForm} />

        
        {showForm && (
          <div ref={dropShow}>
            <TaskForm onAddTask={handleAddTask} />
          </div>
        )}
        <TaskList tasks={tasks} />
      </div>
    </>
  );
}
