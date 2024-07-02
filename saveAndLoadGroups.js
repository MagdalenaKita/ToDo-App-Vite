import { groups, listGroup } from "./main";
import { loadGroupsToSelect } from "./loadGroupsToSelect";
import { createGroup } from "./createGroup";

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

export { saveGroup, loadGroups }
