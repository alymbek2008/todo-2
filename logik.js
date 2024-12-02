let data = [];

function createTodo(el, index) {
    let todoItem = document.createElement('li');
    let todoTitle = document.createElement('label');
    todoTitle.innerHTML = el.title;
    
    let todoDate = document.createElement('label');
    todoDate.innerHTML = el.date;
    
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = el.checked; // Чекбокс изначально отражает состояние задачи

    // При изменении состояния чекбокса
    checkBox.onchange = function() {
        // Обновляем состояние задачи в массиве данных
        data[index].checked = checkBox.checked;
        // Добавляем или убираем класс зачёркивания
        if (checkBox.checked) {
            todoTitle.classList.add('completed');  // Добавляем класс зачёркивания
            todoDate.classList.add('completed');
        } else {
            todoTitle.classList.remove('completed');  // Убираем класс зачёркивания
            todoDate.classList.remove('completed');
        }
    };

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.innerHTML = 'delete';

    // Привязка индекса к кнопке удаления
    deleteBtn.onclick = function() {
        deleteTodo(index);
    };

    // Добавляем элементы в DOM
    todoItem.append(todoTitle);
    todoItem.append(todoDate);
    todoItem.append(checkBox);
    todoItem.append(deleteBtn);

    todoList.append(todoItem);

    // Если задача уже выполнена, добавляем линию через текст
    if (el.checked) {
        todoTitle.classList.add('completed');
        todoDate.classList.add('completed')
    }
}

function renderTodos() {
    todoList.innerHTML = '';
    data.map((el, index) => {
        createTodo(el, index); // Передаем index в функцию createTodo
    });
}

function addTodo() {
    if (inputTitle.value.trim() !== '') {
        data.push({
            id: Math.random().toString(),
            title: inputTitle.value,
            date: inputDate.value,
            checked: false
        });
        renderTodos();
        inputTitle.value = '';
        inputDate.value = '';
    } else {
        alert('No todos, please type some');
    }
}

function deleteTodo(index) {
    data.splice(index, 1);  // Удаление по индексу 
    renderTodos();          // Перерисовка списка
}

// Связываем кнопку добавления задачи с функцией
addBtn.onclick = addTodo;
