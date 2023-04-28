import {atom} from "jotai";
import TaskModel from "../models/TaskModel";
import {v4} from 'uuid';

export const newTaskAtom = atom<TaskModel>({
  Id: v4(),
  Date: null,
  Task: ''
});