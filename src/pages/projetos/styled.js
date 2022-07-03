import styled from "styled-components";

const Container = styled.div`
  main{
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: rgba(0, 0, 0, .3);
    backdrop-filter: blur(5px);
    border: 1px solid black;
    border-radius: 8px;
    -webkit-box-shadow: 1px 3px 12px 4px rgba(0, 0, 0, 0.68);
    box-shadow: 1px 3px 12px 4px rgba(0, 0, 0, 0.68);
    padding-bottom: 6%;
    }
    .projetinhos{
        display: flex;
        justify-content: space-between;
        margin: 0 10%;
        align-items: center;
    }
    p{
    max-width: 300px;
    }
    button{
    height: 35px;
    background-color: transparent;
    color: white;
    border-radius: 8px;
    border: 1px solid white;
    cursor: pointer;
    background-color: rgba(0, 0, 0, .3);
    backdrop-filter: blur(5px);
    -webkit-box-shadow: 1px 3px 12px 4px rgba(0, 0, 0, 0.68);
    box-shadow: 1px 3px 12px 4px rgba(0, 0, 0, 0.68);
  }
  button:hover{
    color: red;
  }
  .botoes{
    display: flex;
    justify-content: space-around;
  }
  .cards{
    margin-top: 40px;
    padding-bottom: 3%;
    border: 1px solid black;
    border-radius: 15px;
    -webkit-box-shadow: 1px 3px 12px 4px rgba(0, 0, 0, 0.68);
    box-shadow: 1px 3px 12px 4px rgba(0, 0, 0, 0.68);
  }
`;
export default Container;
