import react from 'react'


// <Alerta status={Alertaa} />
//             {/* setAlertaa(0) -> Sucesso
//             setAlertaa(1) -> Fracasso
//             setAlertaa()  -> 00 */}
  
// {/* <Alerta status={3} /> */}

function Alerta(props) {
    let status = props.status
    if (status === 0){ return ( 
                         <div class="alert alert-success" role="alert">
                        A sua operação foi um SUCESSO!
                        </div>); }

    if (status === 1){ return (<div className="alert alert-danger" role="alert">
                        A sua operação NÃO foi um sucesso!
                        </div>); }

    return (<></>);                     
                                         
}
export default Alerta;