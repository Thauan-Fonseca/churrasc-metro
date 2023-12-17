import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Lista = () => {

    const [data] = useOutletContext()

  return (
    <div>
      <p>{data.convidados} Convidados</p>
      <p>{data.homens}Homens {data.mulheres} Mulheres {data.criancas} Crianças</p>
      <div>
        <div>
          <ul>
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
    </div>
  )
}

export default Lista