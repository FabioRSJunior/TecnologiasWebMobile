import React from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap';

const DeletaFake = () => {
    return (
        <container>
            <div className="mb-3"> 
            <br></br>    
            <h1>Essa Opção não está disponivel para o Usuario comum</h1>
            <br></br>

                <h4>Recomendamos que voce não delete sua postagem</h4>
                <h4>Precisamos manter um controle dessas informações</h4>
                <h4>Entre em contato se realmente precisar excluir algo</h4>
                

            <br></br>
            <br></br>

                <Button href="http://localhost:3001/"  
                className="btn btn-dark btn-lg" 
                style={{ float:'center'}} > PÁGINA HOME </Button>
                
            </div>
    </container> 
    );
};

export default DeletaFake;