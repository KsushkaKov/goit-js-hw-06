// TODO list (change, submit, preventDefault, form.elements)
//
// Існує форма з одним інпутом, куди вводиться текст. І є чекбокс.
//   1) Поки чекбокс не натиснутий, кнопка на формі неактивна.
//   2) Натисканням Enter в інпуті або натисканням на кнопку Add, в список нижче, додається todo-нотатка.
//   3) Очистити інпут
//   4) Прибрати перезавантаження, звертатися через форму (elements) та ім'я інпуту
//   5) При натисканні на todo-замітку у списку, вона стає виконаною, тобто. текст закреслюється (клас complete)
//   6) Чекбокс при додаванні нотатки знову має стати не вибраним, а кнопка знову недоступною

const refs = {
    checkbox: document.querySelector('input[name="confirm"]'),
    addBtn: document.querySelector('button[type="submit"]'),
    input: document.querySelector('input[name="myTodo"]'),
    form: document.querySelector('form'),
    list: document.querySelector('ol.todo-list'),
};


function handleCheckboxInput(event){
    refs.addBtn.disabled = !refs.checkbox.checked;
}

function handleFormSubmit(event){
    event.preventDefault();

    const todoInput = refs.form.elements.input;

    const newItemElement = document.createElement('li');
    newItemElement.textContent = todoInput.value;

    // todoInput.value = '';
    // refs.addBtn.disabled = true;
    // refs.checkbox.checked = false;

    refs.form.reset();
    handleCheckboxInput();

    refs.list.append(newItemElement);

    newItemElement.addEventListener('click', () => {
        // newItemElement.classList.toggle('complete');
        
        // if (newItemElement.style.textDecoration !== 'line-through') {
        //     newItemElement.style.textDecoration = 'line-through';
        // } else {
        //     newItemElement.style.textDecoration = 'none';
        // }
        // console.log(newItemElement);

        newItemElement.style.textDecoration = newItemElement.style.textDecoration !== 'line-through' ? 'line-through' : 'none';
    });
    
}

refs.checkbox.addEventListener('change', handleCheckboxInput);

refs.form.addEventListener('submit', handleFormSubmit);

