import react from 'react'

// -------------------------------------------- Função do bootstrap retorna o card formatado ------- 

// Isso é um Componente 
const Cardes = (props) => {
    
    
    return (
        // <div className='component'></div> 
        // <div className="w-25 p-2">
        <div className="row" >
            <div className="col-sm">
            <div className="card" > {/* style="width: 18rem;"> */}
            <h3 className="card-title">{props.cardTitle}</h3>
            <img src={props.link_image} 
            className="card-img-top" alt="Default-Dentro-Card"></img>
            <div className="card-body">
                <p className="card-text">{props.texto_imagem}.</p>
            </div>
            <div className="card-body">
            <a href={props.link_zap} className="btn btn-success btn-lg"> {props.numero_telefone} </a> 
             {/* <button type="button" class="btn btn-link">{props.link_zap}</button> */}
            </div>
            </div>
            </div>

        </div>//fim container 
        );
};

export default Cardes;

