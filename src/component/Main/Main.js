import React, { useContext, useState } from 'react';
import './Main.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Main = () => {
    const [cityName, setCityName] = useContext(UserContext)
    const handleNameChange = (name) => {
      console.log(name);
      setCityName(name);
    }
    return (
        <div className="container main-background-cover" >
              <Header></Header>
            <div  className="row" style={{ marginTop: '100px', padding: '30px' }}>
                  <div className="col-md-4">
                     <h1 className="text-white"> {cityName}</h1>
                      <p className="text-white"> {cityName} is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ... </p>
                     {/* <button className="btn btn-warning"> Booking </button> */}
                     <Link to="/bookingForm"> <button className="btn btn-warning"> Booking </button> </Link>
                  </div>
                    
                  <div className="col-md-8">
                    <Home handleNameChange={handleNameChange}></Home>
                  </div>

            </div>
     </div>  
    );
};

export default Main;