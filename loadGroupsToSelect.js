import { selectGroups, groups } from "./main";

const loadGroupsToSelect = () => {   
    selectGroups.innerHTML = '<option value="">Wybierz grupę</option>'; 
    groups.forEach(group => {
        const groupOption = document.createElement('option');
        groupOption.value = group.groupName;
        groupOption.textContent = group.groupName;
        selectGroups.appendChild(groupOption);
    });    
}

export { loadGroupsToSelect }