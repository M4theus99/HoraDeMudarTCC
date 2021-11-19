
import { Link } from 'react-router-dom'
import {Container} from './styled';


export default function Características () 
{
    return (

        <Container>

            <div class="cabecalho-inicio">

            <div class="cabecalho-img">
                <Link to="/LoginADM">
                <img src="/assets/imagens/logo-claro.png" alt=""/>
                </Link>
            </div>


            <div class="cabecalho-botoes">

                
                <Link to="/Denuncie">Denúncie</Link>
                <Link to="/TipoViolencia">Tipos de violência</Link>
                <Link to="/TipoAssedio">Tipos de assédio</Link>
                <Link to="/MapaDelegacias">Mapa das Delegacia</Link>
                <Link to="/AutoEstima">Autoestima</Link>
                <Link to="/Chat">Chat</Link>
                <Link to="/Cadastro">Cadastro</Link>
                <Link to="/Login">Login</Link>

                                              
            </div>

            </div>

            
        </Container>
        
    )
} 