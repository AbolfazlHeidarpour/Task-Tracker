import {Typography} from "@mui/material";
import {
  TaskTrackerContainer,
  TrackerRow,
  TrackerStyle
} from "./TrackerStyle";
import classes from '../css/taskTracker.module.css';
import {TaskTrackerHeader} from "./TaskTrackerHeader";
import {TaskItem} from "./TaskItem";
import {useAtomValue} from "jotai";
import {tasksAtom} from "../atoms/tasksAtom";

export const TaskTrackerApp = () => {
  const tasks = useAtomValue(tasksAtom);

  return (
    <TaskTrackerContainer>
      <Typography variant='h3' textAlign='center'>
        Task Tracker
      </Typography>
      <TrackerStyle>
        <TaskTrackerHeader />
        <TrackerRow className={classes.taskListContainer}>
          <span className={classes.taskList}>
            {tasks.map(t => <TaskItem key={t.Id} task={t}/>)}
          </span>
        </TrackerRow>
      </TrackerStyle>
    </TaskTrackerContainer>
  );
}
