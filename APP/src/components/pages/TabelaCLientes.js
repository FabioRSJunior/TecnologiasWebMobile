import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import React, { useState } from 'react';

const axios = require('axios');

export default function TabelaClientes(props) {

    const [clienteSelecionado, setClienteSelecionado] = useState(0)
    const [clienteSelecionaItem, setClienteSelecionaItem] = useState({})

    const columns = [{
        dataField: 'id_postagem',
        text: 'ID'
    },
    {
        dataField: 'status_exibicao',
        text: 'state',
    },
    {
        dataField: 'nome_empresa', //muito cuidado com esses campos 
        text: 'Nome',
        // Tirei, fica feio 
        // filter: textFilter(
        //     {
        //         onFilter: filterVal => console.log(`Filter Value: ${filterVal}`)
        //     }
        // )
    },
    {
        dataField: 'descricao_postagem',
        text: 'descricao_postagem',
    },
    // {
    //     dataField: 'link_imagem',
    //     text: '',
    // },
    // {
    //     dataField: 'link_contato',
    //     text: '',
    // },
    {
        dataField: 'telefone_contato',
        text: 'Telefone de Contato',
    }
    ];


// onSelect -> permite carregar o ID, row.id_postagem carrega o selecionado  
// teste [OK] - Funciona
//const carregaCampos = (id_postagem) => {props.carregaCampos(id_postagem);}
// id_postagem, link_contato, link_imagem, nome_empresa, status_exibicao, telefone_contato


    const carregaCampos = (id_postagem, nome_empresa, descricao_postagem, status_exibicao, link_imagem, link_contato, telefone_contato) => {
    props.carregaCampos(id_postagem, nome_empresa, descricao_postagem, status_exibicao, link_imagem, link_contato, telefone_contato); }

    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        onSelect: (row, isSelect, rowIndex, e) => {
            if (isSelect) {
                console.log(row.id_postagem);
                console.log(e); 
                // toda vez que eu seleciono um o ID dele aparece no console 
                carregaCampos(row.id_postagem, row.nome_empresa, row.descricao_postagem ,row.status_exibicao, row.link_imagem, row.link_contato, row.telefone_contato)
                //carregaCampos(row.id_postagem)
                //carregaCampos(row.id_postagem, row.nome_empresa, row.link_contato, row.telefone_contato)
            }
            else {
                carregaCampos("", "", "", "", "","","")
                console.log("Click OFF")
            }
        },
        onSelectAll: (isSelect, rows, e) => {
            console.log(rows);
        }
    };

    function afterFilter(newResult, newFilters) {
        console.log(newResult);
        console.log(newFilters);
    }

    return (
        // Exibir Clientes, Funciona n mexe 
        <div>
            <div>
                <BootstrapTable 
                    keyField='id_postagem'
                    data={props.clientes}
                    columns={columns}
                    selectRow={selectRow}
                    filter={filterFactory({ afterFilter })}
                    filterPosition="top"
                    noDataIndication="Sem clientes cadastrados"
                />
            </div>
            <div>
                <table >
                    <tr>
                    </tr>
                </table>
            </div>
        </div>
    )
}