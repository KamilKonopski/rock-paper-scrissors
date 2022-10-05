import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

const Todos: React.FC<{ todos: Todo[] }> = (props) => {
	return (
		<ul className={classes.todos}>
			{props.todos.map((todo) => (
				<TodoItem key={todo.id} text={todo.text} />
			))}
		</ul>
	);
};
export default Todos;
