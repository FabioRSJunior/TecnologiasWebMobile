//import React from 'react';

import { Form, Container, Col, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

import Alerta from './Alertaa';

import TabelaClientes from './TabelaCLientes';

const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
}

const axios = require('axios');

const DeletaPostagem = () => {

    const [Id_cliente, setId_cliente] = useState(0)
    const handleId_cliente = (e) => setId_cliente(e.target.value)

    const [listaClientes, setListaClientes] =useState([
        //]);
                {
                    "id_postagem": 0,
                    "nome_empresa": "Nome_empresa_default",
                    "descricao_postagem": "Descricao_postagem_default",
                    "status_exibicao": "1",
                    "link_imagem": "https://user-images.githubusercontent.com/29241659/87479229-79442f00-c601-11ea-8ca6-f9a8070a17e5.png",
                    "link_contato": "https://chat.whatsapp.com/JHjNCMZfUWz0yYP2NpPvCL",
                    "telefone_contato": "34 0 0000 0000"
                }
        ]);


        // Pega os dados do BD
        const [Atualizaform, setAtualizaform] = useState(1)

        useEffect(() => {
            //const ChamaDados = () => {
            async function getListaClientes() {
                try {
                    const data = await axios.get('http://localhost:3000/api/clientes/');
                    console.log(data.data)
                    setListaClientes(data.data)
                }
                catch (error) {
                    alert("Ocorreu um erro")
                }
            }
            console.log("Carregando os itens mudando")
            getListaClientes()
            console.log(listaClientes)
            console.log("Fim do lista clientes")
            //}
    
            
        }
            // , [carregaVetor])
            , [Atualizaform])

            // Variaveis para retirar os dados 
            const [id_postagem, setid_postagem] = useState()
            const handleid_postagem = (e) => setid_postagem(e.target.value)

    const carregaCampos = (id_postagem) => {
         setid_postagem(id_postagem);
        setAlertaa(3);}
       

    // Função que deleta No BD 
    const removeCliente = () => {    
        console.log("Removendo o cliente!!!")
        axios.delete('http://localhost:3000/api/clientes/' + String(id_postagem), axiosConfig)
            .then((res) => {
                console.log("Resposta recebida: ", res);                                
                console.log("Cliente removido com Sucesso!!")
                console.log(setAtualizaform(Atualizaform+1))
                setAlertaa(0);
            })
            .catch((err) => {
                console.log("Problema ao remover o cliente: ", err);
                setAlertaa(1);
            })
        }
    

    const DeleteCLiente = () => {
        console.log(id_postagem)
        console.log(removeCliente)
        console.log("Cliente foi Removido !! Eu acho ")
    }

    const [Alertaa, setAlertaa] = useState(3) 

    return(
        <>
        <h1>Essa opção não é para um Usuario comum</h1>
        <h2>Delete sua postagem</h2>
        
        <Alerta status={Alertaa} />

        <h3>Selecione a Postagem que voce quer Excluir! </h3>
        <p></p>
                
        <form>        
            
            <div className="form-control mb-3">

                <label for="exampleInputname">ID postagem:</label>
                <input type="id_postagem" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp" 
                 placeholder="Selecione na tabela"
                 onChange={e=>handleid_postagem(e)}
                 value={id_postagem}
                 >
                 </input>
            </div>             
        </form>

        <br></br>
        <Button className='btn btn-danger btn-lg' style={{ float: 'center' }}
            onClick={removeCliente}>REMOVE CLIENTE</Button>
        <p></p>
            

        <div className="border border-secondary mb-3">
            <Col>                
                <TabelaClientes 
                clientes={listaClientes} 
                carregaCampos={carregaCampos}
                />
            </Col>
        </div>

        </>
    );
};



export default DeletaPostagem;