
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './component/Main/Main';
import NotFound from './component/NotFound/NotFound';
import Contact from './component/Contact/Contact';
import BookingForm from './component/BookingForm/BookingForm';
import Login from './component/Login/Login';
import Room from './component/Room/Room';
import { createContext, useState } from 'react';
import Form from './component/Form/Form';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const UserContext = createContext({});

function App() {
  const [cityName, setCityName] = useState('Sajek');
  const [userLogged, setUserLogged] = useState({});
  return (
    <UserContext.Provider value={[cityName, setCityName, userLogged, setUserLogged]}>
     <Router>
       <h1> email: {userLogged.email}</h1>
      <Switch>
         <Route exact path="/">   
          <Main></Main>   
         </Route>
         <Route path="/home">
          <Main> </Main>
        </Route>
        <Route path="/bookingForm">
          <BookingForm></BookingForm>
        </Route>
        <PrivateRoute path="/room">
          <Room></Room>
        </PrivateRoute>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
    </Router>

    </UserContext.Provider>
  
  );
}

export default App;
