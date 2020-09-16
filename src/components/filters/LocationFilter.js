import { Slider } from "@material-ui/core";
import React from "react";

function LocationFilter() {
  return (
    <div className="locationFilter">
      <h4>Filter by Location</h4>
      <Slider
        defaultValue={30}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
    </div>
  );
}

export default LocationFilter;
