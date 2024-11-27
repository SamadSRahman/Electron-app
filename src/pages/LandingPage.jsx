import React from 'react'
import styles from './LandingPage.module.css'
import Header from '../components/Header/Header'
import Form from '../components/Form/Form'


export default function LandingPage() {
  return (
    <div className={styles.container}>
       <Header/>
       <Form/>
    </div>
  )
}
