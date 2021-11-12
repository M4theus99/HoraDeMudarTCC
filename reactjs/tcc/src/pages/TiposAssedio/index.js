import {Container} from './styled';
 import Cabecalho from '../../componentes/comum/cabecalho';
 
 export default function Cadastro (){
   return (
     <Container>
          <Cabecalho/>

          <div class="faixa1">
        <div class="cabecalho-inicio">
          <div class="cabecalho-img">
            <img src="../../src/images/logo-claro.png" alt="" />
          </div>

          <div class="cabecalho-botoes">
            <a href="../index.html">Início</a>
            <a href=" ">Denúncie</a>
            <a href=" ">Tipos de assédio</a>
            <a href=" ">Mapa das Delegacia</a>
            <a href=" ">Autoestima</a>
            <a href=" ">Chat</a>
            <a href=" ">Cadastro</a>
          </div>
        </div>

        <div class="conteudo-faixa1">
          <div class="faixa1-textos">
            <div class="faixa1-titulo">
              Tipos de <br />
              Assédio
            </div>

            <div class="faixa1-txt">
              O assédio pode ser configurado como condutas abusivas exaradas por
              meio de palavras, <br />
              comportamentos, atos, gestos, escritos que podem trazer danos à
              personalidade, à dignidade ou à integridade física ou psíquica de
              uma pessoa, <br />
              pôr em perigo o seu emprego ou degradar o ambiente de trabalho.
            </div>
          </div>

          <div class="faixa1-img">
            <img class="img-tpdeviolencia" src="../../src/images/pg-rec22.png" alt="" />
          </div>
        </div>
      </div>

      <div class="faixa-2">
        <div class="img-faixa2">
          <img class="faixa2-img" src="/assets/images/pg-gri.png" alt=""/>
        </div>

        <div class="conteudo-faixa2">
          <div class="texto1-faixa2">
            Assédio <br />
            Moral
          </div>

          <div class="texto2-faixa2">
            O assédio moral ocorre com a exposição de uma pessoa a situações de
            constrangimento, humilhação e perseguição de forma contínua e
            prolongada. É um dos tipos de assédio mais comum.
          </div>
        </div>
      </div>

      <div class="faixa3">
        <div class="faixa3-conteudo">
          <div class="faixa3-texto1">
            Agressõesa <br />
            Psicológica
          </div>

          <div class="faixa3-texto2">
            O assédio psicológico é uma violência emocional. Pode ser praticado
            por colegas de trabalho do mesmo nível hierárquico ou por
            superiores, e os danos causados estão associados a transtornos
            psicológicos de médio a longo prazo. A vítima tem a autoestima e o
            desempenho comprometidos.
          </div>
        </div>

        <div class="faixa3-img">
          <img class="img-faixa3" src="../../src/images/pg-agressao.png" alt="" />
        </div>
      </div>

      <div class="faixa4">
        <div class="faixa4-img">
          <img class="img-faixa4" src="../../src/images/pg-se.png" alt=""/>
        </div>

        <div class="faixa4-conteudo">
          <div class="faixa4-texto1">
            Assédio <br />
            Sexual
          </div>

          <div class="faixa4-texto2">
            Refere-se ao constrangimento a alguém com a finalidade de obter
            favorecimento ou vantagem sexual. Os atos ou convites indecorosos
            ocorrem no espaço laboral de forma verbal, não verbal e física,
            perturbando e constrangendo o outro, criando um ambiente
            intimidativo, desestabilizador e afetando a sua dignidade.
          </div>
        </div>
      </div>

      <div class="faixa5">
        <div class="faixa5-conteudo">
          <div class="faixa5-texto1">
            Assédio <br />
            Virtual
          </div>

          <div class="faixa5-texto2">
            Também chamado de cyberbullying, a prática ocorre com o uso de
            tecnologias de informação e comunicação a partir de comportamentos
            hostis e repetitivos. O comum é que a prática envolva um indivíduo
            ou um grupo com o objetivo de prejudicar o outro.
          </div>

          <div class="faixa5">
            <div class="faixa5-img">
              <img class="img-faixa5" src="../../src/images/pg-assedio.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    

     </Container>
   
   )
 }
 

