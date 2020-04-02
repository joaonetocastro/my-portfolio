import React, { Fragment } from 'react';
import { Box, Card, CardContent, CardHeader, Typography, Grid, Link, CardActions, Button, CardActionArea, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withNamespaces } from 'react-i18next';
import i18n from '../internalization/i18n';

export const ProjectsGrid = withNamespaces()(function(props){
  const projects = props.projects;
  const classes = makeStyles({
    root: {
      flexGrow: 1
    }
  })();
  
  const ProjectItem = (project, index) => {
    const classes = makeStyles({
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
      },
    })();
    // const classes = useStyles();
    return (
      <Grid item xs={12} sm={6} lg={4} key={index} className="stretched-card">
        <Card variant="outlined" >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={project.media}
              title={project.name}
              />
          </CardActionArea>
          <CardHeader title={project.name} />
          <CardContent className={classes.card}>
            {Description(project.description)}
          </CardContent>
          <CardActions>
            <GithubButton href={project.githubUrl} />
            <LivePreviewButton href={project.livePreviewUrl} />
          </CardActions>
        </Card>
      </Grid>
    );
  }
  const projectItems = projects.map((project, index) => {
    return (ProjectItem(project, index));
  });
  function GithubButton(props) {
    return (
      <Link underline="none" target="_blank" href={props.href}>
        <Button variant="outlined" color="secondary">Github</Button>
      </Link>
    );
  }
  function LivePreviewButton(props) {
    if (props.href === undefined) return null;
    return (
      <Link underline="none" target="_blank" href={props.href}>
        <Button variant="outlined" color="primary">{i18n.t('projectsGrid.livePreviewButtonText')}</Button>
      </Link>
    );
  }
  function Description(text) {
    const splittedText = text.split('**');
    const finalDescription = splittedText.map((str, index) => {
      if (index % 2 === 0) {
        return (
          <Typography variant="body1" color="textSecondary" component="span" key={index}>
            {str}
          </Typography>
        );
      } else {
        return (
          <Typography variant="body1" color="textPrimary" component="span" key={index}>
            {str}
          </Typography>
        );
      }
    });
    return (
      <Fragment>
        {finalDescription}
      </Fragment>
    );
  };
  return (
    <Box component="div" m={2} className={classes.root}>
      <Typography variant="h5" component="h1">
        {i18n.t('projectsGrid.title')}
      </Typography>
      <Grid container spacing={2} alignItems="flex-end" style={{ marginTop: 1 }}>
        {projectItems}
      </Grid>
    </Box>
  );
});
