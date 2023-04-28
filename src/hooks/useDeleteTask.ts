import {useSetAtom} from "jotai";
import {tasksAtom} from "../atoms/tasksAtom";

export default function useDeleteTask() {
  const setTasks = useSetAtom(tasksAtom);

  return (id: string) => {
    setTasks(prev => prev.filter(p => p.Id !== id));
  };
}