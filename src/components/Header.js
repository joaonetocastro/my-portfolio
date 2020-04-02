import React, {useState} from 'react';
import {AppBar, Toolbar, Select, MenuItem, Typography, Link, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {LinkedIn as LinkedInIcon, GitHub as GitHubIcon} from '@material-ui/icons';
import i18n from '../internalization/i18n';
import {getCurrentLang} from '../utils';

export function Header(props){
  const [currentLang, setCurrentLang] = useState(getCurrentLang);
  const changeLanguage = (event) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    setCurrentLang(newLanguage);
    props.onLanguageChange();
  }
  const classes = makeStyles({
    title: {
      flexGrow: 1,
    },
    toolbar: {
      marginLeft: 25,
      marginRight: 25
    }
  })();
  return (
    <AppBar position="static" color="default" elevation={0} >
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
          {'JOÃO NETO CASTRO'}
        </Typography>
        {socialMediaButtons()}
        <Select value={currentLang} onChange={changeLanguage}>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="pt">Português</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
}
const socialMediaButtons = ()=>{
  const classes = makeStyles({
    iconButton: {
      padding: 0,
      marginRight: 10,
      width: 32,
      height: 32
    },
    icon: {
      width: 32,
      height: 32
    }
  })();
  return(
    <div>
      <Link underline="none" target="_blank" href="https://linkedin.com/in/joão-neto-c-969146b3 ">
        <IconButton size="medium" className={classes.iconButton} style={{
          color: '#1976d2',
          boxShadow: 'none',
        }}>
          <LinkedInIcon className={classes.icon}/>
        </IconButton>
      </Link>
      <Link underline="none" target="_blank" href="https://github.com/joaonetocastro">
        <IconButton className={classes.iconButton} style={{
          color: '#24292E'
        }}>
          <GitHubIcon className={classes.icon}/>
        </IconButton>
      </Link>
    </div>
  );
}