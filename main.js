import './style.css'
import { getNewGroup } from './group';
import { loadGroups } from "./saveAndLoadGroups";
import { getNewTask } from './task';
import { markAllTasks } from './markAllTasks';

const todoForm = document.getElementById('todoForm');
export const todoInput = document.getElementById('todoInput');
export const checkboxCheckAllTasks = document.getElementById('checkAllTasks');

const groupForm = document.getElementById('groupForm');
export const groupInput = document.getElementById('groupInput');
export const selectGroups = document.getElementById('selectGroups');
export const listGroup = document.getElementById('listGroup');
export const groups = JSON.parse(localStorage.getItem('groups')) || [];

groupForm.addEventListener('submit', getNewGroup);
todoForm.addEventListener('submit', getNewTask);
checkboxCheckAllTasks.addEventListener("change", markAllTasks);
document.addEventListener('DOMContentLoaded', loadGroups);
