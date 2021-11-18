import styled from 'styled-components'


const ChatButton = styled.button`
    font-weight: 700;

    color: #black;
    background: #gray;

    border: none;
    border-radius: 20px;

    padding: 2em 3em;
    margin: .3em;

    cursor: pointer;

    &:hover {
        background-color: #646E78;
    }
`

const ChatInput = styled.input`
    border: none;
    background: #FFFFFF;
    border-radius: 5px;
    
    outline: none;
    padding: .4em .5em;

    cursor: text;
`

const ChatTextArea = styled.textarea`
    border: none;
    background: #FFFFFF;
    border-radius: 5px;

    outline: none;
    padding: .0em .0em;

    cursor: text;

    height: 7em;
    width: 55em;
    
    margin: .5em 3em;
`

export { ChatButton, ChatInput, ChatTextArea }