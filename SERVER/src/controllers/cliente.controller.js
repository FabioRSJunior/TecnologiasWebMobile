/**
 * CRUD da tabela de clientes
 */

const db = require('../config/database');

// mudei para o Postagem 
exports.createCliente = async (req, res) => {
    const {
        clienteNome_Empresa,
        clienteDescricao_Postagem,
        clienteStatus_Exibicao,
        clienteLink_Imagem,
        clienteLink_Contato,
        clienteTelefone_Contato
        } = req.body;
    console.log(req.body)
    console.log(clienteNome_Empresa)
    const response = await db.query(
        'INSERT INTO clientes (Nome_Empresa, Descricao_Postagem, Status_Exibicao, Link_Imagem, Link_Contato, Telefone_Contato) VALUES ($1, $2, $3, $4, $5, $6)',
        [clienteNome_Empresa, clienteDescricao_Postagem,
        clienteStatus_Exibicao, clienteLink_Imagem, clienteLink_Contato, clienteTelefone_Contato],
    );

    res.status(201).send({
        message: 'Cliente inserido com sucesso',
        body: {
            cliente: {clienteNome_Empresa, clienteDescricao_Postagem,
                clienteStatus_Exibicao, clienteLink_Imagem, clienteLink_Contato, clienteTelefone_Contato},
        },
    });
};


// Modifiquei para postagem
exports.listAllClientes =  async (req, res) => {
    const response = await db.query(
        'SELECT * FROM clientes ORDER BY Id_Postagem ASC',
    );
    res.status(200).send(response.rows);
};



// Modifiquei para o Postagem [OK]
exports.findClienteById = async (req, res) => {
    const clienteId_postagem = parseInt(req.params.id);
    const response = await db.query(
        'SELECT * FROM clientes WHERE Id_Postagem = $1',
        [clienteId_postagem]
    );
    res.status(200).send(response.rows);
};


exports.updateCliente = async (req, res) => {
    const clienteId_postagem = parseInt(req.body.clienteid_postagem);
    console.log("cliente id ***** :")
    console.log(clienteId_postagem)
    console.log("**** cliente id ***** :")

    const { clienteNome_Empresa,
            clienteDescricao_Postagem,
            clienteStatus_Exibicao,
            clienteLink_Imagem,
            clienteLink_Contato,
            clienteTelefone_Contato} = req.body;

    //clienteId_postagem = parseInt(clienteId_postagem);
    console.log(req.body)
    console.log("clienteId_postagem:")
    console.log(clienteId_postagem)

    const response = await db.query(

        'UPDATE clientes SET Nome_Empresa = $2, Descricao_Postagem = $3, Status_Exibicao = $4, Link_Imagem = $5, Link_Contato = $6, Telefone_Contato = $7 WHERE Id_Postagem = $1',
        [clienteId_postagem, clienteNome_Empresa, clienteDescricao_Postagem, clienteStatus_Exibicao, clienteLink_Imagem, clienteLink_Contato, clienteTelefone_Contato],);
    
    console.log(response)

    if(response.rowCount > 0) {
        res.status(201).send({
            message: 'Cliente alterado com sucesso!',
            body: {
                cliente: {clienteId_postagem, clienteNome_Empresa, clienteDescricao_Postagem, clienteStatus_Exibicao,
                    clienteLink_Imagem, clienteLink_Contato, clienteTelefone_Contato},
            },
        });  
    }
    else {
        res.status(201).send({
            message: 'Cliente não alterado',
            body: {
                cliente: {clienteId_postagem, clienteNome_Empresa, clienteDescricao_Postagem, clienteStatus_Exibicao,
                    clienteLink_Imagem, clienteLink_Contato, clienteTelefone_Contato},
            },
        });    
    }
};

// exports.updateCliente = async (req, res) => {
//     const clienteID = parseInt(req.body.clienteID);
//     const { clienteNome, 
//             clienteEndereco, 
//             clienteTelefone} = req.body;
//     //clienteID = parseInt(clienteID);
//     console.log(req.body)
//     console.log(clienteNome)
//     const response = await db.query(
//         'UPDATE clientes SET nome = $2, endereco = $3, telefone = $4 WHERE clienteId = $1',
//         [clienteID, clienteNome, clienteEndereco, clienteTelefone],
//     );
    
//     console.log(response)
//     if(response.rowCount > 0) {
//         res.status(201).send({
//             message: 'Cliente alterado com sucesso!',
//             body: {
//                 cliente: {clienteID, clienteNome, clienteTelefone, clienteEndereco},
//             },
//         });  
//     }
//     else {
//         res.status(201).send({
//             message: 'Cliente não alterado',
//             body: {
//                 cliente: {clienteID, clienteNome, clienteTelefone, clienteEndereco},
//             },
//         });    
//     }
// };

// exports.removeClienteById = async (req, res) => {
//     const clienteID = parseInt(req.params.id);
//     console.log(clienteID);

//     const response = await db.query(
//         'DELETE FROM clientes WHERE clienteId = $1',
//         [clienteID],
//     );
    
//     console.log(response)
//     if(response.rowCount > 0) {
//         res.status(201).send({
//             message: 'Cliente removido com sucesso!',
//             body: {
//                 cliente: {clienteID},
//             },
//         });  
//     }
//     else {
//         res.status(201).send({
//             message: 'Cliente não removido',
//             body: {
//                 cliente: {clienteID},
//             },
//         });    
//     } 
// }


// Mudei para o Postagem []
exports.removeClienteById = async (req, res) => {
    const clienteID = parseInt(req.params.id);
    console.log(clienteID);

    const response = await db.query(
        'DELETE FROM clientes WHERE Id_Postagem = $1',
        [clienteID],
    );
    
    console.log(response)
    if(response.rowCount > 0) {
        res.status(201).send({
            message: 'Cliente removido com sucesso!',
            body: {
                cliente: {clienteID},
            },
        });  
    }
    else {
        res.status(201).send({
            message: 'Cliente não removido',
            body: {
                cliente: {clienteID},
            },
        });    
    } 
}