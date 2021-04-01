import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DashboardIcon from '@material-ui/icons/Dashboard';
import QueueIcon from '@material-ui/icons/Queue';
import EditIcon from '@material-ui/icons/Edit';
import ManageBooks from '../ManageBooks/ManageBooks';
import AddBook from '../AddBook/AddBook';
import EditBook from '../EditBook/EditBook';
import { Container } from 'react-bootstrap';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            style={{width: "100%"}}
        >
            {value === index && (
                <Container style={{width: "100%"}}>
                    {children}
                </Container>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

const Admin = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label={<div><DashboardIcon style={{marginRight: "10px"}} />Manage Books</div>} {...a11yProps(0)} />
                <Tab label={<div><QueueIcon style={{marginRight: "10px"}} />Add Book</div>} {...a11yProps(1)} />
                <Tab label={<div><EditIcon style={{marginRight: "10px"}} />Edit Book</div>} {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <ManageBooks />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AddBook />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <EditBook />
            </TabPanel>
        </div>
    );
};

export default Admin;