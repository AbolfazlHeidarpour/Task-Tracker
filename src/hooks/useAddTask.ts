import {useAtom, useSetAtom} from "jotai";
import {newTaskAtom} from "../atoms/newTaskAtom";
import {Dayjs} from "dayjs";
import {ChangeEventHandler, useMemo} from "react";
import {tasksAtom} from "../atoms/tasksAtom";
import TaskModel from "../models/TaskModel";
import {v4} from "uuid";

export default function useAddTask() {
  const [newTask, setNewTask] = useAtom(newTaskAtom);
  const setTasks = useSetAtom(tasksAtom);

  const isAddPermitted = useMemo(() => {
    const {Task, Date} = newTask;
    return !(!Date || !Task);
  }, [newTask]);

  const onDateChange = (Date: Dayjs | null) =>
    setNewTask(prev => ({...prev, Date}));

  const onTaskChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
    const {target: {value}} = e;

    setNewTask(prev => ({...prev, Task: value}));
  };

  const onAdd = () => {
    const taskToAdd: TaskModel = {...newTask, Id: v4()};

    setTasks(prev => prev.concat(taskToAdd));
  };

  return {
    isAddPermitted,
    onTaskChange,
    onDateChange,
    newTask,
    onAdd
  };
}