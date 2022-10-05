import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
	todos: Todo[];
	addTodo: (todoText: string) => void;
	removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
	todos: [],
	addTodo: function () {},
	removeTodo: function (id: string) {},
});

const TodosContextProvider: React.FC = (props) => {
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

	const contextValue: TodosContextObj = {
		todos: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
