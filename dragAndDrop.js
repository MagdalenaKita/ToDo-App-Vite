import { groups } from "./main";
import { saveGroup, loadGroups } from "./saveAndLoadGroups";

let draggedItem = null;

const handleDragStart = (event) => {
    draggedItem = event.target;
    draggedItem.classList.add('draggedItemStyle');
}

const handleDragOver = (event) => {
    event.preventDefault();
}

const handleDrop = (event) => {
    event.preventDefault();
    const targetItem = event.target; 

    const draggedGroupIndex = groups.findIndex((group) => group.groupName === draggedItem.parentNode.parentNode.firstChild.textContent);    
    const targetGroupIndex = groups.findIndex((group) => group.groupName === targetItem.parentNode.parentNode.firstChild.textContent);    

    const indexDraggedTask = groups[draggedGroupIndex].tasks.findIndex(task => task.text === draggedItem.firstChild.textContent);
    const taskText = groups[draggedGroupIndex].tasks[indexDraggedTask].text;
    const taskCompleted = groups[draggedGroupIndex].tasks[indexDraggedTask].completed;
    const taskTaskId = groups[draggedGroupIndex].tasks[indexDraggedTask].taskId;

    groups[draggedGroupIndex].tasks.splice(indexDraggedTask, 1);
    groups[targetGroupIndex].tasks.push({text: taskText, completed: taskCompleted, taskId: taskTaskId});

    draggedItem = null;
    
    saveGroup();
    loadGroups();
}

export { handleDragStart, handleDragOver, handleDrop }