import {Box, Container, List, ListItem, styled} from "@mui/material";

export const TaskTrackerContainer = styled(Container)({
  height: '100%'
});

export const TrackerStyle = styled(Box)({
  width: '700px',
  margin: "auto",
  height: 'calc(100% - 56px)',
  fontWeight: 600,
  'input': {
    border: 'none',
    padding: '0.35rem .75rem',
    fontWeight: 'bold',
  }
});

export const TrackerListHead = styled(List)({
  display: "grid",
  gridTemplateColumns: 'repeat(2, 1fr)',
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: 3,
  padding: '15px 20px',
  marginTop: '25px',
});

export const TrackerRow = styled(List)({
  marginBottom: 15,
});

export const TaskItemStyle = styled(ListItem)({
  display: 'flex',
  justifyContent: 'space-between',
  height: 70,
  backgroundColor: '#fff',
  boxShadow: '0px 0px 5px 1px rgba(0, 0, 0, 0.2)',
  borderRadius: 3,
  padding: '25px 30px',
  marginBottom: '25px',
  transition: "all 0.2s ease",
  '&:hover': {
    cursor: 'pointer',
    boxShadow: 'none'
  },
  '&:nth-of-type(even)': {
    backgroundColor: 'rgba(30, 158, 186, 0.1)'
  },
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(30, 158, 186, 0.3)'
  },
  '&.completed': {
    color: 'gray',
    background: 'lightgray',
    boxShadow: 'none'
  }
});

export const NewTaskStyle = styled(ListItem)({
  display: 'flex',
  justifyContent: 'space-between'
})