import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function Menu() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div
            className={classes.list}
            role="presentation"
        >
            <List>
                <ListItem button onClick={() => history.push('/')}>
                    <ListItemIcon><HomeIcon/></ListItemIcon>
                    <ListItemText primary={"Página Inicial"} />
                </ListItem>

                <ListItem button onClick={() => history.push('/lojas')}>
                    <ListItemIcon><StoreIcon/></ListItemIcon>
                    <ListItemText primary={"Lojas"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={() => history.push('/login')}>
                    <ListItemIcon><ExitIcon/></ListItemIcon>
                    <ListItemText primary={"Sair"} />
                </ListItem>
            </List>
        </div>
    );
}
