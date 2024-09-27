var input = document.getElementById('new-task');
var ul = document.getElementById('todo-list');
var addButton = document.getElementById('add-task-button');

addButton.onclick = function() {
    var taskText = input.value;
    if (taskText !== '') {
        var li = document.createElement('li');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        var span = document.createElement('span');
        span.textContent = taskText;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        ul.appendChild(li);

        input.value = '';

        checkbox.onchange = function() {
            if (checkbox.checked) {
                li.className = 'completed';
            } else {
                li.className = '';
            }
        };

        deleteButton.onclick = function() {
            ul.removeChild(li);
        };
    }
};
