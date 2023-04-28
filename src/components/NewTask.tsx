import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {NewTaskStyle, TrackerRow} from "./TrackerStyle";
import {Button, TextField} from "@mui/material";
import useAddTask from "../hooks/useAddTask";
import {VscAdd} from 'react-icons/vsc';

export default function NewTask() {
  const {onTaskChange, isAddPermitted, onDateChange, newTask, onAdd} = useAddTask();

  return (
    <TrackerRow>
      <NewTaskStyle>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            format='YYYY/MM/DD | hh:mm:ss'
            onChange={onDateChange}
            value={newTask.Date}
          />
        </LocalizationProvider>
        <TextField value={newTask.Task} onChange={onTaskChange}/>
        <Button
          disabled={!isAddPermitted}
          startIcon={<VscAdd />}
          variant='contained'
          onClick={onAdd}
          color='success'
        >
          Add
        </Button>
      </NewTaskStyle>
    </TrackerRow>
  );
}
