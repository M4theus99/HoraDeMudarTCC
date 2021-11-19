import db from './db.js';
import express from 'express'
import cors from 'cors'
import crypto from 'crypto-js'
import enviarEmail from './enviarEmail.js'


const app = express();
app.use(cors());
app.use(express.json());

app.post('/cadastro', async (req, resp) => {
    try {
        let usuParam = req.body;

        let u = await db.infob_hdm_cadastro.findOne({ where: { nm_HDM_email: usuParam.email } });
        if (u != null)
            return resp.send({ erro: 'Usuário já existe!' });

        if (usuParam.nome == '')
            return resp.send({ erro: 'Nome é obrigatório' })

        if (usuParam.sobrenome == '')
            return resp.send({ erro: 'Sobrenome é obrigatório' })

        if (usuParam.celular == '')
            return resp.send({ erro: 'Celular é obrigatório' })

        if (usuParam.email == '')
            return resp.send({ erro: 'Email é obrigatório' })

        if (usuParam.senha == '')
            return resp.send({ erro: 'Senha é obrigatório' })

        
            




        let r = await db.infob_hdm_cadastro.create({
            nm_HDM_nome: usuParam.nome,
            nm_HDM_sobrenome: usuParam.sobrenome,
            nr_HDM_celular: usuParam.celular,
            nm_HDM_email: usuParam.email,
            nm_HDM_confirmar: usuParam.confirmar,
            nm_HDM_senha: crypto.SHA256(usuParam.senha).toString(crypto.enc.Base64)

        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.get('/cadastro', async (req, resp) => {
    try {
        let usuarios = await db.infob_hdm_cadastro.findAll();
        resp.send(usuarios);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})



app.post('/login', async (req, resp) => {
    try {
        const nome = req.body.email;
        const senha = req.body.senha;

        const cryptoSenha = crypto.SHA256(senha).toString(crypto.enc.Base64)

        let r = await db.infob_hdm_cadastro.findOne(
            {
                where: {
                    nm_HDM_email: nome,
                    nm_HDM_senha: cryptoSenha
                },
                raw: true
            })

        console.log(r);

        if (r == null)
            return resp.send({ erro: 'Credenciais inválidas!' });

        resp.sendStatus(200);
    } catch (e) {
        console.log(e);
        resp.send({ erro: 'Ocorreu um erro ao realizar o login.' })
    }
})

app.get('/login', async (req, resp) => {
    try {
        let login = await db.infob_hdm_login.findAll();
        resp.send(login);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})


app.post('/login_adm', async (req, resp) => {
    try {
        const email_empresa = req.body.email_empresa;
        const senha = req.body.senha;

        const cryptoSenha = crypto.SHA256(senha).toString(crypto.enc.Base64)

        let r = await db.infob_hdm_cadastro_adm.findOne(
            {
                where: {
                    nm_HDM_email_empresa: email_empresa,
                    nm_HDM_senha: cryptoSenha
                },
                raw: true
            })

        console.log(r);

        if (r == null)
            return resp.send({ erro: 'Credenciais inválidas!' });

        resp.sendStatus(200);
    } catch (e) {
        console.log(e);
        resp.send({ erro: 'Ocorreu um erro ao realizar o login.' })
    }
})

app.get('/login_adm', async (req, resp) => {
    try {
        let login_adm = await db.infob_hdm_login_adm.findAll();
        resp.send(login_adm);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.post('/cadastro_adm', async (req, resp) => {
    try {
        let usuParam = req.body;

        let u = await db.infob_hdm_cadastro_adm.findOne({ where: { nm_HDM_email_empresa: usuParam.email_empresa } });
        if (u != null)
            return resp.send({ erro: 'Usuário já existe!' });

        if (usuParam.nome == '')
            return resp.send({ erro: 'Nome é obrigatório' })

        if (usuParam.sobrenome == '')
            return resp.send({ erro: 'Sobrenome é obrigatório' })

        if (usuParam.celular == '')
            return resp.send({ erro: 'Celular é obrigatório' })

        if (usuParam.email_empresa == '')
            return resp.send({ erro: 'Email é obrigatório' })

        if (usuParam.senha == '')
            return resp.send({ erro: 'Senha é obrigatório' })




        let r = await db.infob_hdm_cadastro_adm.create({
            nm_HDM_nome: usuParam.nome,
            nm_HDM_sobrenome: usuParam.sobrenome,
            nr_HDM_celular: usuParam.celular,
            nm_HDM_email_empresa: usuParam.email_empresa,
            nm_HDM_senha: crypto.SHA256(usuParam.senha).toString(crypto.enc.Base64)

        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.post('/esqueciASenha', async(req, resp) => {
    const user = await db.infob_hdm_cadastro.findOne({
        where: {
            ds_email: req.body.email
        }
    });

    if(!user) {
        return resp.send({ erro: 'E-mail Inválido'});
    }
    let code = getRandomIntereger(1000, 9999);
    await db.infob_hdm_cadastro.update({
        ds_codigo_rec: code

    }, {
        where: {id_HDM_cadastro: user.id_HDM_cadastro}
    })
    enviarEmail(user.nm_HDM_email, 'Recuperação de E-mail', `
        <h3> Recuperação de Senha </h3>
        <p> Você solicitou a recuperação de sua senha no site Destiny. </p>
        <p> Entre com o código ${code} para prosseguir com a recuperação.
    `)
        resp.send({ status: 'ok'})
})




function getRandomIntereger(min, max){
    return Math.floor(Math.random() * (max - min) + min );
}



app.post('/validarCodigo', async (req, resp) => {
    const user = await db.infob_hdm_cadastro.findOne({
        where: {
            nm_HDM_email: req.body.email
        }
    });
    if(!user) {
        resp.send( {status: 'erro', mensagem: 'Email Inválido'});
    }
    if(user.ds_codigo_rec !== req.body.codigo) {
        resp.send({ status: 'erro', mensagem: 'código inválido'})
    }
    resp.send({ status: 'ok', mensagem: 'Código Validado'});
})




app.put('/resetSenha', async (req, resp) => {
    const user = await db.infob_hdm_cadastro.findOne({
        where: {
            nm_HDM_email: req.body.email
        }
    });
    if(!user) {
        resp.send( {status: 'erro', mensagem: 'Email Inválido'});
    }

    let r = await db.infoa_dtn_tb_cliente.update({
        nm_HDM_senha: req.body.novaSenha}, {where: {id_HDM_cadastro: user.id_HDM_cadastro}} )
        
    resp.send({ status: 'ok', mensagem: 'A senha foi alterada'})
    
})
    









app.get('/cadastro_adm', async (req, resp) => {
    try {
        let cadastro_adm = await db.infob_hdm_cadastro_adm.findAll();
        resp.send(cadastro_adm);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})







app.post('/esqueciASenha', async (req, resp) =>{
    const usuarios = await db.infob_hdm_usuario.findOne({
        where:{
            nm_HDM_email: req.body.email
        }
    });

    if (!usuarios) {
            resp.send({status: 'Erro', mensagem: 'E-mail inválido.'});
        }
    
        let codigo = getRandomInteger (1000, 9999);
        await db.infob_hdm_usuario.update({
            ds_HDM_cogidoRec: codigo
         }, {
             where: {id_HDM_usuario: usuarios.id_HDM_usuario}
         })
            enviarEmail(usuarios.nm_HDM_email, 'Recuperação De Senha', `
            <h3> Recuperação de senha </h3>
            <p> Sua recuperação de senha da sua conta foi atendida. </p> 
            <p> insira esse código ${codigo} para recuper sua conta
            
            `) 
            resp.send({ status: 'Código Enviado'});
        })



// app.post('/validarCodigo', async (req, resp) =>{

// } )


// app.put('/resetSenha', async (req, resp) =>{

// } )







function getRandomInteger(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}



//Api Chat

app.post('/Chat', async (req, resp) => {
    try {
        let chat = req.body;
    
        if (!chat.mensagem || chat.mensagem.replace(/\n/g, '') == '')
            return resp.send({ erro: 'Mensagem é obrigatória!' });

        let mensagem = {
            ds_HDM_mensagem: chat.mensagem,
            dt_HDM_data: new Date()
        }

        let r = await db.infob_hdm_chat.create(mensagem);
        resp.send(r);
        
    } catch (e) {
        resp.send('Deu erro');
        console.log(e.toString());
    }


});


        app.get('/Chat', async(req, resp) =>{
try{
        let chat = await db.infob_hdm_chat.findAll()
        resp.send(chat)
    } catch (e){
        resp.send(e.toString());
    
        }
    });

    app.delete('/Chat', async (req, resp) => {
        try {
            let r = await db.infob_hdm_chat.destroy({ truncate: true })
            resp.sendStatus(200);
        } catch (e) {
            resp.send({ erro: e.toString() });
        }
    })



//API CHAT DENUNCIAS

        app.post('/chatdenu', async (req, resp) => {
            try{
                let chatt = req.body;
                let enviarMensagem = await db.infob_hdm_chat_denuncias.create({ ds_HDM_texto: chatt.texto, ds_HDM_localizacao_atual: chatt.textto });
                resp.send(enviarMensagem)
                
            }
            catch (e){
                resp.send(e.toString);
            }
        });

        app.get('/chatdenu', async(req, resp) =>{
try{
        let chat = await db.infob_hdm_chat_denuncias.findAll()
        resp.send(chat)
    } catch (e){
        resp.send(e.toString());
    
        }
    });

    app.delete('/chatdenu', async (req, resp) => {
        try{
            let r = await db.infob_hdm_chat_denuncias.destroy({ truncate: true })

            resp.sendStatus(200);
    
        } catch (e){
            resp.send({ erro: e.toString() });
        }
    });
    

app.listen(process.env.PORT, () => console.log(`Server up at port ${process.env.PORT}`))

