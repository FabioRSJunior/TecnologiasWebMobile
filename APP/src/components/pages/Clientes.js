//import './Cliente.css'
import React, { useState, useEffect } from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap';
import { Alert } from 'bootstrap';
//import MaskedFormControl from 'react-bootstrap-maskedinput'

import Alerta from './Alertaa';

const axios = require('axios')
const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
}

class Cliente extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Nome_Empresa: '',
            Descricao_Postagem: '',
            Status_Exibicao: '',
            Link_Imagem:'',
            Link_Contato:'',
            Telefone_Contato:'',

            Alertaa: 3
        };

    }
    //setNome_Empresa = (Nome_EmpresaPar) => {this.setNome_Empresa({Nome_Empresa: Nome_EmpresaPar})}
    
    setAlertaa = (AlertaaPar) => {this.setState({Alertaa: AlertaaPar})}

    setNome_Empresa       = (Nome_EmpresaPar) => {this.setState({Nome_Empresa: Nome_EmpresaPar})} 
    setDescricao_Postagem = (Descricao_PostagemPar) => {this.setState({Descricao_Postagem: Descricao_PostagemPar})}
    setStatus_Exibicao    = (Status_ExibicaoPar) => {this.setState({Status_Exibicao: Status_ExibicaoPar})}
    setLink_Imagem        = (Link_ImagemPar) => {this.setState({Link_Imagem: Link_ImagemPar})}
    setLink_Contato       = (Link_ContatoPar) => {this.setState({Link_Contato: Link_ContatoPar})}   
    setTelefone_Contato   = (Telefone_ContatoPar) => {this.setState({Telefone_Contato: Telefone_ContatoPar})} 

    //setTipoMensagem   = (TipoMensagemPar) => {this.setState({TipoMensagem: TipoMensagemPar})} 

    // Zera os campos depois de enviar 
    showValues = () => {
        console.log(this.state.Nome_Empresa)
        console.log(this.state.Descricao_Postagem)
        console.log(this.state.Status_Exibicao)
        console.log(this.state.Link_Imagem)
        console.log(this.state.Link_Contato)
        console.log(this.state.Telefone_Contato)
        this.setNome_Empresa("")
        this.setDescricao_Postagem("")
        this.setStatus_Exibicao("")
        this.setLink_Imagem("")
        this.setLink_Contato("")
        this.setTelefone_Contato("")        
    }


    // inicio das configurações de conexão 
    insereCliente = () => {
        let clienteInserido = {}
            
        clienteInserido =  {               
            clienteNome_Empresa:  this.state.Nome_Empresa,
            clienteDescricao_Postagem:  this.state.Descricao_Postagem,
            clienteStatus_Exibicao:  this.state.Status_Exibicao,
            clienteLink_Imagem:  this.state.Link_Imagem,
            clienteLink_Contato:  this.state.Link_Contato,
            clienteTelefone_Contato:  this.state.Telefone_Contato    
        }
        console.log(clienteInserido)

        axios.post('http://localhost:3000/api/clientes', clienteInserido, axiosConfig)
            .then((res) => {
                console.log("Resposta recebida: ", res);                                
                this.setNome_Empresa("")
                this.setDescricao_Postagem("")
                this.setStatus_Exibicao("")
                this.setLink_Imagem("")
                this.setLink_Contato("")
                this.setTelefone_Contato("")
                this.setAlertaa(0)
            }  
            )
            

            .catch((err) => {
                console.log("Problema ao inserir o cliente: ", err);
                this.setAlertaa(1)
                console.log(this.state.Alertaa)
            }
            )
    }

    
    // fim das configurações de conexão
    // TÁ MUUUUUITO FEIO, MAS É DIGNO E FUNCIONA (*********Formulario bootstrap *************) 

      render() {
          return (
              <container>

            
            <br></br>
            <h2> Cadastre Sua Nova Postagem Aqui</h2>
            <br></br>

                <Alerta status={this.state.Alertaa} />

            <form>
            <div className="mb-3">

            {/* <div className="form-group"> */}
            <div className="form-control">

                <label for="exampleInputname">Nome da Empresa</label>
                <input type="Nome Empresa" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp" 
                 placeholder="Nome da Empresa"
                 onChange={e=>this.setNome_Empresa(e.target.value)}
                 value={this.state.Nome_Empresa}
                 >
                 </input>
            
                <label for="exampleInputEmail1">Descricao Postagem</label>
                <input type="Descricao Da Postagem" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp" 
                 placeholder="Descricao Da Postagem"
                 onChange={e=>this.setDescricao_Postagem(e.target.value)}
                 value={this.state.Descricao_Postagem}
                 >
                 </input>

                <label for="exampleInputEmail1">Status exibição</label>
                <input type="Status_Exibicao" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="Status_Exibicao" 
                 placeholder="Status_Exibicao"
                 onChange={e=>this.setStatus_Exibicao(e.target.value)}
                 value={this.state.Status_Exibicao}
                 >
                 </input>

                <label for="exampleInputEmail1">Link Imagem</label>
                <input type="Link_Imagem" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="Link_Imagem" 
                 placeholder="Link_Imagem"
                 onChange={e=>this.setLink_Imagem(e.target.value)}
                 value={this.state.Link_Imagem}
                 >
                 </input>

                <label for="exampleInputEmail1">Link_Contato</label>
                <input type="Link_Contato" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="Link_Contato" 
                 placeholder="Link_Contato"
                 onChange={e=>this.setLink_Contato(e.target.value)}
                 value={this.state.Link_Contato}
                 >
                 </input>

                 <label for="exampleInputEmail1">Telefone_Contato</label>
                <input type="Telefone_Contato" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="Telefone_Contato" 
                 placeholder="Telefone_Contato"
                 onChange={e=>this.setTelefone_Contato(e.target.value)}
                 value={this.state.Telefone_Contato}
                 >
                 </input>

                </div>
        
            {/* <Button style={{ width: '150px', margin: '10px', float: 'left'}}
               onClick={this.showValues}>Adionar</Button> */}

            <br></br>

            <Button className='btn btn-dark btn-lg' style={{ float:'center' }}
            onClick={this.insereCliente}>Adicionar</Button>    
            </div>
            </form>
               </container>
          );
      };
    }

export default Cliente;



