import React from 'react';
import {Box, Button, Typography, FormControl, TextField, FormGroup} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';
import {withNamespaces} from 'react-i18next';

const getDataFromForm = (form) => {
  const formData = {};
  for(let [key, data] of Object.entries(form)){
    formData[key] = data.current.value;
  }
  return formData;
}
const sendEmail = (e, form, setOpenedSnackbar) => {
  e.preventDefault();
  const params = getDataFromForm(form);
  const service_id = 'default_service';
  const template_id = 'template_wfDDGTec_clone';
  fetch('https://api.emailjs.com/api/v1.0/email/send',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            service_id, 
            template_id, 
            user_id: "user_0I8AP6InVX2vb2xVA8YdU",
            template_params: params
          })
        }).then((res)=> setOpenedSnackbar(true));
      }
      export const LetsWorkTogether = withNamespaces()(({t}) =>{
        const form = {
    name: React.useRef(),
    companyName: React.useRef(),
    contactEmail: React.useRef(),
    message: React.useRef()
  }
  const classes = makeStyles({
    root: {
      '& .MuiTextField-root': {
        margin: 4
      },
    },
    message: {
      '& .MuiOutlinedInput-multiline.MuiOutlinedInput-marginDense': {
        minHeight: 80,
      },
    }
  })();
  const [snackbarOpened, setOpenedSnackbar] = React.useState(false);
  return(
    <Box m={2} width={3/4}>
      <Typography variant="h5" component="h1">
        {t('letsWorkTogether.title')}
      </Typography>
      <form className={classes.root} onSubmit={(e) => sendEmail(e, form, setOpenedSnackbar)}>
        <FormGroup>
          <div>
            <TextField required
                      id="name" 
                      name="name" 
                      label={t('letsWorkTogether.formPlaceholders.name')}
                      variant="outlined" 
                      inputRef={form.name}
                      size="small"/>
            <TextField required
                      id="companyName" 
                      name="companyName" 
                      label= {t('letsWorkTogether.formPlaceholders.companyName')}
                      variant="outlined" 
                      inputRef={form.companyName}
                      size="small"/>
            <TextField required
                      id="contactEmail" 
                      name="contactEmail" 
                      label= {t('letsWorkTogether.formPlaceholders.contactEmail')}
                      variant="outlined" 
                      inputRef={form.contactEmail}
                      size="small"/>
          </div>
        </FormGroup>
        <TextField required
                  id="message" 
                  name="message" 
                  label={t('letsWorkTogether.formPlaceholders.message')}
                  variant="outlined" 
                  size="small"
                  className={classes.message}
                  inputRef={form.message}
                  multiline/>
        <Button color="primary" type="submit" variant="contained">
          {t('letsWorkTogether.buttonText')}
        </Button> 
      </form>
      <Snackbar open={snackbarOpened} autoHideDuration={6000} onClose={setOpenedSnackbar}>
        <Alert severity="success" elevation={6} variant="filled" >
          {t('letsWorkTogether.successMessage')}
        </Alert>
      </Snackbar>
    </Box>
  );
});