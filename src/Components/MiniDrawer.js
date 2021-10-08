import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Grid, Box, Toolbar, CssBaseline, List, ListItem, ListItemIcon, ListItemText, Typography, Divider, IconButton } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import HomeIcon from '@mui/icons-material/Home';
import ReactLogo from '../Assets/img/ReactLogo.png'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routes, { RenderRoutes } from '../Routes/Routes'

const drawerWidth = 220;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const useStyles = makeStyles({
    root: {
        backgroundColor: '#9fa8da',
        color: (props) => props.color,
    },
});

function MiniDrawer(props) {
    const classes = useStyles(props);
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Grid container xs={12} sm={12} >
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Router>
                    <AppBar position="fixed" open={open}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    marginRight: '36px',
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Link to='/'><img src={ReactLogo} alt='...' width='70' height='50' /></Link>
                            <Typography variant="h6" noWrap component="div">
                                React Project
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" open={open}>
                        <DrawerHeader>
                            <Typography variant="h6" sx={{ marginRight: 4 }}>
                                Components
                            </Typography>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <List>
                            <ListItem button>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    {displayRouteMenu(Routes)}
                                </ListItemText>
                            </ListItem>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}

                        </List>
                        <Divider />
                        <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                    <Grid item xs={12}>
                        <Box component="main" sx={{ flexGrow: 1, p: 3 }} className={classes.root}>
                            <DrawerHeader />
                            <RenderRoutes routes={Routes} />
                            <Typography paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                                sapien faucibus et molestie ac.
                            </Typography>
                        </Box>
                    </Grid>
                </Router>
            </Box>
        </Grid>
    )
}

export default MiniDrawer

function displayRouteMenu(routes) {
    /**
     * Render a single route as a list item link to the config's pathname
     */
    function singleRoute(route) {
        return (
            <List key={route.key}>
                <Link to={route.path}>
                    {route.key}
                </Link>
            </List>
        );
    }

    // loop through the array of routes and generate an unordered list
    return (
        <List>
            {routes.map(route => {
                // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
                if (route.routes) {
                    return (
                        <React.Fragment key={route.key}>
                            {singleRoute(route)}
                            {displayRouteMenu(route.routes)}
                        </React.Fragment>
                    );
                }

                // no nested routes, so just render a single route
                return singleRoute(route);
            })}
        </List>
    );
}