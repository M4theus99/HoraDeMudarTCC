import styled from 'styled-components'


const Container =  styled.div`

background-color: #7b9b73;
height: 100vh;
display: flex;
flex-direction: column;
a{
    color: white;
}



.cabecalho{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}


.menu a {
  margin: 0em .5em;
  
}

.menu{
    display: flex;
    flex-direction: row;
    padding-right: 3em;    
    font-family: Roboto-medium; 
}


.conteudo{
    display: flex;
    flex-direction: row;
    background-color: #7b9b73;
    align-items: center;
    justify-content: center;
}

.conteudo-texto1{
    display: flex;
    flex-direction: column;
    font-family: Roboto;
}

.autoestima2{
    height: 40em;
    width: 40em;
}

.titulo{
  color: #ffffff ; 
  font-size: 5em;
  text-align: center;
  font-family: Roboto-medium;
  padding-left: 0.1em;
}

.imagem{
    margin-left: 2em;
    margin-top: 1em;
}

.subtitulo{
    color: #FBFFFD;
    font-size: 1.4em;
    text-align: center;
    margin-top: 2em;
    font-family: Roboto-medium;
    margin-right: 6em; 
    margin-left: 6em;
   

}

.faixa2{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  background-color: #fff;
}

.faixa2-texto1{
  color: #EB6060;
  font-size: 4em;
  font-family:Roboto-medium ;
  font-size: 3em;
  padding:0.2em;
  text-aling; center;
  margin-left: 3em;

}

.faixa2-img img {
  width: 655px;
}
.faixa2-img {
  position: relative;
  animation-name: imagemFx2;
  animation-duration: 7s ;    
  animation-iteration-count: infinite;
}
@keyframes imagemFx2{
  0%{top: 50px}
  50%{top: -80px}
  100%{top: 50px}

}

.faixa2-texto2{
  padding-top: 3em;
  font-family: Roboto-medium;
  font-size: 1.3em;
  margin-right: 5em;
  margin-left: 3em; 
  text-align: center;   
  
}

.faixa3{
  background-color: #ccc;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
}

.faixa3-titulo{
  color: #032537;
  font-size: 4em;
  text-align: center;
  font-family: Roboto-medium;
  margin-left: 1em;
}

.faixa3-texto2{
  font-size: 4em;
  font-family:Roboto-medium ;
  font-size: 1.2em;
  padding: 3em;
  text-aling; center;
  margin-left: 4em;
}


.faixa4{
  height: 100vh;
  background-color: #FDFDFD;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.faixa4-texto1{
  font-size: 4em;
  color: #373737;
  text-align: center;
  font-family: Roboto-medium;
}

.faixa4-texto2{
  font-size: 4em;
  font-family:Roboto-medium ;
  font-size: 1.3em;
  padding: 3em;
  margin-left: 5em;
  margin-right: 5em;

}

.faixa4-img {
  position: relative;
  animation-name: imagemFx2;
  animation-duration: 7s ;    
  animation-iteration-count: infinite;
}
@keyframes imagemFx2{
  0%{top: 50px}
  50%{top: -80px}
  100%{top: 50px}

}

.faixa5{
  background-color: #C2DCB6;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.faixa5-texto1{
  color: #663E3E;
  font-size: 4em;
  text-align: center;
  font-family: Roboto-medium;
}

.faixa5-texto2{
  font-size: 4em;
  font-family:Roboto-medium ;
  font-size: 1.3em;
  padding: 3em;
  margin-left: 6em;
  margin-right: 5em;
}

.faixa6{
  height: 100vh;
  display: flex;
  align-items: center;
  
}

.faixa6 img{
  width: 31em;
  height: 25em;
}

.faixa6-img{
  justify-content: center;
  margin-left: 4em;
}

.faixa6-texto{
  font-family:Roboto-medium ;
  font-size: 3em;
  padding: 3em;
  text-aling: center;
  
}

@media (max-width: 1024px) {

  .conteudo{
    flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
       
        padding: 0px;
        margin: 0px;
        width: 100%;
    
  }

  .faixa2{
    justify-content: center;
    align-items: center;
    text-align: center;
   
    padding: 0px;
    margin: 0px;
    width: 100%;
  }

  .faixa2-img img{
    height: 9em;
    whidth: 9em;
  }

}
   

`;
 export {Container}

