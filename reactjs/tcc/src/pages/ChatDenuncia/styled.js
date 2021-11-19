import styled from 'styled-components';

const Container = styled.div`
.body {
    margin: 0px;
  }

  a{
      color: white;
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

  
  .faixa1{
      background-color: #445D75 ;
      height: 100%;
      display: flex;
      flex-direction: column;
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
      padding-right: 1em;
      padding-top: 0em;     
  }



  .texto{
    
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    text-align: center;
    color: #fff;
  }

.conteudo {
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
   
}

.chat {
    margin-top: 40px;
    flex-direction: row;
    justify-content: center;
    background: #B2BBC2;
    width: 90%;
    height: 40em;
    border-radius: 25px 25px 0px 0px;
    margin-left:6em;
    overflow-y: auto;
}
.chat::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #fff;
    }

    .chat::-webkit-scrollbar
    {
        width: 7px;
        background-color: #3E006F;
        border-radius: 10px;
    }

    .chat::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #CBCBCB;
    }

.policial1{
    padding-top: 5em;
   
    
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #black;
}

.user1{
    padding-top: 1em;
    margin-left: 2em;
}

.containerbalao{
    display: flex;
    flex-direction: row;
    
}

.balao1{

    background: #fff;
    
    font-size: 1em;
    line-height: 1.6em;  
    border-radius: 30px;
    width: 300px;
    height: auto;
    color: #black;
    padding: 20px;
    padding-top: 1em;
    position: relative;
    margin-top: 0em;
    margin-left: 2em;
}

.test{
    flex-direction: row;
    display: flex;
    margin-right: 45em;
    align-items: center;
    margin-bottom: 0em;
}

.test3 {
    flex-direction: row;
    display: flex;
    margin-right: 45em;
    align-items: center;
    margin-bottom: 0em;
    margin-top: 1em;
}

.test2 {
    flex-direction: column;
    display: flex;
    margin-right: 45em;
    align-items: center;
    margin-bottom: 0em;
   
}


.containerimg{
   display: flex;
    flex-direction: column;
    justify-content: center;
}

.policial2{
  
    
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #black;
}

.user2{
    padding-top: 1em;
    margin-left: 2em;
}

.balao2 {
    margin: 0 auto; 
    background: #fff;
    
    font-size: 1em;
    line-height: 1.6em;  
    border-radius: 30px;
    width: 300px;
    height: auto;
    color: #black;
    padding: 15px;
    position: relative;
    margin-top: 0em;
    margin-left: 2em;

}



.searchbox{
    width: 800px;
    height: 45px;
    background-color: white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 7px;
    margin-left: 10em;
     margin-top: 15em;
 }

.searchbox > i {
    font-size: 20px;
    color: #978888;

}

.searchbox > input {
    flex: 1;
    height: 40px;
    border: none;
    outline: none;
    font-size: 24px;
}

.enviar{
    padding-left: 30em;
    margin-top: 0em;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #000000;
}

.local{
    padding-left: 5.6em;
    margin-top: -2em;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #000000;
}

.localimg{
    margin-right: 4em;
    margin-top: 1em;
    
}

.chatt{
    
    margin-left: 5em;

}

.apagar{
    float: right;
}

.chat-message{
   
    margin: 0 auto; 
    background: #fff;
    
    font-size: 1em;
    line-height: 1.6em;  
    border-radius: 30px;
    width: 300px;
    height: auto;
    color: #000000;
    padding: 15px;
    position: relative;
    margin-top: 1em;
    margin-left: 8.5em;
}
.mensagem{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: .9em;
    margin: .0em 1.5em;
    margin-left: 6.7em;
    background-color: #B2BBC2;
    border-radius: 0px;
    width: 90%;
   
}

@media (max-width: 1024px) {
   
    .container, .cabecalho, .texto, .menu, .conteudo, .cabecalho-botoes, .chatt{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
       
        padding: 0px;
        margin: 0px;
        width: 100%;
    }

    .cabecalho{
        padding-top: 0em;
    }

    .conteudo, .chat, .policial1, .policia2, .user1, .user2, .balao1, .balao2, .text1, .text2, .searchbox, .enviar, .local, .localimg, .mensagem, .chat-message, .chatt{
        flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
           
            padding: 0px;
            margin: 0px;
            width: 100%;
        },
`
export {Container}