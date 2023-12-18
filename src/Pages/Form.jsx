import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Form = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cep, setCep] = useState(null)
  const [checado, setChecado] = useState(true)
  const [eVisivelNome, setEVisivelNome] = useState(false);
  const [eVisivelEmail, setEVisivelEmail] = useState(false);
  const [eVisivelCep, setEVisivelCep] = useState(false);

  // 1 - Função para validação de nome

  const validaNome = (evento) => {
    const nomeInserido = evento.target.value
    if(nomeInserido === ''){
      setEVisivelNome(false)
    } else {
      setEVisivelNome(true)
    }
    
    setNome(nomeInserido)
  }

  // 2 - Função para validação de email

  const validaEmail = (evento) => {
    const emailInserido = evento.target.value
    if(emailInserido === ""){
      setEVisivelEmail(false)
    } else if(!emailInserido.includes('@')) {
      setEVisivelEmail(false)
    } else {
      setEVisivelEmail(true)
    }

    setEmail(emailInserido)
  }

  // 3 - Função de validação de cep

  const validaCep = (evento) => {
    const cepInserido = evento.target.value
    if(cepInserido === ''){
      setEVisivelCep(false)
    } else {
      setEVisivelCep(true)
    }
    
    setCep(cepInserido)
  }

  // 4 - Função checkBox

  const checkbox = () => {
    if(checado){
      setChecado(false)
    } else {
      setChecado(true)
    }
  }


  return (
    <div>
        <div className="container">
          <div className="calculator">
          <div class="row">
              <div class="input-form-group">
                  
                    <form>
                        <input type="text" id="name" placeholder="Digite seu nome" class="input-form" value={nome} onChange={validaNome}/>
                        <p style={{visibility: eVisivelNome ? 'hidden' : 'visible'}} id="invalid-name">O campo nome é obrigatório</p>
                        <input type="email" id="email" placeholder="Digite seu email" class="input-form" value={email} onChange={validaEmail}/>
                        <p style={{visibility: eVisivelEmail ? 'hidden' : 'visible'}} id="invalid-email">Por favor, insira um e-mail válido!</p>
                        <input type="number" id="postal-code" placeholder="Digite seu CEP" class="input-form" value={cep} onChange={validaCep}/>
                        <p style={{visibility: eVisivelCep ? 'hidden' : 'visible'}} id="error-postal-code">Por favor, insira um CEP válido!</p>
                    </form>
                    <div id="consent-input">
                        <input type="checkbox" id="consent-checkbox" name="consentInput" checked={checado} onChange={checkbox}/>
                        <label htmlFor="consent-checkbox" id="consent-label" >Concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses.</label>
                    </div>
                    <div>
                        <Link to="/result"><button  class="default-button">Cadastrar</button></Link>
                    </div>
                </div>
            </div>
          </div>
          <div class="row">
                        
                        <div id="nav-container">
                            <Link to="/"><button id="back-nav">Voltar</button></Link>
                            <Link to="/result"><button id="skip-register">Pular</button></Link>
                            
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default Form