import React from 'react'

import styles from './Doacoes.module.css'
const Doacoes = () => {
  return (
    <div className={styles.container}>
        <form action="">
          <h1>Com o que voce pode ajudar?</h1>
        <input type="text"  placeholder=''/>
        <input type="text"  placeholder=''/>
        <select name="categoria" id="">
          <option value="alimento">Arroz 5kg</option>
          <option value="Higiene">sabonete</option>
          <option value="Medicamento">DorFlex</option>
        </select>
        <button>Doar</button>
        </form>
      </div>
  )
}

export default Doacoes