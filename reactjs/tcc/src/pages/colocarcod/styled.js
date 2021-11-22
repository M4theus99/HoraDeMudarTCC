import styled from "styled-components";

const Container= styled.div`

background-color: #7DA074;
height: 100vh;

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
    color: white;
}

.cabecalho-botoes{
    margin-top: 4em;
    margin-right: 2em;
}


.conteudo{
    height: 30em;
    width: 53em;
    background-color: white;
    margin-left: 14em;
    margin-top: 6em;
    border-radius: 2em;
    display: flex;
    flex-direction: column;
}

.titulo{
    margin-left: 18%;
    
}

.caixa2{
    margin-top: 1em;
}

.campos{
    display: flex;
    flex-direction: column;
   padding-top: 4em;
   padding-left: 2em;
}

.texto{
    padding-top: 4%;
    font-size: 3em;
    padding-left: 1em;
}

.campos input{
    width: 26em;
    border-radius: 1em;
    height: 3em;
    background-color: #C4C4C4;
    border: none;
}


.botoes{
    padding-top: 9em;
    padding-left: 20em;
    display: flex;
    flex-direction: row;
}

button{
    background-color: #C4C4C4;
    width: 15em;
    height: 3em;
    border-radius: 1em;
    font-size: 1em;
}

.botoes button{
    border: none;
}

.botao1{
margin-right: 1em;
}

hr{
    background-color: black;
    width: 35em;
    height: .2em;
    padding-right: 6em;
    
}

.linha{
    padding-top: 1em;
}

.botao2 :hover{
    background-color: #57833a;
    transition: 0.8s;
}

.botao1 :hover{
    background-color: #57833a;
    transition: 0.8s;
}

.cabecalho-img img {
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