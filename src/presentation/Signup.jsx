import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import signup from '../container/signup';

function Signup() {
  const { user, handleChange, handleSubmit } = signup();
  return (
    <div style={{ margin: '50px' }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ my: 3 }}>
          <Typography color="textPrimary" variant="h4">
            Create a new account
          </Typography>
          <Typography color="textSecondary" gutterBottom variant="body2">
            Use your email to create a new account
          </Typography>
        </Box>
        <TextField
          // error={Boolean(formik.touched.firstName && formik.errors.firstName)}
          fullWidth
          label="First Name"
          margin="normal"
          name="fname"
          onChange={handleChange}
          value={user.fname}
          variant="outlined"
        />
        <TextField
          // error={Boolean(formik.touched.lastName && formik.errors.lastName)}
          fullWidth
          label="Last Name"
          margin="normal"
          name="lname"
          onChange={handleChange}
          value={user.lname}
          variant="outlined"
        />
        <TextField
          // error={Boolean(formik.touched.email && formik.errors.email)}
          fullWidth
          label="Email Address"
          margin="normal"
          name="email"
          onChange={handleChange}
          type="email"
          value={user.email}
          variant="outlined"
        />
        <TextField
          // error={Boolean(formik.touched.password && formik.errors.password)}
          fullWidth
          label="Password"
          margin="normal"
          name="password"
          onChange={handleChange}
          type="password"
          value={user.password}
          variant="outlined"
        />

        <Box sx={{ py: 2 }}>
          <Button
            color="primary"
            //   disabled={formik.isSubmitting}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Sign Up Now
          </Button>
        </Box>
        <Typography color="textSecondary" variant="body2">
          Have an account?{' '}
          <Link to="/login" variant="subtitle2" underline="hover">
            Sign In
          </Link>
        </Typography>
      </form>
    </div>
  );
}

export default Signup;
