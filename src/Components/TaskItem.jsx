import PropTypes from "prop-types";
import './TaskItem.css';

export function TaskItem({ task }) {
  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.details}</td>
      <td>{task.dateTime}</td>
    </tr>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    details: PropTypes.string,
    dateTime: PropTypes.string.isRequired
  }).isRequired
};
