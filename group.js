import { groupInput, groups } from "./main";
import { saveGroup, loadGroups } from "./saveAndLoadGroups";
import { createGroup } from "./createGroup";

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

const addGroup = (group) => {
    groups.push(group);
    saveGroup();
    loadGroups();
}

export { getNewGroup }