import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import styles from "./Lista.module.css"
const Lista = () => {

  const [data, setData] = useOutletContext()

  const novoCalculo = () => {
    setData(() => ({
      homens: 0,
      mulheres: 0,
      criancas: 0,
      convidados: 0,
      carne: 0,
      paoDeAlho: 0,
      Refrigerante: 0,
      agua: 0,
      carvao: 0,
      sal: 0,
      gelo: 0,
      cerveja: 0
    }))
  }

  return (
    <div className={styles.container}>
      <p className={styles.paragrafo}>{data.convidados} Convidados</p>
      <p className={styles.paragrafo}>{data.homens} Homens {data.mulheres} Mulheres {data.criancas} Crianças</p>
      <div>
        <div>
          <ul className={styles.paragrafo}>
            <li>
                Carne - {data.carne} Kg
            </li>
            <li>
                Pão de Alho - {data.paoDeAlho}
            </li>
            <li>
                Refrigerante - {data.refrigerante}L
            </li>
            <li>
                Água - {data.agua}L
            </li>
            <li>
              Carvão - {data.carvao}Kg
            </li>
            <li>
              Sal - {data.sal}Kg
            </li>
            <li>
              Gelo - {data.gelo}Kg
            </li>
            <li>
              Cerveja - {data.cerveja} Garrafas
            </li>
          </ul>
        </div>
      </div>
      <Link to="/"><button className='default-button' onClick={novoCalculo}>Novo Calculo</button></Link>
      
    </div>
  )
}

export default Lista