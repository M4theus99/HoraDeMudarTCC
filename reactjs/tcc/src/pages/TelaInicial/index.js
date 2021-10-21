import { Link } from 'react-router-dom'
import {Container} from './styled'

export default function TelaInicial () {
    return(

        <Container>

        <div class="pagina-principal">

            <div class="cabecalho-inicio">

                <div class="cabecalho-img">
                    <img src="/assets/imagens/logo-claro.png" alt=""/>
                </div>
                

                <div class="cabecalho-botoes">

                    
                     <Link to="/">Denúncie</Link>
                     <Link to="/TipoViolencia">Tipos de violência</Link>
                     <Link to=" ">Tipos de assédio</Link>
                     <Link to=" ">Mapa das Delegacia</Link>
                     <Link to=" ">Autoestima</Link>
                     <Link to=" ">Chat</Link>
                     <Link to=" ">Cadastro</Link>

                                                   
                </div>

            </div>

            <div class="texto-centro">
                Central de Atendimento à Mulher – <Link to="https://www.gov.br/pt-br/servicos/denunciar-e-buscar-ajuda-a-vitimas-de-violencia-contra-mulheres">Ligue 180 </Link> 
            </div>

            <div class="faixa-meio">
                Nunca mude por ninguém! Seja você, para você! Sempre!!!
            </div>

            <div class="faixa-baixo">
                Este trabalho é dedicado a todas as mulheres, em especial àquelas mulheres que são agredidas todos os dias e ás que não sobreviveram.
            </div>

        </div>
        
        <div class="tipo-de-violencia">

            <div class="faixa2-conteudo">

                <div class="faixa2-texto1">Tipos De Violência</div>

                <div class="faixa2-texto2">Há varios tipos de violência, fique atenta aos sinas!!!</div>

               <div class="botao-faixa2">
                <button class="faixa2-botao" >Tipos De Violência</button>
               </div>

            </div>

            <div class="faixa2-img">
                <img src="/assets/imagens/tipos-de-violencia.png" class="animate__animated animate__bounce" alt="" />
            </div>
            
        </div>

        <div class="autoestima">

            <div class="faixa3-image">
                <img class="img-faixa3" src="/assets/imagens/autoestima.png" alt=""/>
            </div>

            <div class="faixa3-conteudo">

                <div class="faixa3-texto1">AUTOESTIMA!</div>

                <div class="faixa3-texto2">Ame teu cabelo, teu jeito, a tua essência, VOCÊ É INCRIVEL!!!</div>

                <div class="faixa3-botao">
                    <button class="botao-faixa3">IR</button>
                </div>

            </div>

        </div>

        <div class="tipos-de-assedio">

            <div class="faixa4-conteudo">

                <div class="faixa4-texto1">Tipos de Assédio</div>

                <div class="faixa4-texto2">Não tenha medo, DENUNCIE!!!</div>

                <div class="faixa4-botao">
                <button class="botao-faixa4" >IR</button>
                </div>    

            </div>

            <div class="faixa4-image">
                <img src="/assets/imagens/tipos-de-assedio.png" alt=""/>
            </div>

        </div>

        <div class="pagina-mapa">

            <div class="faixa5-image">
                <img src="/assets/imagens/pg-inicio-denuncia.png" alt=""/>
            </div>

            <div class="faixa5-conteudo">

                <div class="faixa5-texto">
                    Mapa das delegacias mais proximas de você.
                </div>

                <div class="faixa5-botao">
                <button class="botao-faixa5">Ir ao Mapa</button>
                </div>

            </div>

        </div>

        <div class="pagina-chat">

            <div class="faixa6-conteudo">

                <div class="faixa6-texto">Momento de conversar e conhecer guerreiras como você!!!</div>

                <div class="faixa6-botao">
                    <button class="botao-faixa6">Ir ao Chat</button>
                </div>

            </div>

            <div class="faixa6-image">
                <img src="/assets/imagens/pg-inicio-chat.png" alt=""/>
            </div>

        </div>
        
        <div class="pagina-denuncia">

            <div class="faixa7-image">
                <img src="/assets/imagens/pg-inicio-denunciaF.png" alt=""/>
            </div>

            <div class="faixa7-conteudo">

                <div class="faixa7-texto1">Denuncie!!!</div>

                <div class="faixa7-texto2">Não tenha medo, você não está sozinha!!!</div>

                <div class="faixa7-botao">
                    <button class="botao-faixa7">Denuncie</button>
                </div>

            </div>

        </div>

        <div class="pagina-quem-somos">

            <div class="faixa8-conteudo">

                <div class="faixa8-texto1">QUEM SOMOS?</div>

                <div class="faixa8-texto2">Conheça mais um pouco sobre nós</div>

                <div class="faixa8-botao">
                    <button class="botao-faixa8">Saiba mais</button>
                </div>

            </div>

            <div class="faixa8-image">
                <img src="/assets/imagens/pg-inicio-quemsomos.png" alt=""/>
            </div>

        </div>


        </Container>
    
    )
}