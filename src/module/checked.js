'use strict'
import { todoList } from "./variables.js";

function checked(item) {
	// Нахожу родителя и проверяю значение, меняя отметку выполнения
	let parent = item.closest('.todo__item');

	if (item.innerHTML == 'radio_button_unchecked') {
		item.innerHTML = 'radio_button_checked';
		todoList[parent.getAttribute('id')].checked = 'checked';
	} else {
		item.innerHTML = 'radio_button_unchecked';
		todoList[parent.getAttribute('id')].checked = 'unchecked';
	}
	
	localStorage.setItem('todo', JSON.stringify(todoList));
}

export default checked;