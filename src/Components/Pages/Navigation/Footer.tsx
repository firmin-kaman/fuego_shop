import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  Link,
  Paper,
} from '@material-ui/core';
import "../../Css/Footer.css"

const useStyles = makeStyles((theme) => ({
  // root: {
  //   backgroundColor: '#fbfbfd',
  // },
  footerTop: {
    padding: '120px 0px 270px',
    position: 'relative',
    overflowX: 'hidden',
  },
  companyWidget: {
    marginBottom: '20px',
    backgroundColor: "#eee"
  },
  subscribeForm: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
  },
  subscribeInput: {
    marginRight: '10px',
  },
  downloadList: {
    marginBottom: '0px',
  },
  socialIcon: {
    display: 'flex',
    '& a': {
      width: '44px',
      height: '44px',
      lineHeight: '43px',
      background: 'transparent',
      border: '1px solid #e2e2eb',
      fontSize: '24px',
      marginRight: '4px',
      borderRadius: '50%',
      textAlign: 'center',
      color: '#858da8',
      transition: 'all 0.2s linear',
    },
    '& a:hover': {
      background: '#1976d2',
      borderColor: '#5e2ced',
      color: 'white',
    },
  },
  footerBottom: {
    fontSize: '14px',
    fontWeight: 300,
    lineHeight: '20px',
    color: '#7f88a6',
    padding: '27px 0px',
  },
  footerBg: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '266px',
    background: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigB8iI5tb8WSVBuVUGc9UjjB8O0708X7Fdic_4O1LT4CmLHoiwhanLXiRhe82yw0R7LgACQ2IhZaTY0hhmGi0gYp_Ynb49CVzfmXtYHUVKgXXpWvJ_oYT8cB4vzsnJLe3iCwuzj-w6PeYq_JaHmy_CoGoa6nw0FBo-2xLdOPvsLTh_fmYH2xhkaZ-OGQ/s16000/footer_bg.png") no-repeat scroll center 0',
  },
  footerBgOne: {
    background: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia0PYPxwT5ifToyP3SNZeQWfJEWrUENYA5IXM6sN5vLwAKvaJS1pQVu8mOFFUa_ET4JuHNTFAxKURFerJYHDUWXLXl1vDofYXuij45JZelYOjEFoCOn7E6Vxu0fwV7ACPzArcno1rYuVxGB7JY6G7__e4_KZW4lTYIaHSLVaVLzklZBLZnQw047oq5-Q/s16000/volks.gif") no-repeat center center',
    width: '330px',
    height: '105px',
    backgroundSize: '100%',
    position: 'absolute',
    bottom: 0,
    left: '30%',
    animation: '$myfirst 22s linear infinite',
  },
  footerBgTwo: {
    background: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyLGwEUVwPK6Vi8xXMymsc-ZXVwLWyXhogZxbcXQYSY55REw_0D4VTQnsVzCrL7nsyjd0P7RVOI5NKJbQ75koZIalD8mqbMquP20fL3DxsWngKkOLOzoOf9sMuxlbyfkIBTsDw5WFUj-YJiI50yzgVjF8cZPHhEjkOP_PRTQXDHEq8AyWpBiJdN9SfQA/s16000/cyclist.gif") no-repeat center center',
    width: '88px',
    height: '100px',
    backgroundSize: '100%',
    bottom: 0,
    left: '38%',
    position: 'absolute',
    animation: '$myfirst 30s linear infinite',
  },
  '@keyframes myfirst': {
    '0%': {
      left: '-25%',
    },
    '100%': {
      left: '100%',
    },
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer /*className={classes.root}*/ >
      <div className={classes.footerTop}>
        <Container>
          <Grid container spacing={4} >
            <Grid item md={3}>
              <Paper elevation={0} className={`${classes.companyWidget} wow fadeInLeft`} data-wow-delay="0.2s" >
                <Typography variant="h6" className="f-title f_600 t_color f_size_18">
                  Get in Touch
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Don’t miss any updates of our new templates and extensions!
                </Typography>
                <form action="#" className={`${classes.subscribeForm} f_subscribe_two mailchimp`} method="post" noValidate>
                  <TextField type="text" name="EMAIL" className={`${classes.subscribeInput} memail`} placeholder="Email" />
                  <Button variant="contained" color="primary" type="submit" className="btn btn_get btn_get_two blue-mui">
                    Subscribe
                  </Button>
                  <p className="mchimp-errmessage" style={{ display: 'none' }}></p>
                  <p className="mchimp-sucmessage" style={{ display: 'none' }}></p>
                </form>
              </Paper>
            </Grid>
            <Grid item md={3}>
              <Paper elevation={0} className={`${classes.companyWidget} wow fadeInLeft`} data-wow-delay="0.4s">
                <Typography variant="h6" className="f-title f_600 t_color f_size_18">
                  Download
                </Typography>
                <List className={`${classes.downloadList} list-unstyled f_list`}>
                  <ListItem>
                    <Link href="#">Company</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Android App</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">iOS App</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Desktop</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Projects</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">My tasks</Link>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item md={3}>
              <Paper elevation={0} className={`${classes.companyWidget} wow fadeInLeft`} data-wow-delay="0.6s">
                <Typography variant="h6" className="f-title f_600 t_color f_size_18">
                  Help
                </Typography>
                <List className="list-unstyled f_list">
                  <ListItem>
                    <Link href="#">FAQ</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Term &amp; conditions</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Reporting</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Documentation</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Support Policy</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Privacy</Link>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item md={3}>
              <Paper elevation={0} className={`${classes.companyWidget} wow fadeInLeft`} data-wow-delay="0.8s">
                <Typography variant="h6" className="f-title f_600 t_color f_size_18">
                  Team Solutions
                </Typography>
                <div className={classes.socialIcon}>
                  <Link href="#" className="fab fa-facebook"></Link>
                  <Link href="#" className="fab fa-twitter"></Link>
                  <Link href="#" className="fab fa-linkedin"></Link>
                  <Link href="#" className="fab fa-pinterest"></Link>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <div className={classes.footerBg}>
          <div className={classes.footerBgOne}></div>
          <div className={classes.footerBgTwo}></div>
        </div>
      </div>
      <div className={classes.footerBottom}>
        <Container>
          <Grid className='foot-end'>
            <Grid >
              <Typography variant="body2" className="mb-0 f_400">
                © FuegoShop Inc.. {new Date().getFullYear()} All rights reserved.
                {/* © {new Date().getFullYear()} FuegoShop. Tous droits réservés. */}
              </Typography>
            </Grid>
            <Grid className="text-right">
              <Typography variant="body2">
                Made with 💖 in <Link href="https://github.com/firmin-kaman" target="_blank">My_Git_Account</Link>
                {/* Made with <i className="icon_heart"></i> in <Link href="http://cakecounter.com" target="_blank">CakeCounter</Link> */}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
