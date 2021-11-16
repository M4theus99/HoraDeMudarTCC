


 import {Container} from './styled';
 import Cabecalho from '../../componentes/comum/cabecalho';
 

 import { useState } from 'react';
 import { useRef } from 'react';

 import { ToastContainer, toast} from 'react-toastify';
 import Api from '../../service/api';
 import {useHistory } from 'react-router-dom';
 import LoadingBar from 'react-top-loading-bar';

 import 'react-toastify/dist/ReactToastify.css';


 const api = new Api()




 export default function Cadastro ()
 {
    const navigation = useHistory();
    const [Nome, setNome] = useState('');
    const [Sobrenome, setSobrenome] = useState('');
    const [Email, setEmail] = useState('');
    const [Celular, setCelular] = useState('');
    const [Senha, setSenha] = useState('');
    const [Confirmar] = useState(0);
    const loading = useRef();


    async function inserir () {
        loading.current.continuousStart();
        let r = await api.inserir(Nome, Sobrenome, Celular, Email, Senha, Confirmar );

      
        if (r.erro) {
         toast.error(`${r.erro}`)
         loading.current.complete();
       } else {
           alert("Oioiii lindo, funfou")
           navigation.push ('/Login');
       }
        
      


}

   

     return(
  <Container>
      <LoadingBar ref={loading}  color="#4CE6AA"/>
            <ToastContainer />

      <Cabecalho />



   <div class="conteudo">
      
      <div class="imagem1">
         <img src='/assets/imagens/pg-cadastro.png' alt=""/>  
    
   </div>

     <div className="barra"><img src='/assets/imagens/line 12.png' alt="" /></div> 

        <div class="cadastro">
           
           <div class="titulo">Cadastre-se</div>
          
         <br></br>

            <div class="indentificacao">
                <div class="nome">
                   <input type="text" name="" value={Nome} onChange={e => setNome(e.target.value)}  placeholder="Nome"></input>
                </div>

                <div class="sobrenome">
                    <input type="text" name="" value={Sobrenome} onChange={e => setSobrenome(e.target.value)}  placeholder="Sobrenome"></input>
               </div> 
            </div>    

           <div class="email">
                <input type="text" name="" value={Email} onChange={e => setEmail(e.target.value)}  placeholder="Email"></input>
            </div>
            <div class="celular">
                <input type="text" name="" value={Celular} onChange={e => setCelular(e.target.value)} placeholder="Celular"></input>
           </div>

             <div class="senhas">
                <div class="senha">
                    <input type="password" name=""  value={Senha} onChange={e => setSenha(e.target.value)}  placeholder="Senha"></input>
               </div>

                
            </div>

            <div class="entrar">
               <button  onClick={() => inserir()}>Entrar</button>
             

           </div>
     </div>

       
  </div>
  </Container>        

     )
 }
