import React from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <h2>logo</h2>
      <ul>
        <Link href="/">
          <a>
            <li>Home</li>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <li>About</li>
          </a>
        </Link>
        <Link href="/profile">
          <a>
            <li>Profile</li>
          </a>
        </Link>
      </ul>
      <h2>Login</h2>
    </div>
  )
}

export default Navbar
