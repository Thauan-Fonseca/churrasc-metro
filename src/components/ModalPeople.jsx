import React, { useState } from 'react'
import styles from "./ModalPeople.module.css"

const ModalPeople = (props) => {

  const {name, label, data, setData, botaoPH, botaoNH} = props

  return (
    <div className={styles.rowFirst}>
        <div className={styles.inputGruop}>
            <label for={props.label}>{props.name}</label>
            <input type="number" id="men" value={data} onChange={setData} className={styles.inputValid}/>
            <div class="button-group">
                <button class={styles.inputGroupButtonSmall} onClick={botaoNH}>-</button>
                <button class={styles.inputGroupButtonSmall} onClick={botaoPH}>+</button>
            </div>
        </div>
    </div>
  )
}

export default ModalPeople