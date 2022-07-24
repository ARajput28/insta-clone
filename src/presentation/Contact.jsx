import { Box, Typography } from '@mui/material';
import { leremText2, loremText1 } from '../description/layout';

function Contact() {
  return (
    <div style={{ margin: '20px' }}>
      <Box sx={{ my: 3 }}>
        <Typography color="textPrimary" variant="h4">
          Contact
        </Typography>
        <Typography color="textSecondary" gutterBottom variant="body2">
          This is our contact page of Instacart clone....
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

export default Contact;
