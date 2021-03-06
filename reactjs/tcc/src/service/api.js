import axios from 'axios'


const api = axios.create({
    baseURL: 'https://horadmudar.herokuapp.com/'
    
})

export default class Api {
  
   


    async listar () {
        let r = await api.get('/cadastro')
        return r.data
    }

    async inserir (nome, sobrenome, celular, email, senha ) {
        let r = await api.post('/cadastro', {nome, sobrenome, celular, email, senha })
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

  //Chat

    async removerMensagem(id) {
        let r = await api.delete('/Chat/' + id)
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


    //API CARACTERISTICAS
    async inserirCaracteristicas( ds_nome, bt_branco, nr_idade, ds_estado, ds_cidade, ds_bairro, ds_rua, nr_numero, nr_cep, ds_complemento, ds_ponto_de_ref, bt_pardo, bt_amarelo, bt_negro, bt_vermelho, bt_castanhos, bt_azuis, bt_verdes, bt_pretoOLHOS, bt_outroOLHOS, bt_liso, bt_ondulado, bt_cacheado, bt_crespo, bt_careca, bt_loiro, bt_ruivo, bt_castanhoescuro, bt_castanhoclaro, bt_pretoCABELO, bt_outroCABELO, bt_alto, bt_medio, bt_baixo, bt_obeso, bt_gordo, bt_magro, bt_outroESTATURA, bt_adolescente, bt_adulto, bt_idoso, bt_bone, bt_chapeu, bt_oculos, bt_brinco, bt_corrente, bt_outroACESSORIO ){
        let r = await api.post('/caracteristicas', { ds_nome, bt_branco, nr_idade, ds_estado, ds_cidade, ds_bairro, ds_rua, nr_numero, nr_cep, ds_complemento, ds_ponto_de_ref, bt_pardo, bt_amarelo, bt_negro, bt_vermelho, bt_castanhos, bt_azuis, bt_verdes, bt_pretoOLHOS, bt_outroOLHOS, bt_liso, bt_ondulado, bt_cacheado, bt_crespo, bt_careca, bt_loiro, bt_ruivo, bt_castanhoescuro, bt_castanhoclaro, bt_pretoCABELO, bt_outroCABELO, bt_alto, bt_medio, bt_baixo, bt_obeso, bt_gordo, bt_magro, bt_outroESTATURA, bt_adolescente, bt_adulto, bt_idoso, bt_bone, bt_chapeu, bt_oculos, bt_brinco, bt_corrente, bt_outroACESSORIO });
        return r.data;
    }

    }
    
  
