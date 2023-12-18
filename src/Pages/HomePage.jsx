import React from 'react'
import Header from '../components/Header'
import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Descricao from '../components/Descricao'
import TituloLista from '../components/TituloLista'
import styles from './HomePage.module.css'
import HeaderForm from './HeaderForm'

const Home = () => {

  const url = useLocation()
  const caminho = url.pathname
  let paginaResultado = false
  let paginaForm = false
  
  if(caminho === "/result"){
    paginaResultado = true
  }

  if(caminho === "/form"){
    paginaForm = true
  }
  
  const [data, setData] = useState({
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
  })

  return (
    <div className={styles.raiz}>
        <Header />
        {paginaResultado ? <TituloLista></TituloLista> : paginaForm ? <HeaderForm /> : <Descricao></Descricao> }
        <Outlet context={[data, setData]}/>
    </div>
  )
}

export default Home


