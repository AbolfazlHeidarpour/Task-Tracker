import {TaskItemStyle} from "./TrackerStyle";
import {FC, memo} from "react";
import TaskModel from "../models/TaskModel";
import {IconButton, Stack, Typography} from "@mui/material";
import * as dayjs from "dayjs";
import {RiDeleteBin6Fill} from 'react-icons/ri';
import useDeleteTask from "../hooks/useDeleteTask";

interface ITaskItemProps {
  readonly task: TaskModel;
}

export const TaskItem: FC<ITaskItemProps> = memo(({task}) => {
  const {Date, Task, Id} = task;
  const deleteTask = useDeleteTask();

  const onDelete = () => {
    deleteTask(Id);
  };

  return (
    <TaskItemStyle onClick={e => e.target.classList.toggle('completed')}>
      <Stack>
        <Typography fontWeight='bold' fontSize={24}>
          {Task}
        </Typography>
        <Typography color='error' variant='subtitle'>
          {dayjs(Date).format('YYYY/MM/DD | HH:MM')}
        </Typography>
      </Stack>
      <IconButton color='error' onClick={onDelete}>
        <RiDeleteBin6Fill />
      </IconButton>
    </TaskItemStyle>
  );
});