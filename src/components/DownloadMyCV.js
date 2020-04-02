import React from 'react';
import { Box, Typography, Button , Link} from '@material-ui/core';
import {withNamespaces} from 'react-i18next';

export const DownloadMyCV = withNamespaces()(({t}) => {
  return(
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h5" component="h1">
        {t('downloadMyCV.title')}
      </Typography>
      <Link target="_blank" href="/docs/cv_joao_neto_castro.pdf" underline="none">
        <Button color="secondary" variant="contained" style={{margin:15}}>
          {t('downloadMyCV.buttonText')}
        </Button>
      </Link>
    </Box>
  );
});