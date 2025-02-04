import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `{"$"}${value}`;
}

export default function DiscreteSlider({ price, setPrice }) {
  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  return (
    <div className="mx-12 my-2 w-[10rem]">
      <Slider
        aria-label="Price"
        value={price}
        onChange={handleChange}
        defaultValue={3000}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={500}
        step={500}
        marks
        min={1000}
        max={8000}
      />
    </div>
  );
}
