import React from 'react'
import styles from './Home.module.css'

import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h1>Bem vindo</h1>
            <p>Se possivel,faça uma doação 
              <span className={styles.link}>
              <Link to ="/doacoes"> Clicando aqui</Link>
              </span>
            </p>
            <p>Se precisar quiser ver o estoque
              <span className={styles.link}>
                <Link to = "/estoque"> Clique aqui</Link>
              </span>
              </p>
        </div>
    </div>
  )
}

export default Home