//container of main container for todo
let container = document.createElement('main')
container.className = 'container'
document.body.prepend(container)
console.log(container);

//create of project title

let title = document.createElement('h1')
title.className = 'title'
title.innerHTML = "let's do it...";
container.append(title)

//creation block for todo
let todoBox = document.createElement('section')
todoBox.className = 'todoBox'
container.append(todoBox)

//create box for input
let inputBox = document.createElement('div')
inputBox.className = 'inputBox'
todoBox.append(inputBox)


//create box for todoList
let todoList = document.createElement('ul')
todoList.className = 'todoList'
todoBox.append(todoList)


// Создаем элемент input для ввода заголовка задачи
let inputTitle = document.createElement('input');
// Создаем элемент input для выбора даты задачи
let inputDate = document.createElement('input');
// Устанавливаем тип input на 'date', чтобы отображался календарь для выбора даты
inputDate.type = 'date';
let addBtn = document.createElement('button');
// Присваивает кнопке класс 'addBtn'
addBtn.className = 'addBtn';
// Устанавливаем текст кнопки на 'AddTodo'
addBtn.innerHTML = ' AddTodo';


//призывает все что сверху
inputBox.append(inputTitle)
inputBox.append(inputDate)
inputBox.append(addBtn)