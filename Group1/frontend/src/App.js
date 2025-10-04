//add your improts above
import './App.css';
import React, { Component, useState, useEffect} from 'react';
import { FormControl, FormControlLabel, FormHelperText, TextField, Checkbox, Button } from '@mui/material';

function CreateRoomBookingPage() {
  
  /* Projector Textfield Handler */
  //Initialize default projector to 0
  const [defaultProjector, setDefaultProjector] = useState(0); 
  const [projectorNum,setProjector] = useState(defaultProjector);

  const handleProjectorChange = (event) => {
            setProjector (event.target.value);
  };

  /* Mic Textfield Handler */
  //Initialize default mic to 0
  const [defaultMic, setDefaultMic] = useState(0); 
  const [mic,setMic] = useState(defaultMic);

  const handleMicChange = (event) => {
            setMic (event.target.value);
  };

  /*  Catering Handler */
  //Initialize default catering to false
  const [catering,setCatering] = useState(false);

  const handleCateringChange = (event) => {
            setCatering (event.target.checked);
  };

  /* Book Room Button */
  const [message, setMessage] = useState(""); 

  const handleBookRoomButtonPressed = () => {
    setMessage("Book Room was pressed!");
    //Update database etc. 
  };

  return (
    <div className="container">
      <div className="RoomDropDown-wrapper">
        For Najiba - room dropdown code goes here
      </div>
      <div className="Calender-wrapper">
        For Alwin - calender dropdown code goes here
      </div>
      <div className="ResourceButtons-wrapper">
        <div className = "ResourceProjector-wrappper">
          <FormControl>
            <TextField 
                required={true} 
                type="number" 
                onChange={handleProjectorChange}
                defaultValue={defaultProjector}
                inputProps={{
                    min: 0,
                    style: {textAlign: "center"},
                }}
            />
            <FormHelperText>
                <div align="center">
                    Request number of projectors
                </div>
            </FormHelperText>
          </FormControl>
        </div>
        <div className = "ResourceMic-wrappper">
         <FormControl>
            <TextField 
                required={true} 
                type="number" 
                onChange={handleMicChange}
                defaultValue={defaultMic}
                inputProps={{
                    min: 0,
                    style: {textAlign: "center"},
                }}
            />
            <FormHelperText>
                <div align="center">
                    Request number of mics
                </div>
            </FormHelperText>
          </FormControl>
        </div>
        <div className = "ResourceCatering-wrappper">
          <FormControl>
            <FormControlLabel 
              value="false" 
              control={
              <Checkbox 
                checked={catering}
                onChange={handleCateringChange}
                color="primary" 
              />}
              label="Catering"
          />
          </FormControl>
        </div>
      </div>
      <div className="ResourceTextfield-wrapper">
        For Tyler - additional resouce textfield goes here
      </div>
      <div className="BookRoomButton-wrapper">
        <Button 
          color="primary" 
          variant="contained" 
          onClick={handleBookRoomButtonPressed}>
          Book Room
        </Button>
        <div>{message}</div>
      </div>
    </div>

  );
}

export default CreateRoomBookingPage;