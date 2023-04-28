import {atom} from "jotai";
import TaskModel from "../models/TaskModel";

export const tasksAtom = atom<TaskModel[]>([]);