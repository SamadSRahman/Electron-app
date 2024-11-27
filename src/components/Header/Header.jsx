import React from 'react'
import arrowBack from '../../assets/arrow_back.svg'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
        <button className={styles.backBtn}>
            <img src={arrowBack} alt="" />
            <span>
                Back
            </span>
        </button>
        <div>
            <h1>Welcome to EV Calculator</h1>
        </div>
        <div className={styles.emptyDiv}>

        </div>
    </div>
  )
}
