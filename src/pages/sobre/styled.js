import styled from "styled-components";

const Container = styled.div`
  
  figure{
    max-width: 250px;
  }

  img {
    box-sizing: border-box;
    max-width: 100%;
    border-radius: 15px;
  }

  main {
    max-width: 100%;
    display: flex;
    justify-content: space-around;
   
    border: 1px solid black;
    border-radius: 8px;
    align-items: center;
    background-color: rgba(0, 0, 0, .3);
    backdrop-filter: blur(5px);
    -webkit-box-shadow: 1px 3px 12px 4px rgba(0, 0, 0, 0.68);
    box-shadow: 1px 3px 12px 4px rgba(0, 0, 0, 0.68);
  }
  main h1 {
    font-size: 25px;
    text-align: center;
  }
  .sobremim h2 {
    font-size: 20px;
  }
  .descricao {
    text-align: left;
    max-width: 600px;
  }
`;
export default Container;
