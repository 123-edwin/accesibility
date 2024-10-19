import PropTypes from "prop-types";
import './TaskList.css';
import { TaskItem } from "./TaskItem";

export function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No hay tareas disponibles.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Detalles</th>
              <th>Fecha y Hora</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      details: PropTypes.string,
      dateTime: PropTypes.string.isRequired
    })
  ).isRequired
};
