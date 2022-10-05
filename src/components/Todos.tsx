import { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";

const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext);

	return (
		<ul className={classes.todos}>
			{todosCtx.todos.map((todo) => (
				<TodoItem
					key={todo.id}
					text={todo.text}
					onRemoveTodo={todosCtx.removeTodo.bind(null, todo.id)}
				/>
			))}
		</ul>
	);
};
export default Todos;
