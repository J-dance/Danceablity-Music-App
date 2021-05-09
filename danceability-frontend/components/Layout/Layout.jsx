import React from 'react'
import styles from './Layout.module.scss'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main> 
      </div>
      <Footer />
    </>
  )
}

export default Layout
