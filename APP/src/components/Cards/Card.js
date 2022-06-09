import React from 'react';
import { Card, button } from 'react-bootstrap'


/*
card-title = Nome da empresa
card-text = texto da promoção. Deve ser limitado para não ficar feio 

button = Link de redirecionamento para o WatsApp 
*/


const Carde = (props) => {
    return (

<div class="w-25 p-2">
  <div className="card" >
        {/* style="width: 18rem;"> */}
    <h5 className="card-title">{Props.cardTitle}</h5>
    <img src="https://user-images.githubusercontent.com/29241659/87479229-79442f00-c601-11ea-8ca6-f9a8070a17e5.png" 
    className="card-img-top" alt="uma imagem qualquer"></img>
    <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div className="card-body">
    <button type="button" class="btn btn-link">Chamar no Zap</button>
    </div>
    </div>
</div>//fim container 

        );
};


export default Carde;