import React, { useState } from "react";
import styles from "./Card.module.css";
import { Slider } from "@mui/material";

export default function Card({ text, min, max, unit, defaultValue }) {
  const [sliderValue, setSliderValue] = useState(defaultValue); // Initial value of 5

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div className={styles.container}>
     {unit==="₹"?( <div className={styles.textSection}>
        <span>{text}</span>
        <div className={styles.valueSection}><span>{unit}{sliderValue}</span></div>
      </div>):( <div className={styles.textSection}>
        <span>{text}</span>
        <div className={styles.valueSection}><span>{sliderValue}{unit}</span></div>
      </div>)}
      <Slider
        min={min}
        max={max}
        defaultValue={sliderValue}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={handleSliderChange}
      />
    </div>
  );
}
