import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../pages/home/Home'
import Doacoes from '../../pages/doacoes/doacoes'
import Estoque from '../../pages/estoque/Estoque'

import styles from './Navbar.module.css'

const Narvbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.lista}>
        <li> 
          <Link to= "/" className={styles.linkNav}>Home</Link>
          </li>
        <li>
           <Link to= "/doacoes" className={styles.linkNav}> Doe </Link>
           </li>
        <li>
         <Link to=  "estoque" className={styles.linkNav}>Estoque</Link>
         </li>
      </ul>
    </nav>
  )
}

export default Narvbar