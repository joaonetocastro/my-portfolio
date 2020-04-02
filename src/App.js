import React, {Fragment, useState} from 'react';
import './App.css';
import {Container, Grid, ThemeProvider} from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';
import {Header, MySkills, ProjectsGrid, AboutMe, DownloadMyCV, LetsWorkTogether} from './components';
import {ProjectService} from './services/ProjectService';

function App() {
  const [projects, setProjects] = useState(ProjectService.getProjects());
  const loadProjects = () =>{
    console.log("Changing language");
    setProjects(ProjectService.getProjects());
    console.log(projects);
  }
  const onLanguageChange = () =>{
    loadProjects();
  }

  const theme = createMuiTheme({
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontSize: 12,
    },
  });
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Header onLanguageChange={onLanguageChange}/>
        <Container id="main-container" maxWidth="md">
          <ProjectsGrid projects={projects}/>
          <MySkills />
          <Grid container style={{margin: '1em', paddingRight: 10}}>
            <Grid item sm>
              <AboutMe />
            </Grid>
            <Grid item sm>
              <DownloadMyCV />
            </Grid>
          </Grid>
          <LetsWorkTogether/>
        </Container>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
