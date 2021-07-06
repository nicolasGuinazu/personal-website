
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import classes from './Contact.module.css'

const Contact = (props) => {
    
    return (
      <>
        <div className={classes.contact}>
        <GitHubIcon fontSize="large" className={classes.icon} onClick={() => window.open('#', "_blank")}/>
        <MailOutlineIcon fontSize="large" className={classes.icon} onClick={() => window.location.assign("mailto:xyz@abc.com")}/>
        <PhoneAndroidIcon fontSize="large" className={classes.icon}/>
        <LinkedInIcon fontSize="large" className={classes.icon} onClick={() => window.open('#', "_blank")}/>
        </div>
      </>
    );
  };
  
  export default Contact;