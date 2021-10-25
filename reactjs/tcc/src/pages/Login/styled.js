import styled from 'styled-components'

const Container =  styled.div`
.container {
    background: #7DA074;
    padding: 1em 3.5em;
    height:  100%;
    
}



.imagem {
    width: 8em;
    height: 8em;
    margin-top: -1em  right;
    color: white;
 

}

.faixa1{
    margin-top: 1em ;
}

.menu {
    font-family: Roboto-Medium;
    font-size: 15px;
    margin-top: -2em; 
    margin-left: 1em;
    height: -30px;
    display: flex;
    align-items: center;

}

.menu a {
    margin: .5em;
}

.cabecalho {
    display: flex;
    flex-direction: row;
    margin-left: 1em;
    justify-content: space-between;
    align-items: center;
}

.Login {
    display: flex;
    flex-direction: column;
    background: #FDFDFD;
    border-radius: 20px;
    height: 590,30px;
    width: 504px;
    padding-top: 7px;

        
}
.conteudo {
    display: flex;
    flex-direction: row;
}



.titulo{
    text-align: center;
    font-family: Roboto-Medium;
    font-size: 40px;
    margin-top: 1em;
   
}



.indentificacao {
    display: flex;
    flex-direction: row;
    margin: 20px;
}



.email{
    margin: 20px;
    display: flex;
    flex-direction: column;
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



input {
    background: #C4C4C4;
    border-radius: 15px;
    border-color:transparent;
    height: 2em;
    padding-left: 5px;
}

button {
    margin-left: 1em; 
    border-radius: 15px;
    background: #81857F;
    color:#FFFFFF;
    width: 103px;
    height: 29px;
    font-family: Roboto-Medium;
    font-size: 20px;
    margin-top: 2em;
    border-color: transparent;
    display: flex;
    flex-direction: row;

  

}

.entrar :hover{
    background-color: #57833a;
    transition: 0.1s;
}

.Cadastro :hover{
    background-color: #57833a;
    transition: 0.1s;
}


`;
export {Container}