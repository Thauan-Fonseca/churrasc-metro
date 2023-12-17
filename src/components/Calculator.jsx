import React, { useState } from 'react'
import ModalPeople from './ModalPeople'
import styles from './Calculator.module.css'


const Calculator = () => {

    const [data, setData] = useState({
        mens: 0,
        womens: 0,
        kids: 0,
        resultado: null
    })

    const handleMens = (event) => {
        setData((prev) => ({...prev, mens: event.target.value}))
    }

    const handleWomns = (event) => {
        setData((prev) => ({...prev, womens: event.target.value}))
    }

    const handleKids = (event) => {
        setData((prev) => ({...prev, kids: event.target.value}))
    }

    const obterSoma = () => {
        return (Number(data.mens) +  Number(data.womens) + Number(data.kids) )
    }

    const manipuladorClick = () =>{
        setData((prevstate) => ({...prevstate, resultado: obterSoma()}))
    }

  return (
    <div className={styles.modal}>
        
        <div>
            <ModalPeople name="Homens" data={data.mens} setData={handleMens}/>
            <ModalPeople name="Mulheres" data={data.womens} setData={handleWomns} />
            <ModalPeople name="Crianças" data={data.kids} setData={handleKids}/>
            <button onClick={manipuladorClick}>Teste</button>
            <p>Resultado: {data.resultado}</p>
        </div>
    </div>
  )
}

export default Calculator