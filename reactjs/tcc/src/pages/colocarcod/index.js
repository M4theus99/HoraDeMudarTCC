import {Container} from './styled'
import { Link } from 'react-router-dom'
import axios from "axios";

import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";


import { toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";


import "animate.css/animate.min.css";



export default function RedefinirSenha (props) {

    const [validado, setValidado] = useState(false);
  const [codigo, setCodigo] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

  const loading = useRef(null);
  const navigation = useHistory();

  async function validarCodigo(){
    const r = await axios.post(`http://localhost:3030/validarCodigo`, 
    {email: props.location.state.email, 
     codigo: codigo})
    if  (r.data.status === 'ok') {
        setValidado(true);
    } else {
        toast.error(r.data.mensagem);
    }
}
    return (

        <Container>
            <ToastContainer />
            <LoadingBar ref={loading}  color="#4CE6AA"/>
        <div class="cabecalho-inicio">

        <div class="cabecalho-img">
            <Link to="/"> 
            <img src="/assets/imagens/logo-claro.png" alt=""/>
            </Link>
        </div>
        

        <div class="cabecalho-botoes">

           <Link to="/">Inicio</Link>
             <Link to="/Denúncia">Denúncia</Link>
             <Link to="/TipoViolencia">Tipos de violência</Link>
             <Link to=" ">Tipos de assédio</Link>
             <Link to="/MapaDelegacias">Mapa das Delegacia</Link>
             <Link to="/AutoEstima">Autoestima</Link>
             <Link to="/Chat">Chat</Link>
             <Link to="/Cadastro">Cadastro</Link>
             <Link to="/Login">Login</Link>

                                           
        </div>

    </div>

    <div class="conteudo">
    
                <div class="titulo">
    
                    <div class="texto">Código de Recuperação</div>
    
    
                </div>

            <div class="linha">
                <hr/>
          </div>
                <div class="campos">
    
                <div class="caixa-1">
                <input type="text" value={validado} onChange={e=> setValidado(e.target.value) }  name="" placeholder="Ensira o codigo:"/>
                </div>
    
             
    
                </div>
    
                <div class="botoes">
    
    
                <div class="botao1">
                    <button onClick={validarCodigo}> Enviar Codigo</button>
              </div>

              <Link to="/">
              <div class="botao2">
                    <button> Cancelar  </button>
              </div>
              </Link>
              
                </div>
    
            </div>
        
        
        </Container>
    )
}