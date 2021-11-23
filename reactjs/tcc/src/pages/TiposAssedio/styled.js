import styled from 'styled-components';

const Container= styled.div`


a{
    color: white;
}


.faixa1{
    background-color: #9A9A9A;
    height: 100vh;
}
.cabecalho-inicio{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    
}

.cabecalho-img{
    margin-top: 1em;
    margin-left: 2em;
}

.cabecalho-botoes a {
    margin: 0em .4em;
    
}

.cabecalho-botoes{
    margin-top: 4em;
    margin-right: 2em;
}


.conteudo-faixa1{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 1em;
}

.faixa1-titulo{
    text-align: center;
    color: white;
    font-size: 4em;
    font-family: Roboto-medium;

}

.faixa1-textos{
    padding-right: 5em;
}

.faixa1-txt{
    text-align: center;
    color: white;
    padding-top: 4em;
    width: 40em;
    font-family: Roboto-medium;
   
}

.cabecalho-botoes a {
    margin: 0em .5em;
    
}


.cabecalho-botoes{
    margin-top: 3em;
}


.img-tpdeviolencia{
    height: 30em;
    width: 30em;
        
    
}


.faixa-2{
    background-color: #DAE0DD;
    display: flex;
    flex-direction: row;
    height: 100vh;
    align-items: center;
    justify-content: center;
}

.faixa2-img{
    height: 30em;
    width: 30em;
}

.texto1-faixa2{
    text-align: center;
    color: #105F67;
    font-size: 4em;
    font-family: Roboto-medium;
    font-style: italic;
    width: 4em;
    padding-left: 3em;
}

.texto2-faixa2{
    text-align: left;
    font-size: 1em;
    padding-top: 5em;
    width: 40em;
    text-align: center;
    font-family: Roboto-medium;
    
}

.faixa3{
    display: flex;
    flex-direction: row;
    height: 100vh;
    align-items: center;
    background-color: #EFEFEF;
    justify-content: center;
}

.faixa3-texto1{
    text-align: center;
    color: #632B50;
    font-size: 4em;
    font-family: Roboto-medium;
 
}

.faixa3-texto2{
    text-align: left;
    padding-top: 5em;
    width: 50em;
    text-align: center;
    font-family: Roboto-medium;

}

.img-faixa3{
    height: 28em;
    width: 28em;
}

.faixa4{
    background-color: #DAE0DD;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    justify-content: center;
}

.img-faixa4{
    height: 30em;
    width: 30em;
}

.faixa4-texto1{
    color: #392457;
    text-align: center;
    font-size: 4em;
    font-family: Roboto-medium;
   
}

.faixa4-texto2{
    padding-top: 5em;
    width: 40em;
    text-align: center;
    font-family: Roboto-medium;

}


.faixa5{
    background-color: #EFEFEF;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    justify-content: center;
}

.faixa5-conteudo{
    align-items: center;
}

.faixa5-texto1{
    color: #0E34EE;
    font-size: 4em;
    text-align: center;
     font-family: Roboto-medium;
 
}

.faixa5-texto2{
    padding-top: 5em;
    width: 40em;
    text-align: center;
    font-family: Roboto-medium;
  
}

.img-faixa5{
    height: 40em;
    width: 40em;
}


.faixa1-img img {
    position: relative;
    animation: animar 3s infinite;
}

.img-faixa2 img {
    position: relative;
    animation: animar 3s infinite;
}

.faixa3-img img {
    position: relative;
    animation: animar 3s infinite;
}

.faixa4-img img {
    position: relative;
    animation: animar 3s infinite;
}

.faixa5-img img {
    position: relative;
    animation: animar 3s infinite;
}


@keyframes animar {
    0% {
        top: -10px;
    }
    50% {
        top: 10px;
    }
    100% {
        top: -10px; 
    }
}






`;

export {Container}