//import React from 'react';
//import { Card, button } from 'react-bootstrap'
//import { Form, Container, Col, Button } from 'react-bootstrap';

//teste importando cards 
import React, { useState, useEffect } from 'react';
import Cardes from './Cardes';



// Configuração de conexão 
const axios = require('axios')

const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
}

//export default Testes;
const Home = () => {

// function Testes(props) {
// consigo chamar todos os Atributos da tabela, em forma de uma Array 

    const [ListaClientes, setListaClientes] = useState([
//]);
        {
            "id_postagem": 0,
            "nome_empresa": "Cadastre uma Empresa!!",
            "descricao_postagem": "Não temos um produto no momento",
            "status_exibicao": "1",
            "link_imagem": "https://github.com/FabioRSJunior/TecnologiasWebMobile/blob/main/Imagens/Algod%C3%A3o%20doce.jpg?raw=true",
            "link_contato": "https://chat.whatsapp.com/JHjNCMZfUWz0yYP2NpPvCL",
            "telefone_contato": "34 0 0000-0000"
        }
]);

const [ListaClientess, setListaClientess] = useState([
    {
        "id_postagem": 0,
        "nome_empresa": "Cadastre uma Empresa!!",
        "descricao_postagem": "Não temos um produto no momento",
        "status_exibicao": "1",
        "link_imagem": "https://github.com/FabioRSJunior/TecnologiasWebMobile/blob/main/Imagens/Algod%C3%A3o%20doce.jpg?raw=true",
        "link_contato": "https://chat.whatsapp.com/JHjNCMZfUWz0yYP2NpPvCL",
        "telefone_contato": "34 0 0000-0000"
    }
]);

    const [Atualizaform, setAtualizaform] = useState(0);
    
    useEffect(() => {
        // Não deixa a lista clientes iniciar vazia, nunca 
        ChamaDados();// Corre e pega a lista de clientes do 
    }, [])

    //10 vezes funciona... Acho que um wait funcionaria tambem. NÃO ESTÁ MUITO BOM NÃO 
    useEffect(() => { 
        if  ( ListaClientess.length > 1){
         filteredUsersfunc();
         GeraNumeros();
        }
    }, [Atualizaform]) //Monitora uma variavel que é modificada pelo chamadados() 

    // Cascata de atualização; [1] Chama dados pega os dados 
    //                         [2] Cria as listas 
    //                         [3] filtra e exibe os posts 

    // Carrega os dados do BD -> coloca no listaClientes

    //GetListaClientess   => Traz toda a lista 
    //GetListaCLientes => Traz a lista dos que podem ser exibidos (filtrados) 

    const ChamaDados = () => {
        async function getListaClientess() {
            try {
                const data = await axios.get('http://localhost:3000/api/clientes/');
                console.log(data.data)
                setListaClientess(data.data)
                console.log(setAtualizaform(Atualizaform+1)) // --> Gera Numeros
                
            }
            catch (error) {
                alert("Ocorreu um erro")
            }
        }
        console.log("Carregando os itens mudando")
        getListaClientess()
        console.log(ListaClientess)
        console.log("Fim do lista clientes")
    }


    // Cria uma lista com os objetos que podem ser exibidos -> pq trazer tudo? colocar cinza no futuro para 
    // Promoções que já estão indisponiveis  
     const filteredUsersfunc = () => { 

            for (var i = 0; i< ListaClientess.length; i++){
              console.log('Posicao: ',ListaClientess[i]["status_exibicao"]);  
              if (ListaClientess[i]["status_exibicao"] === '1'){
                ListaClientes.push(ListaClientess[i]) // listaclientes passa a ter filtros 
              }
        
            }; 

            console.log("Os Posts foram Filtrados e numeros foram gerados");
            //GeraNumeros();

            }
    
    // Display 
    //const valor = 0;

    const displayData2 = (valor) => {

        valor = parseInt(valor);
        //console.log('valor:',valor);

        // Garante que não vai tentar renderizar nada que n exista
        if (valor > (ListaClientes.length) ){
            valor = 0;
            console.log("Dentro do displayData 2")    
        }

        valor = parseInt(valor);
        //console.log('valor:',valor);

        return (
            <Cardes cardTitle={ListaClientes[valor]["nome_empresa"]}
                link_image={ListaClientes[valor]["link_imagem"]}
                texto_imagem={ListaClientes[valor]["descricao_postagem"]}
                numero_telefone={ListaClientes[valor]["telefone_contato"]}
                link_zap={ListaClientes[valor]["link_contato"]}>
            </Cardes>
            )
    }


    // Para colocar os cards de forma aleatoria no HOME 
    const [lista, setLista] = useState([0,0,0,0,0,0,0,0,0]);

    const GeraNumeros = () => { 
        //const maxNumbers = 9;
        const maxNumbers = (ListaClientes.length - 1);
        let list = [];
        let randomNumber;
        let tmp;

        for (let i = 0; i < maxNumbers; i++) {
            list[i] = i + 1;
            } // gera a primeira lista de [1..comprimento_array]

        for (let i = list.length; i;) {
            randomNumber = Math.random() * i-- | 0;
            tmp = list[randomNumber];
            // troca o número aleatório pelo atual
            list[randomNumber] = list[i];
            // troca o atual pelo aleatório
            list[i] = tmp;
        }

        //completa o resto com 0
        for (let i = (list.length) ; (i < lista.length) ; i++){
            list[i] = 0;
        }

        setLista(list)
        console.log(lista);        
    }

    return (
        <>
        <p></p>
                {/* Isso são Grids */}
                <div className="container">
                <div className="row">
                <div className="col-sm">
                {/* {displayData2(0)} */}
                {displayData2(lista[0])}
                </div>
                <div className="col-sm">
                {displayData2(lista[1])}
                {/* {displayData2(2)} */}
                </div>
                <div className="col-sm">
                {displayData2(lista[2])}
                {/* {displayData2(3)} */}
                </div>
                </div>
                </div>
        <p></p>

        <p></p>
                {/* Isso são Grids */}
                <div className="container">
                <div className="row">
                <div className="col-sm">
                {/* {displayData2(0)} */}
                {displayData2(lista[3])}
                </div>
                <div className="col-sm">
                {displayData2(lista[4])}
                {/* {displayData2(2)} */}
                </div>
                <div className="col-sm">
                {displayData2(lista[5])}
                {/* {displayData2(3)} */}
                </div>
                </div>
                </div>
        <p></p>

        <p></p>
                {/* Isso são Grids */}
                <div className="container">
                <div className="row">
                <div className="col-sm">
                {/* {displayData2(0)} */}
                {displayData2(lista[6])}
                </div>
                <div className="col-sm">
                {displayData2(lista[7])}
                {/* {displayData2(2)} */}
                </div>
                <div className="col-sm">
                {displayData2(lista[8])}
                {/* {displayData2(3)} */}
                </div>
                </div>
                </div>
        <p></p>


            {/* Botoes para testes */}
        {/* <Button style={{ width: '150px', margin: '10px', float: 'left' }}
                onClick={filteredUsersfunc} >Filtra</Button> 

            <Button style={{ width: '150px', margin: '10px', float: 'left' }}
                onClick={GeraNumeros} >Tetses</Button>  */}
                
        <br></br> 

        </>
    );

};


export default Home;
