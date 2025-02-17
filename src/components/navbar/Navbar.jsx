import React from 'react'
import Links from './links/Links'
import styles from "./navbar.module.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
    <Link href="/" className={styles.logo}>Navbar</Link>
    <Links />
    </div>
  )
}

export default Navbar