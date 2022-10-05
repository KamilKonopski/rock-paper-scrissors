import { useState } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);

	function addTodoHandler(todoText: string) {
		const newTodo = new Todo(todoText);

		setTodos((prevTodos) => {
			return prevTodos.concat(newTodo);
		});
	}

	function removeTodoHandler(todoId: string) {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId);
		});
	}

	return (
		<>
			<NewTodo onAddTodo={addTodoHandler} />
			<Todos todos={todos} onRemoveTodo={removeTodoHandler} />
		</>
	);
}

export default App;
