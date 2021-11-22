
import { Link } from 'react-router-dom'
import {Container} from './styled';


export default function Características () 
{
    return (

        <Container>
           
            <div class="faixa1">
                <div class="cabecalho-inicio">
                    <div class="cabecalho-img">
                        <Link to="/LoginADM">
                            <img src="/assets/imagens/logo-claro.png" alt=""/>
                        </Link>
                    </div>


                    <div class="cabecalho-botoes">
                        <Link to="/Denúncia">Denúncia</Link>
                        <Link to="/TipoViolencia">Tipos de violência</Link>
                        <Link to="/TipoAssedio">Tipos de assédio</Link>
                        <Link to="/MapaDelegacias">Mapa das Delegacia</Link>
                        <Link to="/AutoEstima">Autoestima</Link>
                        <Link to="/Chat">Chat</Link>
                        <Link to="/Cadastro">Cadastro</Link>
                        <Link to="/Login">Login</Link>                        
                    </div>
               </div>
            
               <div class="Titulo"> Características </div>


               <div class="caracteristicas">
                   <div class="identificacao">
                       <div class="nome">
                           <label> Nome: <input type="text" name=""></input> </label>
                       </div>

                       <div class="idade">
                           <label> Idade: <input type="text" name=""></input> </label>
                       </div>
                    </div>

                    <div class="formulario1">
                       <div class="p1">
                           <div class="pele">
                               <div class="pele1">Tom da Pele</div>
                               <label> <input type="radio" name=""></input> Branco </label>
                               <label> <input type="radio" name=""></input> Pardo </label>
                               <label> <input type="radio" name=""></input> Amarelo </label>
                               <label> <input type="radio" name=""></input> Negro </label>
                               <label> Outro: <input type="text" name=""></input> </label>
                            </div>

                            <div class="olhos">
                               <div class="olhos1">Cor dos Olhos</div>
                               <label> <input type="radio" name=""></input> Castanhos </label>
                               <label> <input type="radio" name=""></input> Azuis </label>
                               <label> <input type="radio" name=""></input> Verdes </label>
                               <label> <input type="radio" name=""></input> Pretos </label>
                               <label> Outro: <input type="text" name=""></input> </label>
                            </div>

                            <div class="cabelo">
                               <div class="cabelo1">Cabelo</div>
                               <label> <input type="radio" name=""></input> Liso </label>
                               <label> <input type="radio" name=""></input> Ondulado </label>
                               <label> <input type="radio" name=""></input> Cacheado </label>
                               <label> <input type="radio" name=""></input> Crespo </label>
                               <label> <input type="radio" name=""></input> Careca </label>
                               <label> Outro: <input type="text" name=""></input> </label>
                            </div>

                            <div class="corCabelo">
                               <div class="corCabelo1">Cor do Cabelo</div>
                               <label> <input type="radio" name=""></input> Loiro </label>
                               <label> <input type="radio" name=""></input> Ruivo </label>
                               <label> <input type="radio" name=""></input> Castanho Escuro </label>
                               <label> <input type="radio" name=""></input> Castanho Claro </label>
                               <label> <input type="radio" name=""></input> Preto </label>
                               <label> Outro: <input type="text" name=""></input> </label>
                            </div>
                    </div>

                        <div class="p2">
                            <div class="estatura">
                                <div class="estatura1">Estatura</div>
                                <label> <input type="radio" name=""></input> Alto </label>
                                <label> <input type="radio" name=""></input> Médio </label>
                                <label> <input type="radio" name=""></input> Baixo </label>
                                <label> Outro: <input type="text" name=""></input> </label>
                            </div>

                            <div class="fisica">
                                <div class="fisica1">Estatura Física</div>
                                <label> <input type="radio" name=""></input> Obeso </label>
                                <label> <input type="radio" name=""></input> Gordo </label>
                                <label> <input type="radio" name=""></input> Magro </label>
                                <label> Outro: <input type="text" name=""></input> </label>
                            </div>

                            <div class="faixaEtaria">
                                <div class="faixaEtaria1">Faixa Etária</div>
                                <label> <input type="radio" name=""></input> Adolescente </label>
                                <label> <input type="radio" name=""></input> Adulto </label>
                                <label> <input type="radio" name=""></input> Idoso </label> 
                                <label> Outro: <input type="text" name=""></input> </label>
                            </div>

                            <div class="acessorios">
                                <div class="acessorios1">Acessórios</div>
                                <label> <input type="radio" name=""></input> Boné </label>
                                <label> <input type="radio" name=""></input> Chapéu </label>
                                <label> <input type="radio" name=""></input> Óculos </label>
                                <label> <input type="radio" name=""></input> Brinco </label>
                                <label> <input type="radio" name=""></input> Corrente </label>
                                <label> Outro: <input type="text" name=""></input> </label>
                            </div>
                        </div>
                    
                </div>
            </div>
            </div>

            <div class="faixa2">
                <div class="localizacao"> Localização </div>

                <div class="formulario2">
                <div class="estado">
                    <label> Estado: <input type="text" name=""></input> </label>
                </div>

                <div class="cidade">
                    <label> Cidade: <input type="text" name=""></input> </label>
                </div>

                <div class="bairro">
                    <label> Bairro: <input type="text" name=""></input> </label>
                </div>

                <div class="rua">
                    <label> Rua: <input type="text" name=""></input> </label>
                </div>

                <div class="numero">
                    <label> Número: <input type="text" name=""></input> </label>
                </div>

                <div class="cep">
                    <label> Cep: <input type="text" name=""></input> </label>
                </div>

                <div class="complemento">
                    <label> Complemento: <input type="text" name=""></input> </label>
                </div>

                <div class="referencia">
                    <label> Ponto de Referencia: <input type="text" name=""></input> </label>
                </div>

                
            </div>

            <div class="botao">
                <button>Enviar</button>
            </div>
            
            </div>

        </Container>
        
    )
} 