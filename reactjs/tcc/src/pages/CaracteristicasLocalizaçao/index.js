
import { Link } from 'react-router-dom'
import {Container} from './styled';
import Api from '../../service/api'
import { useState , useEffect, useRef, ReactDOM } from 'react';
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';

const api = new Api();

export default function Características () {

const [bt_branco, setBranco] = useState(Boolean);
const [bt_pardo, setPardo] = useState(Boolean);
const [ bt_amarelo, setAmarelo] = useState(Boolean);
const [ bt_negro, setNegro] = useState(Boolean);
const [ bt_vermelho, setVermelho] = useState(Boolean);
const [ bt_castanhos, setCastanhos] = useState(Boolean);
const [ bt_azuis, setAzuis] = useState(Boolean);
const [ bt_verdes, setVerdes] = useState(Boolean);
const [ bt_pretoOLHOS, setPretoOLHOS] = useState(Boolean);
const [ bt_outroOLHOS, setOutroOLHOS] = useState('');
const [ bt_liso, setLiso] = useState(Boolean);
const [ bt_ondulado, setOndulado] = useState(Boolean);
const [ bt_cacheado, setCacheado] = useState(Boolean);
const [ bt_crespo, setCrespo] = useState(Boolean);
const [ bt_careca, setCareca] = useState(Boolean);
const [ bt_loiro, setLoiro]  = useState(Boolean);
const [ bt_ruivo, setRuivo] = useState(Boolean);
const [ bt_castanhoescuro, setCastanhoESCURO] = useState(Boolean);
const [ bt_castanhoclaro, setCastanhoCLARO] = useState(Boolean);
const [ bt_pretoCABELO, setPretoCABELO] = useState(Boolean);
const [ bt_outroCABELO, setOutroCABELO] = useState('');
const [ bt_alto, setAlto] = useState(Boolean);
const [ bt_medio, setMedio] = useState(Boolean);
const [ bt_baixo, setBaixo] = useState(Boolean);
const [ bt_obeso, setObeso] = useState(Boolean);
const [ bt_gordo, setGordo] = useState(Boolean);
const [ bt_magro, setMagro] = useState(Boolean);
const [ bt_outroESTATURA, setOutroESTATURA] = useState('');
const [ bt_adolescente, setAdolescente] = useState(Boolean);
const [ bt_adulto, setAdulto] = useState(Boolean);
const [ bt_idoso, setIdoso] = useState(Boolean);
const [ bt_bone, setBone] = useState(Boolean);
const [ bt_chapeu, setChapeu] = useState(Boolean);
const [ bt_oculos, setOculos] = useState(Boolean);
const [ bt_brinco, setBrinco] = useState(Boolean);
const [ bt_corrente, setCorrente] = useState(Boolean);
const [ bt_outroACESSORIO, setOutroACESSORIO] = useState('');
const [ ds_nome, setNome] = useState('');
const [ nr_numero, setNumero]= useState('');
const [ nr_idade, setIdade]= useState('');
const [ ds_estado, setEstado]= useState('');
const [ ds_cidade, setCidade]= useState('');
const [ ds_bairro, setBairro]= useState('');
const [ ds_rua, setRua]= useState('');
const [ nr_cep, setCep]= useState('');
const [ ds_complemento, setComplemento]= useState('');
const [ ds_ponto_de_ref, setPONTODEREF]= useState('');
const loading = useRef(null);

const validarResposta = (resp) => {
    if (!resp.erro)
        return Boolean;
    alert("erro")
    return ;
}

async function inserirCaracteristicas(){
    loading.current.continuousStart();
    let r = await api.inserirCaracteristicas(ds_nome, bt_branco, nr_idade, ds_estado, ds_cidade, ds_bairro, ds_rua, nr_numero, nr_cep, ds_complemento, ds_ponto_de_ref, bt_pardo, bt_amarelo, bt_negro, bt_vermelho, bt_castanhos, bt_azuis, bt_verdes, bt_pretoOLHOS, bt_outroOLHOS, bt_liso, bt_ondulado, bt_cacheado, bt_crespo, bt_careca, bt_loiro, bt_ruivo, bt_castanhoescuro, bt_castanhoclaro, bt_pretoCABELO, bt_outroCABELO, bt_alto, bt_medio, bt_baixo, bt_obeso, bt_gordo, bt_magro, bt_outroESTATURA, bt_adolescente, bt_adulto, bt_idoso, bt_bone, bt_chapeu, bt_oculos, bt_brinco, bt_corrente, bt_outroACESSORIO);
    
    if(ds_complemento === '')
    return toast.dark("O campo complemento precisa ser preenchido!");

    if(nr_cep === '')
    return toast.dark("O campo CEP precisa ser preenchido!");

    if(ds_rua === '')
    return toast.dark("O campo rua precisa ser preenchido!");

    if(ds_bairro=== '')
    return toast.dark("O campo bairro precisa ser preenchido!");

    if(ds_cidade === '')
    return toast.dark("O campo cidade precisa ser preenchido!");

    if(ds_estado === '')
    return toast.dark("O campo estado precisa ser preenchido!");

    if(ds_nome === '')
    return toast.dark("O campo nome precisa ser preenchido!");

    if(nr_idade === '')
    return toast.dark("O campo idade precisa ser preenchido!");

    if(nr_numero === '')
    return toast.dark("O campo número precisa ser preenchido!");
    
    if (!validarResposta(r)) 
    
    return;
    toast.dark('Características da Denúncia Enviada!');
    loading.current.complete();

    
}


    return (

        <Container>
           <ToastContainer/>
           <LoadingBar color="red" ref={loading} />
            <div class="faixa1">
                <div class="cabecalho-inicio">
                    <div class="cabecalho-img">
                        <Link to="/LoginADM">
                            <img src="/assets/imagens/logo-claro.png" alt=""/>
                        </Link>
                    </div>


                    <div class="cabecalho-botoes">
                        <Link to="/">início</Link>
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
                           <label> Nome: <input type="text" value={ds_nome} onChange={e => setNome(e.target.value) }  /> </label>
                       </div>

                       <div class="idade">
                           <label> Idade: <input type="text" value={nr_idade} onChange={e => setIdade(e.target.value) }  /> </label>
                       </div>
                    </div>

                    <div class="formulario1">
                       <div class="p1">
                           <div class="pele">
                               <div class="pele1">Tom da Pele</div>
                               <label> <input type="radio" value={bt_branco} onChange={e => setBranco(true) } /> Branco </label>
                               <label> <input type="radio" value={bt_pardo} onChange={e => setPardo(true) } />  Pardo </label>
                               <label> <input type="radio" value={bt_amarelo} onChange={e => setAmarelo(true) } /> Amarelo </label>
                               <label> <input type="radio" value={bt_negro} onChange={e => setNegro(true) } /> Negro </label>
                               <label> <input type="radio" value={bt_vermelho} onChange={e => setVermelho(true) } /> Vermelho </label>
                              
                            </div>

                            <div class="olhos">
                               <div class="olhos1">Cor dos Olhos</div>
                               <label> <input type="radio" value={bt_castanhos} onChange={e => setCastanhos(true) } /> Castanhos </label>
                               <label> <input type="radio" value={bt_azuis} onChange={e => setAzuis(true) } /> Azuis </label>
                               <label> <input type="radio" value={bt_verdes} onChange={e => setVerdes(true) } /> Verdes </label>
                               <label> <input type="radio" value={bt_pretoOLHOS} onChange={e => setPretoOLHOS(true) } /> Pretos </label>
                               <label> Outro: <input type="text" value={bt_outroOLHOS} onChange={e => setOutroOLHOS(e.target.value) }  /> </label>
                            </div>

                            <div class="cabelo">
                               <div class="cabelo1">Cabelo</div>
                               <label> <input type="radio" value={bt_liso} onChange={e => setLiso(true) } />Liso </label>
                               <label> <input type="radio" value={bt_ondulado} onChange={e => setOndulado(true) } /> Ondulado </label>
                               <label> <input type="radio" value={bt_cacheado} onChange={e => setCacheado(true) } /> Cacheado </label>
                               <label> <input type="radio" value={bt_crespo} onChange={e => setCrespo(true) } /> Crespo </label>
                               <label> <input type="radio" value={bt_careca} onChange={e => setCareca(true) } /> Careca </label>
                               
                            </div>

                            <div class="corCabelo">
                               <div class="corCabelo1">Cor do Cabelo</div>
                               <label> <input type="radio" value={bt_loiro} onChange={e => setLoiro(true) } /> Loiro </label>
                               <label> <input type="radio" value={bt_ruivo} onChange={e => setRuivo(true) } /> Ruivo </label>
                               <label> <input type="radio" value={bt_castanhoescuro} onChange={e => setCastanhoESCURO(true) } />Castanho Escuro </label>
                               <label> <input type="radio" value={bt_castanhoclaro} onChange={e => setCastanhoCLARO(true) } /> Castanho Claro </label>
                               <label> <input type="radio" value={bt_pretoCABELO} onChange={e => setPretoCABELO(true) } /> Preto </label>
                               <label> Outro: <input type="text" value={bt_outroCABELO} onChange={e => setOutroCABELO(e.target.value) }  /> </label>
                            </div>
                    </div>

                        <div class="p2">
                            <div class="estatura">
                                <div class="estatura1">Estatura</div>
                                <label> <input type="radio" value={bt_alto} onChange={e => setAlto(true) } /> Alto </label>
                                <label> <input type="radio" value={bt_medio} onChange={e => setMedio(true) } /> Médio </label>
                                <label> <input type="radio" value={bt_baixo} onChange={e => setBaixo(true) } /> Baixo </label>
                            </div>

                            <div class="fisica">
                                <div class="fisica1">Estatura Física</div>
                                <label> <input type="radio" value={bt_obeso} onChange={e => setObeso(true) } /> Obeso </label>
                                <label> <input type="radio" value={bt_gordo} onChange={e => setGordo(true) } /> Gordo </label>
                                <label> <input type="radio" value={bt_magro} onChange={e => setMagro(true) } /> Magro </label>
                                <label> Outro: <input type="text" value={bt_outroESTATURA} onChange={e => setOutroESTATURA(e.target.value) }  /> </label>
                            </div>

                            <div class="faixaEtaria">
                                <div class="faixaEtaria1">Faixa Etária</div>
                                <label> <input type="radio" value={bt_adolescente} onChange={e => setAdolescente(true) } /> Adolescente </label>
                                <label> <input type="radio" value={bt_adulto} onChange={e => setAdulto(true) } /> Adulto </label>
                                <label> <input type="radio" value={bt_idoso} onChange={e => setIdoso(true) } /> Idoso </label> 
                                
                               
                            </div>

                            <div class="acessorios">
                                <div class="acessorios1">Acessórios</div>
                                <label> <input type="radio" value={bt_bone} onChange={e => setBone(true) } /> Boné </label>
                                <label> <input type="radio" value={bt_chapeu} onChange={e => setChapeu(true) } /> Chapéu </label>
                                <label> <input type="radio" value={bt_oculos} onChange={e => setOculos(true) } /> Óculos </label>
                                <label> <input type="radio" value={bt_brinco} onChange={e => setBrinco(true) } /> Brinco </label>
                                <label> <input type="radio" value={bt_corrente} onChange={e => setCorrente(true) } /> Corrente </label>
                                <label> Outro: <input type="text" value={bt_outroACESSORIO} onChange={e => setOutroACESSORIO(e.target.value) }  /> </label>
                            </div>
                        </div>
                    
                </div>
            </div>
            </div>

            <div class="faixa2">
                <div class="localizacao"> Localização </div>

                <div class="formulario2">
                <div class="estado">
                    <label> Estado: <input type="text" value={ds_estado} onChange={e => setEstado(e.target.value) }  /> </label>
                </div>

                <div class="cidade">
                    <label> Cidade: <input type="text" value={ds_cidade} onChange={e => setCidade(e.target.value) }  /> </label>
                </div>

                <div class="bairro">
                    <label> Bairro: <input type="text" value={ds_bairro} onChange={e => setBairro(e.target.value) }  /> </label>
                </div>

                <div class="rua">
                    <label> Rua: <input type="text" value={ds_rua} onChange={e => setRua(e.target.value) }  /> </label>
                </div>

                <div class="numero">
                    <label> Número: <input type="text" value={nr_numero} onChange={e => setNumero(e.target.value) }  /> </label>
                </div>

                <div class="cep">
                    <label> Cep: <input type="text" value={nr_cep} onChange={e => setCep(e.target.value) }  /> </label>
                </div>

                <div class="complemento">
                    <label> Complemento: <input type="text" value={ds_complemento} onChange={e => setComplemento(e.target.value) }  /> </label>
                </div>

                <div class="referencia">
                    <label> Ponto de Referencia: <input type="text" value={ds_ponto_de_ref} onChange={e => setPONTODEREF(e.target.value) }  /> </label>
                </div>

                
            </div>

            <div class="botao">
                <button onClick= {inserirCaracteristicas}>Enviar</button>
            </div>
            
            </div>

        </Container>
        
    )
} 