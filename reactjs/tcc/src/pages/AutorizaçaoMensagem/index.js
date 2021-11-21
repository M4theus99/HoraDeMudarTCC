
import "animate.css/animate.min.css";
import { Link } from 'react-router-dom'
import {Container} from './styled';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';
import Api from '../../service/api';
const api = new Api();


export default function AutorizaçaoMensagem ( props ) {

    const [chat, SetChat] = useState([]);


    const validarResposta = (resp) => {
        
        if (!resp.erro)
            return true;
        alert("erro")
    
        return false;
    }

        const remover = async (id) => {

            confirmAlert({
                title: 'Remover Mensagem?',
                message: `Tem certeza que deseja excluir a mensagem?`, 
                buttons:[
                    {
                        label: 'Sim',
                        onClick: async () =>{
                        const r = await api.removerMensagem(id);
                        if (!validarResposta(r)) 
                        return;
                        toast.dark('Mensagem removida!');
                        }
                        },
                        {
                            label: 'Não'
                        }
                    ]
                })
            }


    const ListaMensagem = async ()=> {
      const ListarMensagem = await api.listarMensagensChat(1);
      SetChat(ListarMensagem);
      }
    
     ListaMensagem();
    

    return(

        <Container>
 <ToastContainer />
            <div class="site">

                <div class="cabecalho-inicio">

                    <div class="cabecalho-img">
                        <img class="img-fx1" src="/assets/imagens/logo-claro.png" alt=""/>
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
                           
    
                         </div>
                         <div className="lixeira">
                             <img onClick={() => remover (x.id_HDM_chat)} src="/assets/imagens/pg-chat-lixeira.png" alt="" style={{cursor: 'pointer', width: '25px', height:'25px'}}/>
                         </div>

                         
                     </tr>
                     </div>
                    
                 )}
                 </div>
                </div>
        </Container>

    )
}