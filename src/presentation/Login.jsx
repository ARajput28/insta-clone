import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import login from '../container/login';

function Login() {
  const { user, handleChange, handleSubmit } = login();
  return (
    <div style={{ margin: '50px' }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ my: 3 }}>
          <Typography color="textPrimary" variant="h4">
            Sign in
          </Typography>
          <Typography color="textSecondary" gutterBottom variant="body2">
            Sign in on the internal platform
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Button
              color="info"
              fullWidth
              startIcon={<FacebookIcon />}
              // onClick={formik.handleSubmit}
              size="large"
              variant="contained"
            >
              Login with FB
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              fullWidth
              color="error"
              startIcon={<GoogleIcon />}
              // onClick={formik.handleSubmit}
              size="large"
              variant="contained"
            >
              Login with G
            </Button>
          </Grid>
        </Grid>
        <Box
          sx={{
            pb: 1,
            pt: 3,
          }}
        >
          <Typography align="center" color="textSecondary" variant="body1">
            or login with email address
          </Typography>
        </Box>
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
            disabled={user.email === '' || user.password === ''}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Sign In Now
          </Button>
        </Box>
        <Typography color="textSecondary" variant="body2">
          Don&apos;t have an account?{' '}
          <Link
            to="/signup"
            variant="subtitle2"
            underline="hover"
            sx={{
              cursor: 'pointer',
            }}
          >
            Sign Up
          </Link>
        </Typography>
      </form>
    </div>
  );
}

export default Login;
