// import {link} from 'react-router-dom';
import { Container } from './styled';
import Cabecalho from '../../componentes/comum/cabecalho';
import { Link, useHistory } from 'react-router-dom';
import "animate.css/animate.min.css";
import Cookies from 'cookies-js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useRef, useState } from 'react';

import LoadingBar from 'react-top-loading-bar'


import Api from '../../service/api';
const api = new Api()






export default function LoginADM() {

    const [email_empresa, setEmailEmpresa] = useState('');
    const [senha, setSenha] = useState('');


    const navigation = useHistory();
    const loading = useRef(null);


    const LoginADM = async () => {
        loading.current.continuousStart();

        console.log('oiii')

        let r = await api.loginADM(email_empresa, senha);
        console.log(r);

        if (r.erro) {
            toast.error(`${r.erro}`)
            loading.current.complete();
        } else {
            Cookies.set('usuario-logado', JSON.stringify(r));
            navigation.push('/AutorizaçaoMensagem');
        }

    }

    return (
        <Container>
            <LoadingBar ref={loading}  color="#4CE6AA" />
            <ToastContainer />
            <div class="site">

                <Cabecalho />

                <div class="conteudo">

                    <div class="imagem1">
                        <img class="imagem2" src="/assets/imagens/cadstroadm2-removebg-preview 1" alt="" />
                    </div>




                    <div class="bloco-interacao">

                        <div class="bloco">

                            <div class="titulo">

                                <div class="texto">Login ADM</div>


                            </div>

                            <div class="linha">
                                <hr />
                            </div>
                            <div class="campos">

                                <div class="caixa-1">
                                    <input type="text" name="" value={email_empresa} onChange={e => setEmailEmpresa(e.target.value)} placeholder="Email Empresa" />
                                </div>

                                <div class="caixa2">
                                    <input type="password" name="" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha" />
                                </div>


                            </div>

                            <div class="esqueceu-senha">
                                <Link to="/EsqueceuSenha">Esqueci a Senha</Link>
                            </div>

                            <div class="botoes">


                                <div class="botao1">
                                    <button onClick={() => navigation.push('/CadastroADM')}> Cadastro</button>
                                </div>

                                <div class="botao2">
                                    <button onClick={LoginADM} style={{ fontSize: '1.0em' }}> Entrar </button>

                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Container>
    )
}

