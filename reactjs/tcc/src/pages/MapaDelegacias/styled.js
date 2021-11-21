import styled from 'styled-components';

const Container = styled.div`


.site{
    margin: 0px;
}

body {
    margin: 0px;
    
}

.a {
    color: cornsilk;
}

.container {
    background-color: #7DA074;
    width: 100%;
    height: 100%;
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
    color: white;
}

.text{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 62px;
    line-height: 73px;
    text-align: center;
    flex-direction: column;
    color: #FDF7F7;
}

.research{
    padding-right: 5em;
    margin-left: 33em;
    padding-bottom: 5em;
}

.searchbox{
   width: 600px;
   height: 45px;
   background-color: white;
   border-radius: 50px;
   display: flex;
   align-items: center;
   padding: 7px;
   margin-left: 23em;
    margin-top: 3em;
    margin-bottom: 3em;
}

.searchbox > i {
    font-size: 20px;
    color: white;

}

.searchbox > input {
    flex: 1;
    height: 40px;
    border: none;
    outline: none;
    font-size: 24px;
    margin-top: 23em;
}


.conteudo{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 100px;
}
.mapa{
    margin-left: 21em;
    margin-bottom: 1em;
  
}

.conteudo2{
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 100px;
}

.conteudoimg{
  
}
.mulher{
    padding-top: 10em;
    margin-right: 0em;
}

.textos{
    flex-direction: column;
    margin-top: 8em;
}

.text {
    font-family: Roboto-Medium;
    font-size: 3em;
    margin-top: 1em;
}

.text2{
    margin-left: 2.9em;
    padding-bottom: 0.5em;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 3em;
    line-height: 65px;
    color: #090808;
    margin-top: 2em;
}

.text3{
    margin-left: 0em;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5em;
    line-height: 25px;
    text-align: center;
    margin-top: 0em;
    color: #0A344A;
}

.text4{
    margin-left: 0em;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 1.5em;
    line-height: 40px;
    text-align: center;
    margin-top: 2em;
    color: #0A344A;
}

.config{
    align-items: center;
}
.btn2{
    width: 200px;
    height: 50px;
    border: none;
    color:white;
    background-color:#7DA074;
    border-radius:50px;
    box-shadow: inset 0 0 0 0 #3A4F35;
    transition: ease-out 0.3s;
    font-size: 2rem;
    outline: none;
    margin-left: 8em;
    margin-top: 1em;
}

.btn2:hover {
    box-shadow: inset 300px 0 0 0 #3A4F35;
    cursor: pointer;
    color: white;
}

@media (max-width: 1024px) {
   
    .container, .conteudo, .cabecalho, .text, .mulher, .mapa, .logo, .searchbox, .cabecalho-botoes, .searchbox{
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

   

    .conteudo2, .mulher, .textos, .text, .text2, .text3, .text4, .btn2, .mapa{
    flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
       
        padding: 0px;
        margin: 0px;
        width: 100%;
    }

    .mulher{
        display: none;
    }
`;
export {Container}