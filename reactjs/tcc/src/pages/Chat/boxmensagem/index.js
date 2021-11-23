import { Container } from "../styled"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from "../../../service/api"; 

const api = new Api();




export default function BoxMensagem(props){


  const validarResposta = (resp) => {
        
    if (!resp.erro)
        return true;
    alert("erro")

    return false;
}

    const remover = async (id) => {
    const r = await api.removerMensagem(id);
    if (!validarResposta(r)) 
     return;
      toast.dark('Mensagem Removida');
}

    return(
        <Container>
 <ToastContainer />
        
        <div class="depoimento3">
        <div class="usuario3">
          <div class="perfil3">
            <img src="/assets/imagens/pg-chat-perfil.png" alt="" />
          </div>

          <div class="nome3">{props.info.nm_HDM_usuario}</div>
        </div>

        <div class="mensagem3">
          
          <div class="lixeira">
             <img onClick={() => remover(props.info.id_HDM_chat)} src="/assets/imagens/pg-chat-lixeira.png" alt="" style={{cursor: 'pointer'}}/>
          </div>
          
          {props.info.ds_HDM_mensagem} 
        </div>

    
      </div>

      </Container>

    )
}