const addButton = document.getElementById('add-todo');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function() {
    const todoText = todoInput.value;
    if (todoText) {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item p-2 border-b border-gray-300';
        todoItem.textContent = todoText;
        todoList.appendChild(todoItem);
        todoInput.value = ''; // 입력 필드 초기화
    }
});
