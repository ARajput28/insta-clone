import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import { Autocomplete, Badge, Button, Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import {
  auth,
  authDrawelist,
  drawerList,
  navItems,
} from '../description/layout';
import layout from '../container/layout';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  const theme = useTheme();

  const {
    open,
    isAuth,
    navigate,
    handleDrawerOpen,
    handleDrawerClose,
    searchList,
    handleSearch,
    totalCart,
    logout,
  } = layout();

  const list = (data) => (
    <List>
      {data.map((text) => (
        <Link to={text.url} style={{ textDecoration: 'none' }}>
          <ListItem key={text.key} disablePadding>
            <ListItemButton>
              <ListItemText primary={text.key} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );

  const headers = (data, autchCheck = false) => (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      {!autchCheck ? (
        data.map((item) => (
          <Link to={item.value} style={{ textDecoration: 'none' }}>
            <Button key={item.key} sx={{ color: '#fff' }}>
              {item.key}
            </Button>
          </Link>
        ))
      ) : (
        <Button sx={{ color: '#fff' }} onClick={logout}>
          Logout
        </Button>
      )}
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={{ marginRight: '250px' }}
            variant="h6"
            component="div"
            onClick={() => navigate('/')}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Instacart
          </Typography>{' '}
          <div
            style={{
              marginLeft: 0,
              width: '370px',
              color: 'white',
              background: 'white',
            }}
          >
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={searchList.map((option) => option?.title)}
              onChange={(e, item) => handleSearch(e, item)}
              onInputChange={(e, item) => handleSearch(e, item)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search...."
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
          </div>
          {headers(navItems)}
          {isAuth ? headers(auth, true) : headers(auth)}
          {isAuth ? (
            <Badge badgeContent={totalCart} color="secondary">
              <ProductionQuantityLimitsIcon onClick={() => navigate('/cart')} />
            </Badge>
          ) : (
            ''
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {isAuth ? list(authDrawelist) : list(drawerList)}
        <Divider />
      </Drawer>
      <Grid open={open}>
        <DrawerHeader />
        <Typography paragraph>{children}</Typography>
      </Grid>
    </Box>
  );
}
