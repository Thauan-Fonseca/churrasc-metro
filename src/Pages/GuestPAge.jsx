import { Link, useOutletContext } from 'react-router-dom'
import ModalPeople from '../components/ModalPeople'
import styles from './GuestPage.module.css'

const GuestPAge = () => {

  const [data, setData] = useOutletContext()

  const manipulaHomens = (event) => {
    setData((prev) => ({...prev, homens: event.target.value}))
  }

  const manipulaMulheres = (event) => {
      setData((prev) => ({...prev, mulheres: event.target.value}))
  }

  const manipulaCriancas = (event) => {
    setData((prev) => ({...prev, criancas: event.target.value}))
  }

  // Início da lógica dos botões do ModalPeople - Nesta parte, ficam as lógicas dos botões para aumento e diminuição dos campos 

  const homensBotaoPositivo = ()=> {
    const homens = Number(data.homens) + 1
    return setData((prev) => ({...prev, homens: homens}))
  }

  const homensBotaoNegativo = ()=> {
    const homens = Number(data.homens) - 1
    return setData((prev) => ({...prev, homens: homens}))
  }

  const mulheresBotaoPositivo = ()=> {
    const mulheres = Number(data.mulheres) + 1
    return setData((prev) => ({...prev, mulheres:mulheres}))
  }

  const mulheresBotaoNegativo = ()=> {
    const mulheres = Number(data.mulheres) - 1
    return setData((prev) => ({...prev, mulheres:mulheres}))
  }

  const criancasBotaoPositivo = ()=> {
    const criancas = Number(data.criancas) + 1
    return setData((prev) => ({...prev, criancas: criancas}))
  }

  const criancasBotaoNegativo = ()=> {
    const criancas = Number(data.criancas) - 1
    return setData((prev) => ({...prev, criancas: criancas}))
  }

  // Fim da lógica dos botões do ModalPeople

  const soma = () => {
    setData((prev) => ({...prev, convidados: Number(data.homens) + Number(data.mulheres) + Number(data.criancas) }))
    return data.convidados
  }

  const quantidadeCarne = () => {
    const quantidade = ((Number(data.homens)* 0.4) + (Number(data.mulheres)*0.32) + (Number(data.criancas)*0.2)).toFixed(2)
    return quantidade
  }

  const quantidadePaoDeAlho = () => {
    const quantidadeAdulto = (Number(data.homens) + Number(data.mulheres))*2
    const quantidadeTotal = Number(data.criancas) + quantidadeAdulto
    return quantidadeTotal
  }

  const quantidadeRefrigerante = () => {
    const quantidade = ((Number(data.homens) + Number(data.mulheres) + Number(data.criancas))/5)*2
    return quantidade
  }

  const quantidadeAgua = () => {
    const quantidade = (Number(data.homens) + Number(data.mulheres) + Number(data.criancas))/5
    return quantidade
  }

  const quantidadeCarvao = () => {
    const quantidade = (Number(data.homens) + Number(data.mulheres) + Number(data.criancas))
    return quantidade
  }

  const quantidadeSal = () => {
    const quantidade = (Number(data.homens) + Number(data.mulheres) + Number(data.criancas))/25
    return quantidade
  }

  const quantidadeGelo = () => {
    const quantidade = ((Number(data.homens) + Number(data.mulheres) + Number(data.criancas))/10)*5
    return quantidade
  }

  const quantidadeCerveja = () => {
    const quantidade = (Number(data.homens) + Number(data.mulheres))*3
    return quantidade
  }

  const manipuladorClick = () =>{
    setData((prevstate) => ({...prevstate, carne: quantidadeCarne(), paoDeAlho: quantidadePaoDeAlho(), refrigerante: quantidadeRefrigerante(), agua: quantidadeAgua(), carvao: quantidadeCarvao(), sal: quantidadeSal(), gelo: quantidadeGelo(), cerveja: quantidadeCerveja() ,resultado: soma()}))
  }
  
  return (
    <div >
        <div className={styles.containers}>
          <ModalPeople name="Homens" data={data.homens} setData={manipulaHomens} botaoPH={homensBotaoPositivo} botaoNH={homensBotaoNegativo} label="homens"/>
          <ModalPeople name="Mulheres" data={data.mulheres} setData={manipulaMulheres} botaoPH={mulheresBotaoPositivo} botaoNH={mulheresBotaoNegativo} label="mulheres"/>
          <ModalPeople name="Crianças" data={data.criancas} setData={manipulaCriancas} botaoPH={criancasBotaoPositivo} botaoNH={criancasBotaoNegativo} label="criancas"/>
        </div>
        <Link to="/result" className={styles.link}> <button className={styles.botao} onClick={manipuladorClick}>Calcular</button> </Link>
    </div>

    // onClick={manipuladorClick}
    
  )
} 

export default GuestPAge