import FacebookIconBlue from "../images/facebook-icon-blue.svg";
import FacebookIconWhite from "../images/facebook-icon-white.png";
import {
	Button,
	Card,
	CardHeader,
	TextField,
	Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/shared/Seo";
import { useSignUpPageStyles} from "../styles";
import {LoginWithFacebook} from './login'


function SignUpPage() {
const classes =  useSignUpPageStyles();

return (
  <>
    <SEO title="Sign up" />
    <section className={classes.section}>
      <article>
        <Card className={classes.card}>
          <div className={classes.cardHeader} />
          <Typography className={classes.cardHeaderSubHeader}>
            Sign up to see photos and videos from your friends.
          </Typography>
          <LoginWithFacebook color="primary" iconColor="white" variant="contained"/>
          <div className={classes.orContainer}>
            <div className={classes.orLine} />
            <div>
              <Typography variant="body2" color="textSecondary">
                OR
              </Typography>
            </div>
            <div className={classes.orLine} />
          </div>
          <form>
            <TextField
              fullWidth
              variant="filled"
              label="Mobile Number or Email"
              margin="dense"
              className={classes.textField}
            ></TextField>
             <TextField
              fullWidth
              variant="filled"
              label="Full Name"
              margin="dense"
              className={classes.textField}
            ></TextField>
            <TextField
              fullWidth
              variant="filled"
              label="Username"
              margin="dense"
              className={classes.textField}
              autoComplete="username"
            ></TextField>
            <TextField
              fullWidth
              variant="filled"
              label="Password"
              margin="dense"
              className={classes.textField}
              autoComplete="new-password"
              type="password"
            ></TextField>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              className={classes.button}
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          <Typography align="center" variant="body2" color="textSecondary">
            By signing up, you agree to be awesome, and know that this is for educational purposes only.
          </Typography>
        </Card>
        <Card className={classes.loginCard}>
          <Typography align="right" variant="body2">
            Have an account?
          </Typography>
          <Link to="/accounts/login">
            <Button color="primary" className={classes.signUpButton}>
              Login
            </Button>
          </Link>
        </Card>
      </article>
    </section>
  </>
);
  
}


export default SignUpPage;
