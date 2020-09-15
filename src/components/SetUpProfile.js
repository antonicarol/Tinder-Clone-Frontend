import {
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import "./css/SetUpProfile.css";
import { useStateValue } from "../context/StateProvider";
import db from "../db/axios";
function SetUpProfile() {
  const [{ dbUser, user }, dispatch] = useStateValue();
  const [open, setOpen] = useState(true);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(18);
  const [gender, setGender] = useState("");
  const handleClose = () => {
    setOpen(false);
  };

  const saveChanges = (e) => {
    e.preventDefault();
    console.log(username, age, gender);
    db.put("/tinder/user/profile/update", {
      email: user?.email,
      name: username,
      age: age,
      gender: gender,
      firstTime: true,
    }).then((result) => {
      console.log(result.data);
      setOpen(false);
    });
  };
  return (
    <Modal open={true} onClose={handleClose} className="modal">
      <div className="setUpProfile">
        <div className="setUpProfile__title">
          <img
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo-768x432.png"
            alt=""
          />
          <h3>Welcome to The tinder Clone</h3>
          <img
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo-768x432.png"
            alt=""
          />
        </div>
        <div className="setUpProfile__form">
          <p>Set Up your profile for the first time!</p>
          <div className="setUpProfile__formInput__texts">
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              label="Your age here"
              variant="outlined"
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value, 0))}
            />
          </div>
          <div className="setUpProfile__formInput__gender">
            <h4>Select Your gender</h4>
            <RadioGroup
              className="setUpProfile__radioGroup"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </div>

          <Button onClick={saveChanges}>Set Up your profile!</Button>
        </div>
      </div>
    </Modal>
  );
}

export default SetUpProfile;
