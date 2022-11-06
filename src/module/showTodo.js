'use strict'
import {todo} from '../module/variables.js';
import {todoList} from '../module/variables.js';

function showTodoList() {
	let itemList = ``;
	todoList.forEach((item, index) => {
		itemList += `<li id="${index}" class="todo__item"><span class="todo__settings"><span id="checked" class="material-symbols-outlined">radio_button_${item.checked}</span></span><p class="todo__text">${item.value}</p><span class="todo__settings"><span id="important" class="material-symbols-outlined">${item.important}</span><span id="close" class="material-symbols-outlined">close</span></span></li>`
	});
	todo.innerHTML = itemList;
}

export default showTodoList;