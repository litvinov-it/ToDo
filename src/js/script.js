'use strict'
import initTodo from '../module/initTodo.js';
import {todoList, todo} from '../module/variables.js';
import showTodoList from '../module/showTodo.js';
import close from "../module/close.js";
import checked from '../module/checked.js';
import important from '../module/important.js';

let addTodoInp = document.querySelector('.add-inp'), addTodoBtn = document.querySelector('.add-btn');
initTodo();

addTodoBtn.addEventListener('click', () => {
	// В checked и important используются слова для изменения иконки через GoogleFonts, поэтому они могут показаться странными
	// important: grade - не отмечена как важная, star_half - отмечена как важная
	let newTodoItem = {
		value: addTodoInp.value,
		checked: 'unchecked',
		important: 'grade'
	};

	todoList.push(newTodoItem);
	showTodoList();
	localStorage.setItem('todo', JSON.stringify(todoList));
})

todo.addEventListener('click', function(e) {
	let targetId = e.target.getAttribute('id');

	// Проверяю нажали ли на кнопку для удаления/выполнения/отметки в важные
	if (targetId == 'close') {
		close(e.target);
	}
	if (targetId == 'checked') {
		checked(e.target);
	}
	if (targetId == 'important') {
		important(e.target);
	}
})