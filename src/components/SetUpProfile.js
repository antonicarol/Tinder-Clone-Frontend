import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import "date-fns";

import React, { useState } from "react";
import "./css/SetUpProfile.css";
import { useStateValue } from "../context/StateProvider";
import db from "../db/axios";
import { ImagePicker } from "react-file-picker";
import passionsList from "../res/passions";
import orientationList from "../res/orientation";
import { useHistory } from "react-router-dom";

function SetUpProfile() {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();

  const [username, setUsername] = useState("");
  const [selectedDate, setSelectedDate] = useState("2000-05-19");
  const [gender, setGender] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [passions, setPassions] = useState([]);
  const [orientation, setOrientation] = useState([]);

  const [openPassions, setOpenPassions] = useState(false);
  const [openOrientation, setOpenOrientation] = useState(false);

  const saveChanges = (e) => {
    e.preventDefault();
    console.log(
      username,
      selectedDate,
      imageUrl,
      gender,
      passions,
      orientation
    );
    db.put("/tinder/user/profile/update", {
      email: user?.email,
      name: username,
      birthday: selectedDate,
      gender: gender,
      firstTime: true,
      pic: imageUrl,
      passions: passions,
      orientation: orientation,
    }).then((result) => {
      console.log(result.data);
      history.push("/home");
    });
  };

  const handleOpenPassions = () => {
    setOpenPassions(true);
  };

  const closePassions = () => {
    setOpenPassions(false);
  };

  const handleOpenOrientation = () => {
    setOpenOrientation(true);
  };

  const closeOrientation = () => {
    setOpenOrientation(false);
  };

  const addPassion = (passion) => {
    setPassions([...passions, passion]);
  };

  const deletePassion = (passion) => {
    setPassions(passions.filter((pass) => pass !== passion));
  };

  const addOrientation = (orien) => {
    setOrientation([...orientation, orien]);
  };

  const delelteOrientation = (orien) => {
    setOrientation(orientation.filter((ori) => ori !== orien));
  };

  return (
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
        <p>CREATE ACCOUNT</p>
        <div className="setUpProfile__required">
          <div className="setUpProfile__formInput__texts">
            <TextField
              variant="outlined"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              className="birthday"
              id="date"
              label="Birthday"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
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
          <div className="setUpProfile__formInput__images">
            <h4>Profile Pic</h4>
            <TextField
              label="Provde an image URL"
              variant="filled"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <ImagePicker
              extensions={["jpg", "jpeg", "png"]}
              dims={{
                minWidth: 100,
                maxWidth: 500,
                minHeight: 100,
                maxHeight: 500,
              }}
            >
              <button disabled> Upload An image from your Gallery</button>
            </ImagePicker>
          </div>
        </div>

        <hr></hr>
        <div className="setUpProfile__optional">
          <div className="setUpProfile__optional__passions">
            <h3>Passions</h3>
            <Button onClick={handleOpenPassions}>+ Add Passion</Button>
            <div>
              {passions.map((pass) => (
                <Button
                  key={pass}
                  onClick={() => deletePassion(pass)}
                  variant="outlined"
                >
                  {pass}
                </Button>
              ))}
            </div>
            <Dialog
              disableBackdropClick
              disableEscapeKeyDown
              open={openPassions}
              onClose={closePassions}
            >
              <DialogTitle>Select your passions</DialogTitle>
              <DialogContent>
                {passionsList.map((passion) => (
                  <Button
                    key={passion}
                    onClick={() => addPassion(passion)}
                    variant="outlined"
                  >
                    {passion}
                  </Button>
                ))}
              </DialogContent>
              <DialogActions>
                <Button onClick={closePassions} color="primary">
                  Cancel
                </Button>
                <Button onClick={closePassions} color="primary">
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </div>

          <div className="setUpProfile__optional__sexOrient">
            <h3>Sexual Orientation</h3>
            <Button onClick={handleOpenOrientation}>
              + Add Sexual Orientation
            </Button>
            <div>
              {orientation.map((ori) => (
                <Button
                  key={ori}
                  onClick={() => delelteOrientation(ori)}
                  variant="outlined"
                >
                  {ori}
                </Button>
              ))}
            </div>
            <Dialog
              disableBackdropClick
              disableEscapeKeyDown
              open={openOrientation}
              onClose={closeOrientation}
            >
              <DialogTitle>Select your Sexual Orientation</DialogTitle>
              <DialogContent>
                {orientationList.map((ori) => (
                  <Button
                    key={ori}
                    onClick={() => addOrientation(ori)}
                    variant="outlined"
                  >
                    {ori}
                  </Button>
                ))}
              </DialogContent>
              <DialogActions>
                <Button onClick={closeOrientation} color="primary">
                  Cancel
                </Button>
                <Button onClick={closeOrientation} color="primary">
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>

        <Button onClick={(e) => saveChanges(e)}>Set Up your profile!</Button>
      </div>
    </div>
  );
}

export default SetUpProfile;
