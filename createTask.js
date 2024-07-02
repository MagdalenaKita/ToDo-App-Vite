import { saveGroup, loadGroups } from "./saveAndLoadGroups";
import { handleDragStart, handleDragOver, handleDrop } from "./dragAndDrop";

const createTask = (task, group) => {
    const todoTask = document.createElement('li');
    todoTask.className = task.completed ? 'styleComplete' : '';
    todoTask.setAttribute('draggable', true);
    todoTask.classList.add('drag-item');

    const todoTaskDiv = document.createElement('div');

    const todoTaskSpan = document.createElement('span');
    todoTaskSpan.textContent = task.text;

    const todoTaskCheckbox = document.createElement('input');
    todoTaskCheckbox.type = 'checkbox';
    todoTaskCheckbox.checked = task.completed;

    const deleteTaskButton = document.createElement('button');
    deleteTaskButton.textContent = 'Usuń';
    deleteTaskButton.className = 'deleteTaskButton';

    const handleCompletedTask = () => {
        task.completed = !task.completed;
        saveGroup();
        loadGroups();
    }

    const handleDeleteTask = () => {          
        const indexTaskToRemove  = group.tasks.findIndex(({ taskId }) => taskId === task.taskId);  //destrukturyzacja 
        group.tasks.splice(indexTaskToRemove, 1);
        saveGroup();
        loadGroups();
    } 
    
    todoTaskDiv.appendChild(todoTaskCheckbox);
    todoTaskDiv.appendChild(todoTaskSpan);
    todoTask.appendChild(todoTaskDiv);
    todoTask.appendChild(deleteTaskButton);

    todoTaskCheckbox.addEventListener('change', handleCompletedTask)
    deleteTaskButton.addEventListener('click', handleDeleteTask);

    todoTask.addEventListener('dragstart', handleDragStart);
    todoTask.addEventListener('dragover', handleDragOver);
    todoTask.addEventListener('drop', handleDrop);

    return todoTask;
}

export { createTask }