import React from "react";
import Container from "./styled";

function Projetos(){

function torre(){

    const redirect = window.open("https://kenzie-academy-brasil-developers.github.io/m2-entrega-torre-de-hanoi-sprint-1a-hennixfer99/")
    return redirect

}
function torre2(){
    const redirect = window.open("https://github.com/Kenzie-Academy-Brasil-Developers/m2-entrega-torre-de-hanoi-sprint-1a-hennixfer99")
    return redirect
}
function kenziehub(){
    
    const redirect = window.open("https://react-entrega-s2-kenzie-hub-hennixfer99.vercel.app/")
    return redirect

}
function kenziehub2(){
    const redirect = window.open("https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-hennixfer99")
    return redirect
}
function myPlant(){
    
    const redirect = window.open("https://m3-projeto-capstone-alex-grupo3-paulo-david.vercel.app/")
    return redirect

}
function myPlant2(){
    const redirect = window.open("")
    return redirect
}
function kenzieShop(){
    
    const redirect = window.open("https://react-entrega-s3-kenzieshop-hennixfer99.vercel.app/")
    return redirect

}
function kenzieShop2(){
    const redirect = window.open("https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzieshop-hennixfer99")
    return redirect
}


    return(
        <Container>
            <main>
                <h1>Projetos mais recentes</h1>
               <div className="projetinhos">
                <div>
                <div className="cards">
                    <h2>KenzieHub</h2>
                    <p>Meu primeiro projeto em React, designe feito seguindo um figma</p>
                    <div className="botoes">
                    <button onClick={kenziehub}>KenzieHub</button>
                    <button onClick={kenziehub2}>Repositório</button>
                    </div>
                    </div>
                    <div className="cards">
                    <h2>My Plant</h2>
                    <p>Projeto feito em grupo com a utilização de React, React Redux e consumo de API</p>
                    <button onClick={myPlant}>My Plant</button>
                </div>
                </div>
                <div>
                    <div className="cards">
                    <h2>Torre de Hanoi</h2>
                    <p>Meu primeiro projeto feito em DOM</p>
                    <div className="botoes">
                    <button onClick={torre}>Torre de Hanoi</button>
                    <button onClick={torre2}>Repositório</button>
                    </div>
                    </div>

                    <div className="cards">
                    <h2>Kenzie Shop</h2>
                    <p>Projeto feito em React com design livre aonde precisavamos fazer uma loja</p>
                    <div className="botoes">
                    <button onClick={kenzieShop}>Kenzie Shop</button>
                    <button onClick={kenzieShop2}>Repositório</button>
                    </div>
                    </div>
                </div>
                </div>
            </main>
        </Container>
    )
}

export default Projetos