import {Link} from 'react-router-dom'
import {Container} from './styled'
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BoxMensagem from './boxmensagem';


import { useEffect, useState } from 'react';

import LoadingBar from 'react-top-loading-bar';


import Api from '../../service/api';
const api = new Api();




export default function Chat () {

  const [chat, SetChat] = useState([]);
  const [mensagem, SetMeg] = useState('')
   


  const validarResposta = (resp) => {
    //console.log(resp);

    if (!resp.erro)
        return true;
    alert("erro")

    return false;
}
 
  const inserir = async() => {
   const resp = await api.inserirMensagem(mensagem);
  
    if (!validarResposta(resp)) 
    
    return;
    toast.dark('Mensagem Enviada!');
 }
 
 
  useEffect(() => {
   const ListaMensagem = async ()=> {
     const ListarMensagem = await api.listarMensagensChat(1);
     SetChat(ListarMensagem);
    
     }
   
    ListaMensagem();
   })
    
    return (
  
    <Container>
      <LoadingBar ref={LoadingBar}  color="#4CE6AA"/>
      <ToastContainer />
        
      <div class="faixa1">

        
                  <div class="cabecalho-inicio">

            <div class="cabecalho-img">
                <Link to="/LoginADM">
                <img src="/assets/imagens/logo-claro.png" alt=""/>
                </Link>
            </div>


            <div class="cabecalho-botoes">

                
                <Link to="/">Inicio</Link>
                <Link to="/TipoViolencia">Tipos de violência</Link>
                <Link to="/TiposDeAssedio">Tipos de assédio</Link>
                <Link to="/MapaDelegacias">Mapa das Delegacia</Link>
                <Link to="/AutoEstima">Autoestima</Link>
                <Link to="/Denúncia">Denúncia</Link>
                <Link to="/Cadastro">Cadastro</Link>
                <Link to="/Login">Login</Link>

                                              
            </div>

            </div>

        <div class="introducao">
          <div class="apresentacao">
            <div class="titulo">Chat</div>

            <div class="texto_chat">
              No nosso chat você vai encontrar depoimentos de outras mulheres
              que já tiveram ou tem um relacionamento abusivo. 
              O maior objetivo é mostrar que todas nós conseguimos e devemos sair dessa!
            </div>
          </div>

          <div class="imagem1">
            <img class="imgteste" src="/assets/imagens/pg-chat-fx1.png" alt=""/>
          </div>
        </div>
      </div>

      <div class="faixa2">
        <div class="imagem2">
          <img src="/assets/imagens/pg-chat-fx2.png" alt="" />
        </div>

        <div class="conteudo">
          <div class="compartilhe">Compartilhe</div>

          <div class="explicacao">
            Compartilhe a sua experiencia! Para que outras mulheres se sintam
            encorajadas a fazerem o mesmo, e sair de um relacionamento abusivo.
          </div>
        </div>
      </div>

      <div class="faixa3">
        <div class="chat1">

          {chat.map(item => <BoxMensagem
          key = {item.idSala}
          info = {item}
          />)}
          
          <div class="comentario">
            
          </div>
           
        </div>

        
        <div class="depoimentos">
            <div class="meu_perfil">
                <img src="/assets/imagens/pg-chat-perfil.png" alt=""/>
            </div>
            <div clss="digitar">
              <input type="text" name="" placeholder="Faça um comentário" value={mensagem} onChange={e => SetMeg(e.target.value) }  />
            </div>

            <div class="publicar">
              <button   onClick= {inserir}  className="btn-enviar"> Publicar</button>
            </div>
        </div>
      </div>
    </Container>

    )
} 