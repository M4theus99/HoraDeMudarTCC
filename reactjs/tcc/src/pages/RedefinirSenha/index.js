import { Link } from 'react-router-dom'
import {Container} from './styled';

import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'; 


export default function RedefinirSenha (props) 
{
  const [validado, setValidado] = useState(false);
  const [codigo, setCodigo] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

    const navigation = useHistory()
  
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
  
  async function alterarSenha (){
    const r = await axios.put(`http://localhost:3030/RedefinirSenha`, 
        {email: props.location.state.email, 
        codigo: codigo, 
        novaSenha: novaSenha})

    if (r.data.status === 'ok') {
        toast.dark('senha alterada');
        navigation.push('/Login')
    } else {
        toast.error('E-mail Inválido')
    } 

  }
    return (

    
        <Container>
                 <ToastContainer />
        <LoadingBar color="red" ref={LoadingBar} /> 

        
            <div class="cabecalho-inicio">

            <div class="cabecalho-img">
                <Link to="/LoginADM">
                <img src="/assets/imagens/logo-claro.png" alt=""/>
                </Link>
            </div>


            <div class="cabecalho-botoes">

                
                <Link to="/Denuncie">Denúncie</Link>
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
            <div class="titulo">Redefinir Senha</div>

            <div class="senhas">
                <div class="nova-senha">
                  <input type="password" name="" placeholder="Nova Senha"></input>
                </div>

                <div class="confirmar-senha">
                  <input type="password" name="" placeholder="Confirmar senha"></input>
                </div>
            </div>

            <div class="botoes">
                <div class="alterar">
                  <button>Alterar</button>
                </div>

                <div class="cancelar">
                  <button>Cancelar</button>
                </div>
            </div>
        </div>
    </Container>
    )
}