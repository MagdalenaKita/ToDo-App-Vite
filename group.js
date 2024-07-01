import { createTask } from "./createTask";

const groupForm = document.getElementById('groupForm');
const groupInput = document.getElementById('groupInput');
const selectGroups = document.getElementById('selectGroups');
const listGroup = document.getElementById('listGroup');
const groups = JSON.parse(localStorage.getItem('groups')) || [];

const getNewGroup = (event) => {
    event.preventDefault();
    const newGroup = groupInput.value.trim();

    if(newGroup === '') {
        alert('Wpisz nazwę grupy');
        return; // zatrzymuje dodanie pustego pola do listy
    }

    let group = {
        groupName: newGroup,
        tasks: []
    }

    createGroup(group);
    addGroup(group);
    groupInput.value = '';
}

const createGroup = (group) => {
    const createdGroup = document.createElement('li');
    const headerGroup = document.createElement('h3');
    const groupTaskList = document.createElement('ul');

    headerGroup.textContent = group.groupName;
    groupTaskList.className = 'listTask';

    group.tasks.forEach(taskElement => {
        const li = createTask(taskElement, group);
        groupTaskList.appendChild(li);
    });

    createdGroup.appendChild(headerGroup);
    createdGroup.appendChild(groupTaskList);
    listGroup.appendChild(createdGroup);
}

const addGroup = (group) => {
    groups.push(group);
    saveGroup();
    loadGroups();
}

const loadGroupsToSelect = () => {   
    selectGroups.innerHTML = '<option value="">Wybierz grupę</option>'; 
    groups.forEach(group => {
        const groupOption = document.createElement('option');
        groupOption.value = group.groupName;
        groupOption.textContent = group.groupName;
        selectGroups.appendChild(groupOption);
    });    
}

const saveGroup = () => {
    localStorage.setItem('groups', JSON.stringify(groups));
}

const loadGroups = () => {
    listGroup.innerHTML = '';
    loadGroupsToSelect();
    groups.forEach((group) => {
        createGroup(group);
    })
}

groupForm.addEventListener('submit', getNewGroup);

export { groups, saveGroup, loadGroups }