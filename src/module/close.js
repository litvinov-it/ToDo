'use strict'
import showTodoList from "./showTodo.js";
import { todoList } from "./variables.js";

function close(item) {
	// Нахожу родителя и удаляю по его ID
	let parent = item.closest('.todo__item');

	todoList.splice(parent.getAttribute('id'), 1);
	showTodoList();
	localStorage.setItem('todo', JSON.stringify(todoList));
}

export default close;