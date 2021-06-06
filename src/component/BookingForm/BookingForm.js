import React, { useContext } from 'react';
import './BookingForm.css';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/Header';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '90%',
        },
    },
}));


const BookingForm = () => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [cityName, setCityName] = useContext(UserContext)
    return (
        <div className="container main-background-cover">
            <Header></Header>
            <div className=" row " style={{ marginTop: '100px', padding: '30px' }}>

                {/*-- ------------------ ----------------1st col start now --------------------------- */}
                <div className="col-md-5">
                    <h1 className="text-white">{cityName}</h1>
                    <p className="text-white">
                        {cityName} is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
                    </p>
                </div>

                {/* --------------------------------      2nd col start now       ----------------------------     */}


                <div className="col-md-5 booking-form-style">
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Origin" />
                        <TextField id="standard-basic" label="Destination" />
                    </form>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Form"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                className="aria"
                            />
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="To"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                className="aria"
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <br />
                    {/* <button className="btn btn-warning booking-btn">Start Booking</button> */}
                    <Link to="/room"> <button className="btn btn-warning booking-btn">Start Booking</button> </Link>
                </div>
            </div>


        </div>
    );
};

export default BookingForm;