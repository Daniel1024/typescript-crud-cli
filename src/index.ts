import inquirer from 'inquirer';
import { TaskCollection } from "./models/TaskCollection";
import { tasks } from './models/exampleData';

const collection = new TaskCollection('daniel', tasks);

const displayTaskList = (): void => {
    console.log(`${collection.userName}'s Tasks (${collection.getTaskCounts().incomplete} task to do)`);
    collection.getTaskItems(true).forEach(task => task.printDetails());
};

displayTaskList();
