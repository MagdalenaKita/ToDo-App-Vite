import { groups, checkboxCheckAllTasks } from "./main";
import { saveGroup, loadGroups } from "./saveAndLoadGroups";

const markAllTasks = () => {
    groups.forEach(group => {
        group.tasks.forEach(task => {
            checkboxCheckAllTasks.checked ? task.completed = true : task.completed = false;
            saveGroup();
            loadGroups();
        })
    })
}

export { markAllTasks }