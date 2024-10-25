import { useState } from "react";
import PropTypes from "prop-types";
import "./TaskForm.css"; // Asegúrate de importar el CSS

export function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos requeridos
    if (!title) {
      setError("El título es obligatorio.");
      return;
    }

    if (!dateTime) {
      setError("La fecha y la hora son obligatorias.");
      return;
    }

    // Lógica para agregar la tarea
    onAddTask({ title, details, dateTime });

    // Limpiar los campos después de agregar la tarea
    setTitle("");
    setDetails("");
    setDateTime("");
    setError(""); // Limpiar el mensaje de error
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Agregar Nueva Tarea</h2>
      {error && <p className="error-message">{error}</p>}
      <div>
        <label htmlFor="task-title">Título</label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="task-details">Detalles</label>
        <textarea
          id="task-details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows="4"
        />
      </div>
      <div>
        <label htmlFor="task-datetime">Fecha y Hora</label>
        <input
          id="task-date"
          type="date"
          value={dateTime.split("T")[0]} // Obtener la fecha de dateTime
          onChange={(e) =>
            setDateTime(
              (prev) => `${e.target.value}T${prev.split("T")[1] || "00:00"}`
            )
          }
          aria-label="Selecciona la fecha de la tarea"
        />
        <input
          id="task-time"
          type="time"
          value={dateTime.split("T")[1] || ""} // Obtener la hora de dateTime
          onChange={(e) =>
            setDateTime(
              (prev) =>
                `${prev.split("T")[0] || "2023-01-01"}T${e.target.value}`
            )
          }
          aria-label="Selecciona la hora de la tarea"
        />
      </div>
      <button type="submit">Agregar</button>
    </form>
  );
}

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};
