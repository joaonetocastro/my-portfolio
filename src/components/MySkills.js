import React from 'react';
import { Box, Grid, Typography} from '@material-ui/core';
import {skills} from '../helper';
import {withNamespaces} from 'react-i18next';

export const MySkills = withNamespaces()(({t}) =>{
  const skillsList = skills.map((skill, index) => {
    return(
      <Box key={index} component="span" alignItems="center" style={{paddingLeft:10}}>
        <img key={index} src={skill.src} alt={skill.alt} className="skill-img" style={{
          height: 25,
        }}/>
        </Box>
    );
  });
  return (
    <Box m={2}>
      <Grid>
        <Grid item xs={3}>
          <Typography variant="h5" component="span" style={{alignSelf: 'center', flexDirection: 'column'}}>
            {t('mySkills.title')}
          </Typography>
        </Grid>
        <Grid item xs={9} style={{paddingTop: 20}}>
          <Box alignItems="center" component="span"  style={{paddingLeft:20}}>
            {skillsList}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
});