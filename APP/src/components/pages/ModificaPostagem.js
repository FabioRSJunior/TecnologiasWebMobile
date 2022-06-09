//import { Alert } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap';

import Alerta from './Alertaa';

// testes importar tabela 
import TabelaClientes from './TabelaCLientes';

// Postagens são mostradas com FORMULARIOS  
// SÃO MODFICADAS COMO VISIVEIS OU 
// NÃO PARA DEPOIS, SE SÃO VISIVEIS 
// SEREM CARREGADAS NO HOME 

const axios = require('axios')

const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
}

const ModificaPostagem = (props) => {

    const [listaClientes, setListaClientes] = useState([
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


    const [ClienteFragmento, setClienteFragmento] = useState([0]);
    const [Index, setIndex] = useState('1');
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


    //atualiza os formularios pós modificaçoes 
    

    //retorna a lista clientes 
    const botaolistacliente = () => {
        console.log('botão lista clientes:')
        console.log(listaClientes)
        console.log(listaClientes[Index]['nome'])
    }


        const PutCliente = () => {  
            console.log(listaClientes[1]['nome']);
        }
 
    // Caregando a Tabela. Parte II 


    const [id_postagem, setid_postagem] = useState()
    const [Nome_Empresa , setNome_Empresa] = useState()
    const [Descricao_Postagem , setDescricao_Postagem] = useState()
    const [Status_Exibicao , setStatus_Exibicao] = useState()
    const [Link_Imagem , setLink_Imagem] = useState()
    const [Link_Contato , setLink_Contato] = useState()
    const [Telefone_Contato , setTelefone_Contato] = useState()


    const handleid_postagem = (e) => setid_postagem(e.target.value) //cuidado n pode nn, só pra teste -> coloca ele sem input 
    const handleNome_Empresa = (e) => setNome_Empresa(e.target.value)
    const handleDescricao_Postagem = (e) => setDescricao_Postagem(e.target.value)
    const handleStatus_Exibicao = (e) => setStatus_Exibicao(e.target.value)
    const handleLink_Imagem = (e) => setLink_Imagem(e.target.value)
    const handleLink_Contato = (e) => setLink_Contato(e.target.value)
    const handleTelefone_Contato = (e) => setTelefone_Contato(e.target.value)        
    
    // Teste OK
    // const carregaCampos = (id_postagem) => {
    //     setid_postagem(id_postagem);}


    // Por algum motivo que so os reacts sabem... a ordem importa 
    const carregaCampos = (id_postagem, nome_empresa, descricao_postagem, status_exibicao, link_imagem, link_contato, telefone_contato) => {
            setid_postagem(id_postagem);
            setNome_Empresa(nome_empresa);
            setDescricao_Postagem(descricao_postagem);
            setStatus_Exibicao(status_exibicao);
            setLink_Imagem(link_imagem);
            setLink_Contato(link_contato);
            setTelefone_Contato(telefone_contato);
            setAlertaa(3);
        }
    

    // Iterando com objetos:  objeto[index]['nome'] => objeto[index].nome 
    // id_postagem não pode ser handle PQ vc não pode mudar ele
    // Se quiser, selecione ba barrinha

    const saveCliente = () => {
    // const saveCliente = (id, nome, endereco, celular) => {
        let clienteAlterado = {}
        
        clienteAlterado = {
            clienteid_postagem: id_postagem, 
            clienteNome_Empresa: Nome_Empresa, 
            clienteDescricao_Postagem: Descricao_Postagem, 
            clienteStatus_Exibicao: Status_Exibicao, 
            clienteLink_Imagem: Link_Imagem, 
            clienteLink_Contato: Link_Contato, 
            clienteTelefone_Contato: Telefone_Contato
                
        }
        //console.log(clienteData)
        console.log("cliente-Alterado")
        console.log(setAtualizaform(Atualizaform+1))

        axios.put('http://localhost:3000/api/clientes', clienteAlterado, axiosConfig)
            .then((res) => {
                console.log("Resposta recebida: ", res)
                setAlertaa(0);                                
            })
            .catch((err) => {
                console.log("Problema ao inserir o cliente: ", err);
                setAlertaa(1)
            })   
        }

        const [Alertaa, setAlertaa] = useState(3) 

    return (
        <container>

            <h2>Selecione Na tabela a Postagens que deseja Modificar</h2>

            <Alerta status={Alertaa} />

        <form>        

            <div className="mb-3">
            <div className="form-control">
                
                <label for="exampleInputname">ID postagem:</label>
                <input type="id_postagem" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp" 
                 placeholder="Nao Digite Nada Aqui"
                 onChange={e=>id_postagem(e)}
                 value={id_postagem}
                 >
                 </input>

                 <label for="exampleInputname">Nome da Empresa:</label>
                <input type="Nome Empresa" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp" 
                 placeholder="Nome da empresa"
                 onChange={e=>handleNome_Empresa(e)}
                 value={Nome_Empresa}
                 >
                 </input>

                <label for="exampleInputname">Descrição Postagem</label>
                <input type="Nome Empresa" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp" 
                 placeholder="Descrição da postagem"
                 onChange={e=>handleDescricao_Postagem(e)}
                 value={Descricao_Postagem}
                 >
                 </input>

                 <label for="exampleInputname">Status Exibição</label>
                <input type="Nome Empresa" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp" 
                 placeholder="Status exibição"
                 onChange={e=>handleStatus_Exibicao(e)}
                 value={Status_Exibicao}
                 >
                 </input>

                <label for="exampleInputname">Link Imagem</label>
                <input type="Nome Empresa" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp" 
                 placeholder="Link da imagem"
                 onChange={e=>handleLink_Imagem(e)}
                 value={Link_Imagem}
                 >
                 </input>

                 <label for="exampleInputname">Link Contato</label>
                <input type="Nome Empresa" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp" 
                 placeholder="Link de contato"
                 onChange={e=>handleLink_Contato(e)}
                 value={Link_Contato}
                 >
                 </input>

                 <label for="exampleInputname">Telefone_Contato</label>
                <input type="Nome Empresa" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp" 
                 placeholder="Telefone de Contato"
                 onChange={e=>handleTelefone_Contato(e)}
                 value={Telefone_Contato}
                 >
                 </input>
             </div>
            </div>
        </form>

        <Button className='btn btn-dark btn-lg' style={{ float: 'center' }}
            onClick={saveCliente}>Salve Cliente</Button>
            <p></p>
            
            <div className="border border-secondary mb-3">
            <Col>                
                <TabelaClientes 
                clientes={listaClientes} 
                carregaCampos={carregaCampos}
                />
            </Col>
            </div>
            <br></br>
        
        </container>
    ); }

    export default ModificaPostagem;
