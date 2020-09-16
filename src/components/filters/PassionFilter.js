import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import React, { useState } from "react";
import { actionTypes } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
import passionsList from "../../res/passions";
import "./css/PassionFilter.css";
function PassionFilter() {
  const [state, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const [passions, setPassions] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const addPassion = (passion) => {
    setPassions([...passions, passion]);
  };

  const deletePassion = (passion) => {
    setPassions(passions.filter((p) => p !== passion));
  };

  const saveFilters = () => {
    dispatch({
      type: actionTypes.ADD_PASS_FILTERS,
      filters: passions,
    });
    handleClose();
  };

  return (
    <div className="passionFilter">
      <h4>Filter by passions</h4>
      <Button onClick={handleOpen}>+ Add Passion</Button>
      <div className="passionFilter__selected">
        {passions.map((pass) => (
          <Button
            variant="outlined"
            size="small"
            onClick={() => deletePassion(pass)}
          >
            {pass}
          </Button>
        ))}
      </div>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Select the ones you want o search for</DialogTitle>
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
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={saveFilters} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PassionFilter;
