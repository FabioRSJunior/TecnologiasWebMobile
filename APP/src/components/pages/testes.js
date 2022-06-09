//Pagina que serve pra testar as coisas 

//import React from 'react';
import { Card, button } from 'react-bootstrap'
import { Form, Container, Col, Button } from 'react-bootstrap';

//teste importando cards 
import React, { useState, useEffect} from 'react';
import Cliente from './Clientes';

//import UserTable from './UserTable';
import Cardes from './Cardes';

import Alerta from './Alertaa';

// Configuração de conexão 
const axios = require('axios')

const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
}

//export default Testes;
const Testes = () => {

    const [ListaClientes, setListaClientes] = useState([])

    //const [ClienteFragmento, setClienteFragmento] = useState([0]);
    const [Index, setIndex] = useState(0);
    

    const ChamaDados = () => {
        console.log("dentro do chama dados")
        console.log("Alerta possui o valr:",Alertaa)
        console.log("Dentro do chama dados")
        setAlertaa(0)   
        console.log("Alerta possui o valr:",Alertaa)
    }

    // Configurações de alerta 
    const [Alertaa, setAlertaa] = useState(3) 
    //const handleAlertaa = (e) => setAlertaa(e.target.value)     

    return (
        <>
        {/* <Button style={{ width: '150px', margin: '10px', float: 'left' }}
                onClick={filteredUsersfunc} >Filtra</Button>  */}


            <Button style={{ float: 'center' }}
                onClick={ChamaDados} >Testes</Button>

            <Alerta status={Alertaa} />
            {/* setAlertaa(0) -> Sucesso
            setAlertaa(1) -> Fracasso
            setAlertaa()  -> 00 */}
      
        </>
    );

};


export default Testes;


