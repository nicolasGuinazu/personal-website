
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import classes from './Contact.module.css'

const Contact = (props) => {
    
    return (
      <>
        <div className={classes.contact}>
        <GitHubIcon fontSize="large" className={classes.icon} onClick={() => window.open('https://github.com/nicolasGuinazu', "_blank")}/>
        <MailOutlineIcon fontSize="large" className={classes.icon} onClick={() => window.open("mailto:nicolasguinazu1@gmail.com")}/>
        <LinkedInIcon fontSize="large" className={classes.icon} onClick={() => window.open('https://www.linkedin.com/in/nicolasguinazu91', "_blank")}/>
        </div>
      </>
    );
  };
  
  export default Contact;