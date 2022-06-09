import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'


const Navigation = () => {
    return (
        <div>
            <Navbar className="navbar navbar-dark bg-dark mb-0 h4" >
            {/* <Navbar bg="dark" expand="lg" variant="dark" > */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                    <NavDropdown title="Postagens" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/clientes">Cadastrar</NavDropdown.Item>
                            <NavDropdown.Item href="/modificar">Modificar</NavDropdown.Item>
                            {/* <NavDropdown.Item href="/testes">Testes</NavDropdown.Item> */}
                            <NavDropdown.Item href="/deleta">Deletar</NavDropdown.Item>                            
                            {/* <NavDropdown.Divider /> */}
                        </NavDropdown>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">Sobre</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;
