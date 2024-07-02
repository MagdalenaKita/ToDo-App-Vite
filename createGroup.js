import { createTask } from "./createTask";
import { listGroup } from "./main";

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

export { createGroup }