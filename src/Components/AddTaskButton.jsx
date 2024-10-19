// AddTaskButton.jsx
import './AddTaskButton.css';
import PropTypes from "prop-types";

export function AddTaskButton({ onClick }) {
  return (
    <button className="add-task-button" onClick={onClick}>
      Agregar Tarea
    </button>
  );
}

AddTaskButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
