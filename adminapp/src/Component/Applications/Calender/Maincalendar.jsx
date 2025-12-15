import { Box } from '@mui/material';
import Sidebar from '../../Home/Dashboard/Sidebar';
import Topbar from './CTopbar';
import CalendarView from './CalenderView';

function Calendar() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1}>
        <Topbar />
        <CalendarView />
      </Box>
    </Box>
  );
}

export default Calendar;
