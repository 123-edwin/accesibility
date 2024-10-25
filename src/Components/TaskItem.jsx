import PropTypes from "prop-types";
import "./TaskItem.css";

export function TaskItem({ task }) {
  // Función para formatear la fecha y hora
  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleString("es-MX", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // Formato 12 horas con AM/PM
    });
  };

  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.details}</td>
      <td>{formatDateTime(task.dateTime)}</td> {/* Aplicar el formateo aquí */}
    </tr>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    details: PropTypes.string,
    dateTime: PropTypes.string.isRequired,
  }).isRequired,
};
