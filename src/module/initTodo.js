'use strict'
import showTodoList from '../module/showTodo.js';
import {todoList} from '../module/variables.js'

function initTodo() {
	if (localStorage.getItem('todo')) {
		JSON.parse(localStorage.getItem('todo')).forEach(item => {
			todoList.push(item);
		});
		showTodoList();
	}
}

export default initTodo;