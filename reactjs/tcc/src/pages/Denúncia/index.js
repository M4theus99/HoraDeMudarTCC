

import {Container} from './styled'
import Cabecalho from  '../../componentes/comum/cabecalho'
import { Link } from 'react-router-dom'


export default function Denúncia () {
    return (

        <Container>

            <Cabecalho/>

          <div class="conteudo">
              <div class="imagem">
                <img src="/assets/imagens/pg-denuncia.png" alt=""/>
              </div>

              <div class="informacao">
                  <div class="caracteristicas">
                      <div class="titulo">Características</div>
                      
                      <Link to="/CaracteristicasLocalizaçao">
                        <button><img src="/assets/imagens/pg-denuncia-img1.png" alt=""/></button>
                      </Link>
                  </div>

                  <div class="denuncia">
                      <div class="chat">Chat de Deúncias</div>

                      <Link to="/ChatDenuncia">
                        <button><img src="/assets/imagens/pg-denuncia-img2.png" alt=""/></button>
                      </Link>
                  </div>
              </div>
          </div>
      </Container>

    )
}

      
