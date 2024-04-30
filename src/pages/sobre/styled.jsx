import styled from "styled-components";


export const Main = styled.main`
width: 100%;
height: 50vh;
display: flex;
background-color: #FBACA7;
flex-direction: column;
align-items: center;
@media (max-width: 500px) {
    flex-direction: column;
}

`
export const Boxsobre = styled.section`
display: flex;
    justify-content: center;
    align-items: center;
    color: #1B434C;
    height: 60vh;
    width: 90%;
    font-size: 1vw;
    p{
    font-weight: bold;
    font-size: 1.5rem;
    }
@media(max-width:500px){
font-size: 1.3rem;
}
`