import React from 'react';
import rick from "../../imgs/rick.png"
import Container from './styled';
function Sobre() {

    return (

        <Container>
        <main>
            <div>
                <figure>
            <img alt = "eu" src={rick}/>
            </figure>
            <h1>Henrique F. Mendes</h1>
            </div>

            <div className='sobremim'>
                <h2>Sobre mim:</h2>
                <p className='descricao'>
                    Sou um estudante de desenvolvimento Full-Stack na Kenzie Academy Brasil com formação em Front-End, 
                    adoro estudar e aprender mais sobre essa área incrivel que é a programação e desenvolvimento 
                    estou ingressando pela primeira vez neste mercado afim de adquirir mais conhecimento e resolver problemas.
                </p>
                <h2>Competencias:</h2>
                <p>HTML | JS | CSS | GIT | React | Redux | Figma | Beekeper | Node.Js</p>
            </div>
        </main>
        
           
        </Container>
    )

}

export default Sobre