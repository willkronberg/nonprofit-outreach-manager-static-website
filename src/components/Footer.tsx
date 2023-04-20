/* eslint-disable react/no-invalid-html-attribute */
import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Avatar from '@mui/material/Avatar';
import SocialMediaIcon from './SocialMediaIcon';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {' Will Kronberg '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(5),
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    flexWrap: 'wrap',
  },
  smallAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  largeAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  break: {
    flexBasis: '100%',
    height: 0,
  },
}));

export const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Avatar className={classes.largeAvatar} alt="Will Kronberg" src="./will.jpg" />
          <div className={classes.break} />
          <SocialMediaIcon link="https://github.com/willkronberg">
            <GitHubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon link="https://www.linkedin.com/in/willkronberg/">
            <LinkedInIcon />
          </SocialMediaIcon>
        </div>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
