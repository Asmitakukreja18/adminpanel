// File: src/pages/ProfileOverview.jsx
import { Grid, Box } from "@mui/material";
import Sidebar from "../../../Home/Dashboard/Sidebar";
import Navbar from "../../../Home/Dashboard/Navbar";
import StatsCards from "./StatsCard";
import FollowersChart from "./FollowersChart";
import ActionsCard from "./ActionsCard";
import InteractionChart from "./InteractionChart";
import BestTimeChart from "./BestTimeChart";
import GenderCard from "./GenderChart";
import AgeRangeCard from "./AgeRangeChart";
import ProfileInfoCard from "./ProfileInfoCard";

export default function ProfileOverview() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f6f7fb",
      }}
    >
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 5,
          overflowY: "auto",
        }}
      >
        <Navbar />
     <StatsCards />

<Grid container spacing={2}>

  <Grid item xs={6} md={8}>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <FollowersChart />
      <InteractionChart />
      <BestTimeChart />
      <GenderCard />
      <AgeRangeCard />
    </Box>
  </Grid>

  
  <Grid item xs={12} md={4}>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <ProfileInfoCard />
      <ActionsCard />
    </Box>
 

          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
