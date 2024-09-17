import { Box, Typography } from '@mui/material';

const CustomTab = ({ date, available }) => (
  <Box sx={{ textAlign: 'center',}}>
    <Typography variant="body1"  sx={{fontSize: {xs: "10px"}, }}>{date}</Typography>
    <Typography sx={{color: "#01A400", fontSize: {xs: "8px", md:"11px"},}} >
      {available} Slots Available
    </Typography>
  </Box>
);

export default CustomTab;
