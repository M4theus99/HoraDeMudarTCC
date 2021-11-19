
import "animate.css/animate.min.css";
import { Link } from 'react-router-dom'
import {Container} from './styled'
import { useEffect, useState } from 'react';
import Api from '../../service/api';
const api = new Api();


export default function AutorizaçaoMensagem () {

    const [chat, SetChat] = useState([]);
  const [mensagem, SetMeg] = useState('')


  const remover = async () => {
    const r = await api.removerMensagem();
    

        alert('Mensagem removida!');
    
}
  
    const ListaMensagem = async ()=> {
      const ListarMensagem = await api.listarMensagensChat(1);
      SetChat(ListarMensagem);
      }
    
     ListaMensagem();
    

    return(

        <Container>

            <div class="site">

                <div class="cabecalho-inicio">

                    <div class="cabecalho-img">
                        <img class="img-fx1" src="/assets/imagens/logo-claro.png" alt=""/>
                    </div>

                    <div class="cabecalho-botoes">
                        
                        <Link to="/Denúncia">Denúncia</Link>
                        <Link to="/TipoViolencia">Tipos de violência</Link>
                        <Link to=" ">Tipos de assédio</Link>
                        <Link to=" ">Mapa das Delegacia</Link>
                        <Link to="/AutoeEstima">Autoestima</Link>
                        <Link to="/Chat">Chat</Link>
                        <Link to=" ">Cadastro</Link>
                                                    
                    </div>

                </div>
                

                <div class="texto">

                    <div class="texto-fx1"> Autorização de mensagens - CHAT </div>

                </div>

                
                </div>

                <div class="tabela">   
                <div className="chatt">
                 {chat.map((x, i) =>
                     <div key={x.id_HDM_chat}>
                           <tr classname={i % 2 == 0 ? "linha-alternada" : ""}>
                                    <td>
                                    {" "}
                                    </td>
                         <div className="chat-message">
                         
                            
                             <div> <b>Mensagem</b>: {x.ds_HDM_mensagem} </div>
                           
                             <td className="coluna-acao"> <button onClick= {remover}> <img src="/assets/imagens/icons8-trash.svg" alt="" /> </button> </td> 
                         </div>
                         
                     </tr>
                     </div>
                    
                 )}
                 </div>
                </div>
        </Container>

    )
}