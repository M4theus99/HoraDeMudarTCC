import { Container } from "../styled"
import Api from "../../../service/api"; 

const api = new Api();




export default function BoxMensagem(props){

    const remover = async (id) => {
    const r = await api.removerMensagem(id);
}

    return(
        <Container>

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

      


        <div class="reagir_msg3">
          <div class="curtidas3">
            <div class="coracao3">
                <img src="/assets/imagens/pg-chat-coracao.png" alt=""/>
            </div>
          </div>
        </div>
      </div>

      </Container>

    )
}