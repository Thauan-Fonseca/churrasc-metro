import React, { useState } from 'react'
import styles from "./ModalPeople.module.css"

const ModalPeople = (props) => {

  const {name, data, setData} = props

  return (
    <div className={styles.rowFirst}>
        <div className={styles.inputGruop}>
            <label for="men">{props.name}</label>
            <input type="number" id="men" value={data} onChange={setData} className={styles.inputValid}/>
            <div class="button-group">
                <button class={styles.inputGroupButtonSmall} >-</button>
                <button class={styles.inputGroupButtonSmall} >+</button>
            </div>
        </div>
    </div>
  )
}

export default ModalPeople