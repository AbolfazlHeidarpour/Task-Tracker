import {Box, Typography} from "@mui/material";
import {TrackerListHead} from "./TrackerStyle";
import NewTask from "./NewTask";

export const TaskTrackerHeader = () => (
  <Box boxShadow='1px 0 5px 2px rgba(0, 0, 0, .5)'>
    <TrackerListHead>
      <Typography>Date</Typography>
      <Typography>Task</Typography>
    </TrackerListHead>
    <NewTask />
  </Box>
);