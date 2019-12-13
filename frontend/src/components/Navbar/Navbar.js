import React, {useState} from 'react';
//import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
//import Button from '@material-ui/core/Button'


const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });


export default function Navbar() {
    const [value, setValue] = useState(0)
    const classes = useStyles()
    return (
      <div>
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                      setValue(newValue);
                }}
               showLabels
              className={classes.root}>
           <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
           <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
           <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
           
        </BottomNavigation>
      </div>
    );
  }


