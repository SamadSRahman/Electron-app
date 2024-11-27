import React from "react";
import styles from "./Form.module.css";
import Card from "../Card/Card";

export default function Form() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2>Please fill the below information</h2>
      </div>
      <div className={styles.body}>
        <Card
          text={"Average km you drive per day"}
          min={1}
          max={1000}
          unit={"km"}
        />
        <div className={styles.vehicleSection}>
          <div className={styles.cvSection}>
            <h2>Conventional vehicle</h2>
            <span>Please enter below details to know how much you’ll save</span>

            <div className={styles.selectSection}>
              <span>Select the conventional vehicle of your choice</span>
              <div className={styles.radioSection}>
                <label htmlFor="">
                  {" "}
                  <input type="radio" /> CNG
                </label>
                <label htmlFor="">
                  {" "}
                  <input type="radio" /> Diesel
                </label>
                <label htmlFor="">
                  {" "}
                  <input type="radio" /> Petrol
                </label>
              </div>
            </div>
            <div className={styles.cardSection}>
            <Card
          text={"Fuel cost in your city(/L)"}
          min={1}
          max={500}
          unit={"₹"}
          defaultValue={100}
        />    <Card
        text={"Average mileage(km/l)"}
        min={1}
        max={50}
        unit={"km"}
        defaultValue={8}
      />
            </div>
          </div>
          <div className={styles.evSection}>
          <h2>Electrical vehicle</h2>
            <span>Please enter below details to know how much you’ll save</span>

            <div className={styles.selectSection}>
              <span>Select model</span>
              <div className={styles.radioSection}>
                <label htmlFor="">
                  {" "}
                  <input type="radio" /> Kona
                </label>
                <label htmlFor="">
                  {" "}
                  <input type="radio" /> Ionic5
                </label>
              </div>
            </div>
            <div className={styles.cardSection}>
            <Card
          text={"How long would you like to use the electric car(in years)"}
          min={1}
          max={15}
          unit={""}
          defaultValue={5}
        />    <Card
        text={"EV Charging Cost(/kwh)"}
        min={1}
        max={500}
        unit={"₹"}
        defaultValue={100}
      />
            </div>
          </div>
        </div>
        <div className={styles.btnSection}>
        <button>Calculate</button>
      </div>
      </div>
 
    </div>
  );
}
