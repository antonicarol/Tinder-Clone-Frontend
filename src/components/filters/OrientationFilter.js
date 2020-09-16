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
import orientationList from "../../res/orientation";

function OrientationFilter() {
  const [state, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const [orientation, setOrientation] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const addOrientation = (orien) => {
    setOrientation([...orientation, orien]);
  };

  const deleteOrientation = (orien) => {
    setOrientation(orientation.filter((o) => o !== orien));
  };

  const saveFilters = () => {
    dispatch({
      type: actionTypes.ADD_ORIEN_FILTERS,
      filters: orientation,
    });
    handleClose();
  };
  return (
    <div className="orientationFilter">
      <h4>Filter by Orientation</h4>
      <Button onClick={handleOpen}>+ Add Orientation</Button>
      <div className="orientationFilter__selected">
        {orientation.map((orien) => (
          <Button
            variant="outlined"
            size="small"
            onClick={() => deleteOrientation(orien)}
          >
            {orien}
          </Button>
        ))}
      </div>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Select the ones you want to search for</DialogTitle>
        <DialogContent>
          {orientationList.map((orien) => (
            <Button
              key={orien}
              onClick={() => addOrientation(orien)}
              variant="outlined"
            >
              {orien}
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

export default OrientationFilter;
