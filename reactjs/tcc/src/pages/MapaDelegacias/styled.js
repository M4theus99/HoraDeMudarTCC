import styled from 'styled-components';

const container = styled.div`
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
    margin: 0px;
}

.cabecalho{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.logo{
    padding-right: 62em;
}

.encaminha{
    padding-top: 2em;
    padding-left: 3.4em;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: center;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}



.text{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 62px;
    line-height: 73px;
    text-align: center;
    color: #FDF7F7;
}

.research{
    padding-right: 5em;
    margin-left: -8em;
    padding-top: 0em;
}

.searchbox{
   width: 600px;
   height: 45px;
   background-color: white;
   border-radius: 50px;
   display: flex;
   align-items: center;
   padding: 7px;
   margin-left: 37em;
    margin-top: 3em;
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
}

.mapa{
   padding-left: 28em;
    padding-top: 1em;
}

.conteudo2{
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 150px;
    
}

.mulher{
   
    padding-top: 07em;
}

.text2{
    margin-left: 6.5em;
    padding-top: 1em;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 65px;
    text-align: center;

    color: #090808;
}

.text3{
    margin-left: -21em;
    padding-top: 7em;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 25px;
    text-align: center;

    color: #0A344A;
}

.text4{
    padding-top: 8em;
    margin-left: -20em;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 59px;
    text-align: center;
    
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
    margin-left: -22em;
    margin-top: 17em;
}

.btn2:hover {
    box-shadow: inset 300px 0 0 0 #3A4F35;
    cursor: pointer;
    color: white;
}
`;
export {Container}