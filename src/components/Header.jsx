import React from 'react'
import styles from './Header.module.css'


const Header = () => {
  return (
    <div className={styles.header}>
        <h1 className={styles.titulo}>Churrascômetro</h1>
        <h3 className={styles.paragrafo}>Precisa de uma ajudinha com o churrasco? :)</h3>
        <h3 className={styles.paragrafo}>Quantas pessoas vão participar?</h3>
    </div>
    
  )
}

export default Header