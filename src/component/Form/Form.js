import React from 'react';
import './Form.css';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import FormControl from '@material-ui/core/FormControl';




// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     margin: {
//       margin: theme.spacing(1),
//     },
//     withoutLabel: {
//       marginTop: theme.spacing(3),
//     },
//     textField: {
//       width: '25ch',
//     },
//   }));

const Form = () => {
    // const classes = useStyles();
    const [values, setValues] = React.useState({
      password: '',
      showPassword: false,
    });

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value  });
    };

    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    return (
        <div>
            {/* <form action="">
            <input
               className="input" 
                type="password" 
                name="password" 
                id="filled-adornment-password" 
                placeholder="Password"
                type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={ handleChange('password')}
                endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
            />
            <br />
            <input className="input" type="password" name="confirm-password" id=""  placeholder="Confirm Password"/>

            
            </form>
            */}

            {/* 
            <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <Input
            id="filled-adornment-password"
            name='password'
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={ handleChange('password')}
           
          />
           <InputLabel htmlFor="filled-adornment-confirm-password">Confirm Password</InputLabel>
          <Input
            id="filled-adornment-confirm-password"
            name='confirm-password'
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}




            {/* <div class="center">
                <h1>Login</h1>
                <form method="post">
                    <div class="txt_field">
                        <input type="text" required />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div class="txt_field">
                        <input type="text" required />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div class="txt_field">
                        <input type="password" required  />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div class="txt_field">
                        <input type="password" required />
                        <span></span>
                        <label>Confirm Password</label>
                    </div>
                    <div class="pass">Forgot Password?</div>
                    <input type="submit" value="Login" />
                    <div class="signup_link">
                        Not a member? <a href="#">Signup</a>
                    </div>
                </form>
            </div> */}


        </div>
    );
};

export default Form;