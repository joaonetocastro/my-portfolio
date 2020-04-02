import React from 'react';
import { Typography, Box } from '@material-ui/core';
import {withNamespaces} from 'react-i18next';

export const AboutMe = withNamespaces()(({t}) => {
  return(
    <Box>
      <Typography variant="h5" component="h1">
        {t('aboutMe.title')}
      </Typography>
      <Typography variant="body1" component="p">
        {t('aboutMe.description')}
      </Typography>
    </Box>

  );
});
