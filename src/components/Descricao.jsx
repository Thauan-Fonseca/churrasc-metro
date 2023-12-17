import React from 'react'
import styles from './Descricao.module.css'

const Descricao = () => {
  return (
    <div className={styles.container}>
        <h3 className={styles.paragrafo}>Precisa de uma ajudinha com o churrasco? :)</h3>
        <h3 className={styles.paragrafo}>Quantas pessoas vão participar?</h3>
    </div>
  )
}

export default Descricao