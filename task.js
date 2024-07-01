import { saveGroup, loadGroups, groups, selectGroups } from "./group";
import { createTask } from "./createTask";

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const checkboxCheckAllTasks = document.getElementById('checkAllTasks');

const getNewTask = (event) => {
    event.preventDefault();
    const newTask = todoInput.value.trim();
    const uniqId = 'id' + (new Date()).getTime();
    
    if(newTask === '') {
        alert('Wpisz zadanie');
        return; // zatrzymuje dodanie pustego pola do listy
    }

    if(groups.length == 0) {
        alert('Proszę wpisać najpierw grupę');
        return;
    }

    if(selectGroups.value === 'Wybierz grupę') {
        alert('Proszę wybrać grupę');
        return;
    }

    let task = {
        text: newTask,
        completed: false,
        taskId: uniqId
    }
        
    createTask(task);
    addTask(task);
    todoInput.value = ''; 
}

const addTask = (task) => {
    const selectGroupName = selectGroups.value;
    const indexGroupToSaveTask = groups.findIndex(group => selectGroupName === group.groupName);
    groups[indexGroupToSaveTask].tasks.push(task);
    saveGroup();
    loadGroups();
}

const markAllTasks = () => {
    groups.forEach(group => {
        group.tasks.forEach(task => {
            checkboxCheckAllTasks.checked ? task.completed = true : task.completed = false;
            saveGroup();
            loadGroups();
        })
    })
}

todoForm.addEventListener('submit', getNewTask);
checkboxCheckAllTasks.addEventListener("change", markAllTasks);


