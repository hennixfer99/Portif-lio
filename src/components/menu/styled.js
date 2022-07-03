import styled from "styled-components";

const Container = styled.div`
  
  .menu{
    display: flex;
    justify-content: space-between;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 1rem;
    margin-bottom: 1rem;
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
`;
export default Container;
