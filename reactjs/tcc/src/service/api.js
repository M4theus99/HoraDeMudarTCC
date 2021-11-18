import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:3030/'
    
})

export default class Api {
  
   


    async listar () {
        let r = await api.get('/cadastro')
        return r.data
    }

    async inserir (nome, sobrenome, celular, email, senha, confirmar ) {
        let r = await api.post('/cadastro', {nome, sobrenome, celular, email, senha, confirmar })
        return r.data;
    }

    async login (email, senha) {
        let r = await api.post('/login', {email: email, senha: senha});
        return r.data
    }

    async loginADM (email_empresa, senha) {
        let r = await api.post('/login_adm', {email_empresa: email_empresa, senha: senha});
        return r.data
    }


    
    async listarcadastroadm () {
        let r = await api.get('/cadastro_adm')
        return r.data
    }

    async inserircadastroadm (nome, sobrenome, celular, email_empresa, senha ) {
        let r = await api.post('/cadastro_adm', {nome, sobrenome, celular,email_empresa, senha })
        return r.data;
    }

  
       


    // API CHAT DENUNCIA
    async listarMensagensDENUN() {
        let r = await api.get(`/chatdenu`);
        return r.data;
    }
    async inserirMensagemDENUN(texto) {
        let conversa = {
            texto: texto
        }
        let r = await api.post(`/chatdenu`, conversa);
        return r.data;
     }
     async removerMensagemDENUN(){
        let r = await api.delete(`/chatdenu`);
        return r.data;
    }


    
    async inserirMensagem(mensagem) {
        let chat = {
            

            mensagem: mensagem
        }
        let r = await api.post(`/Chat`, chat);
        return r.data;
    }

    async listarMensagensChat() { 
        let r = await api.get(`/Chat`);
        return r.data;
    }

    }
    
  
