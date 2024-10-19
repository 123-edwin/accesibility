import { useState } from "react";
import PropTypes from "prop-types";
import './TaskForm.css'; // Asegúrate de importar el CSS

export function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setError("El título es obligatorio."); // Mensaje de error
      return;
    }
    
    // Lógica para agregar la tarea
    onAddTask({ title, details, dateTime });
    setTitle(""); // Limpiar campos
    setDetails("");
    setDateTime("");
    setError(""); // Limpiar error
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Agregar Nueva Tarea</h2>
      {error && <p className="error-message">{error}</p>} {/* Mensaje de error */}
      <div>
        <label htmlFor="task-title">Título</label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required // Asegura que este campo sea obligatorio
        />
      </div>
      <div>
        <label htmlFor="task-details">Detalles</label>
        <textarea
          id="task-details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows="4" // Proporciona un tamaño adecuado para el área de texto
        />
      </div>
      <div>
        <label htmlFor="task-datetime">Fecha/Hora</label>
        <input
          id="task-datetime"
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
      </div>
      <button type="submit">Agregar</button>
    </form>
  );
}

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired
};
