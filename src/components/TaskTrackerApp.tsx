import {TextField, Typography} from "@mui/material";
import {
  NewTaskStyle,
  TaskItemStyle,
  TaskTrackerContainer,
  TrackerListHead,
  TrackerRow,
  TrackerStyle
} from "./TrackerStyle";
import classes from '../css/taskTracker.module.css';

export const TaskTrackerApp = () => {

  return (
    <TaskTrackerContainer>
      <Typography variant='h3' textAlign='center'>
        Task Tracker
      </Typography>
      <TrackerStyle>
        <TrackerListHead>
          <Typography>Date</Typography>
          <Typography>Task</Typography>
        </TrackerListHead>
        <TrackerRow>
          <NewTaskStyle>
            <TextField />
          </NewTaskStyle>
        </TrackerRow>
        <TrackerRow className={classes.taskListContainer}>
          <span className={classes.taskList}>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
            <TaskItemStyle>item</TaskItemStyle>
          </span>
        </TrackerRow>
      </TrackerStyle>
    </TaskTrackerContainer>
  );
}
