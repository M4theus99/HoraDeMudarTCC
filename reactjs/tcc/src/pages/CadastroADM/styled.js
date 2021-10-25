
import styled from 'styled-components';

const container = styled.div`
body {
    margin: 0;
}

.container {
    background: #7DA074;
    padding: 3.5em;
}

.logo {
    width: 150px;
    height: 90px;
    margin-right: 30em;
    margin-top: -6em;
}

.menu {
    font-family: Roboto-Medium;
    font-size: 14px;
    margin-top: -6em;
    margin-left: 1em;
    height: -30px;
}

.cabecalho {
    display: flex;
    flex-direction: row;
    margin-left: 1em;
    margin-top: 40px;
    justify-content: center;
}

.cadastro {
    display: flex;
    flex-direction: column;
    background: #FDFDFD;
    border-radius: 20px;
    height: 590,30px;
    width: 504px;
    
}
.conteudo {
    display: flex;
    flex-direction: row;
}

.imagem img {
    width: 746px;
    height: 515px;
    margin-left: 6em;
}

.titulo{
    margin: 20px;
    font-family: Roboto-Medium;
    font-size: 40px;
    margin-top: 1em;
    margin-left: 2.5em;
}

.indentificacao {
    display: flex;
    flex-direction: row;
    margin: 20px;
}

.nome {
    margin: 10px;
}

.sobrenome {
    margin: 10px;
    background-color: #FFFFFF;
}

.email{
    margin: 20px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
}

.celular {
    margin: 20px;
    margin-left: 30px;
}

.senhas {
    display: flex;
    flex-direction: row;
    margin: 20px;
}

.senha {
    margin: 10px;
    margin-right: 10px;
}

.confirmar-senha {
    margin: 10px;
}

input {
    background: #C4C4C4;
    border-radius: 15px;
}

button {
    margin-left: 15em;
    border-radius: 15px;
    background: #81857F;
    color:#FFFFFF;
    width: 103px;
    height: 29px;
    font-family: Roboto-Medium;
    font-size: 20px;
    margin-top: 2em;
}

`;

export {container}