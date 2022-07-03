import styled from "styled-components";

const Container = styled.div`
  
  background-color: rgba(0, 0, 0, .3);
  backdrop-filter: blur(5px);
  border: 1px solid black;
  border-radius: 8px;

 figure{ 
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 }
 img{
  border-radius: 15px;
  -webkit-box-shadow: 1px 3px 12px 4px rgba(0, 0, 0, 0.68);
    box-shadow: 1px 3px 12px 4px rgba(0, 0, 0, 0.68);
 }

`;
export default Container;
