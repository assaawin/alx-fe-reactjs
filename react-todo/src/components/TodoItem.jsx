export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      style={{
        padding: "10px",
        marginBottom: "10px",
        background: "#f9f9f9",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textDecoration: todo.completed ? "line-through" : "none",
        opacity: todo.completed ? 0.6 : 1,
      }}
    >
      <label style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          style={{ marginRight: "10px" }}
        />
        {todo.text}
      </label>
      <button onClick={() => onDelete(todo.id)} style={{ color: "red" }}>
        Delete
      </button>
    </li>
  );
}
