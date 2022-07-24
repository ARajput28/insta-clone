import { Box, Typography } from '@mui/material';
import { leremText2, loremText1 } from '../description/layout';

function About() {
  return (
    <div style={{ margin: '20px' }}>
      <Box sx={{ my: 3 }}>
        <Typography color="textPrimary" variant="h4">
          About
        </Typography>
        <Typography color="textSecondary" gutterBottom variant="body2">
          This is an about page of Instacart clone....
        </Typography>
      </Box>
      <Box>
        <Typography color="textPrimary" variant="p">
          {loremText1}
          {leremText2}
        </Typography>
      </Box>
    </div>
  );
}

export default About;
