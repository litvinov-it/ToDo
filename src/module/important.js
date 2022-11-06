'use strict'
import { todoList } from "./variables.js";

function important(item) {
	// Нахожу родителя и проверяю значение, меняя отметку важности
	// important: grade - не отмечена как важная, star_half - отмечена как важная
	let parent = item.closest('.todo__item');

	if (item.innerHTML == 'grade') {
		item.innerHTML = 'star_half';
		todoList[parent.getAttribute('id')].important = 'star_half';
	} else {
		item.innerHTML = 'grade';
		todoList[parent.getAttribute('id')].important = 'grade';
	}
	
	localStorage.setItem('todo', JSON.stringify(todoList));
}

export default important;