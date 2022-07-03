import React from "react";
import { Link } from "react-router-dom";
import Container from "./styled";

function Menu(){


    function github(){
        const redirect = window.open("https://github.com/hennixfer99")
        return redirect
    }
    function linkedin(){
        const redirect = window.open("https://www.linkedin.com/in/henrique-ferreira-mendes-0012451b2/")
        return redirect
    }

    return(
     <Container>
    <div className='menu'>
        <Link to="/">
        <button>Sobre</button>
        </Link>
        <Link to="/projetos">
            <button>Projetos</button>
            </Link>
            <Link to="/qualificacoes">
            <button>Qualificações</button>
            </Link>
            <button onClick={github}>Github</button>
            <button onClick={linkedin}>Linkedin</button>
        </div>
        </Container>
)
}

export default Menu