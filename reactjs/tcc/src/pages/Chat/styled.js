


import styled from 'styled-components';

const Container = styled.div`
  display: column;
  flex-direction: column;


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
    color: white;
    
}

.texto_chat {
  font-family: Roboto-Medium;
  font-size: 30px;
  color: #ffffff;
  text-align: center;
  width: 700px;
  margin-left: 3.5em;
}

.faixa1 {
  display: flex;
  flex-direction: column;
  background: #8fb482;
  height: 100vh;
}

.imagem1 img {
  margin-left: 2em;
  width: 480px;
  height: 550px;
  margin-top: 4em;
}

.imagem2 img {
  height: 600px;
  width: 650px;
  margin-top: 7em;
}

.titulo {
  width: 350px;
  margin-left: 4.5em;
  font-family: Roboto-Medium;
  font-size: 70px;
  font-weight: 500;
  color: #ffffff;
  padding: 30px;
  margin-top: 1.5em;
}

.introducao {
  display: flex;
  flex-direction: row;
  justify-content: center;
}


.apresentacao {
  display: flex;
  flex-direction: column;
}

.faixa2 {
  display: flex;
  flex-direction: row;
  background: #b8cace;
  height: 100vh;
}

.compartilhe {
  color: #205922;
  width: 350px;
  margin-left: 1em;
  margin-top: 3em;
  font-family: Roboto-Medium;
  font-size: 70px;
  font-weight: 500;
  padding: 30px;
}

.explicacao {
  width: 570px;
  font-family: Roboto-Medium;
  font-size: 30px;
  color: #000000;
}

.conteudo {
  margin-top: 3em;
}

.chat1 {
  background: #f3d7fd;
  margin: 3em;
  margin-right: 5em;
  margin-left: 5em;
  border-radius: 25px;
}

.faixa3 {
  display: flex;
  flex-direction: column;
  background: #9a9a9a;
  height: 100vh;
}

.depoimento1 {
  display: flex;
  flex-direction: column;
  margin: 2em;
  margin-left: 11.5em;
  margin-right: 15em;
}

.mensagem1 {
  background: #fcefef;
  width: 700px;
  font-family: Roboto-Medium;
  border-radius:10px;
}

.usuario1 {
  display: flex;
  flex-direction: row;
  margin-left: 3em;
}

.reagir_msg1 {
  display: flex;
  flex-direction: row;
  margin-left: 5em;
}

.curtidas1 {
  display: flex;
  flex-direction: row;
  margin-left: 1em;
}

.coracao1 img {
  width: 17px;
  height: 18px;
  margin-left: 10px;
}

.quantidade1 {
  margin-left: 5px;
}


.depoimento3 {
  display: flex;
  flex-direction: column;
  margin-left: 10em;
  margin-right: 15em;
  padding: 1em;
}

.mensagem3 {
  background: #fcefef;
  font-family: Roboto-Medium;
  border-radius:10px;
  width: 700px;
}

.usuario3 {
  display: flex;
  flex-direction: row;
  margin-left: 5em;
}

.reagir_msg3 {
  display: flex;
  flex-direction: row;
  margin-left: 5em;
}

.curtidas3 {
  display: flex;
  flex-direction: row;
  margin-left: 10px;
}

.coracao3 img {
  width: 17px;
  height: 18px;
  margin-right: 15px;
}

.comentario {
  display: flex;
  flex-direction: row;
  margin-left: 5em;
  padding: 1em;
}

.publicar {
  color: #207be5;
}

.digitar {
  position: absolute;
  border-color: transparent;
 
}

.reponder1{
    margin-left: 30em;;
}

.reponder3{
    margin-left: 30em;;
}

input {
  border-radius:25px;
  width:50em;
  border-right:1em;
  border-color:transparent;
  
}
`;

export {Container}  