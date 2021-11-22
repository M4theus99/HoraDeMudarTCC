
import styled from 'styled-components';

const Container = styled.div`

height: 100vh;

body {
    margin: 0;
}

& {
    background-color: #7DA074;
    padding: 3.5em;
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


.logo {
    width: 150px;
    height: 90px;
    margin-right: 30em;
    margin-top: -6em;
}

.conteudo {
    background: #FDFDFD;
    border-radius: 20px;
    width: 657.89px;
    height: 391.77px;
    margin-left: 15em;
}

.titulo {
    font-family: Roboto-Medium;
    font-size: 2.5em;
    margin-top: 1em;
    padding: 1em;
    margin-left: 3.5em;
}

input {
    background: #C4C4C4;
    border-radius: 15px;
    width: 320.95px;
    height: 31.03px;
    margin-left: 2em;
}

.nova-senha {
    padding: 1em;
}

.confirmar-senha {
    padding: 1em;
}

.botoes {
    margin-left: 21em;
    display: flex;
    flex-direction: row;
}

.alterar {
    margin: 0.5em;
}

.cancelar {
    margin: 0.5em;
}

button {
    border-radius: 15px;
    background: #C4C4C4;
    color: #000000;
    width: 132.71px;
    height: 33.94px;
    font-family: Roboto-Medium;
    font-size: 1.5em;
    margin-top: 2.5em;
    boder-color: transp
}

`

export {Container}
